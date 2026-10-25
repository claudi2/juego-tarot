# Descarga las 78 cartas del Rider-Waite-Smith (1909, dominio público) desde
# Wikimedia Commons, las reduce a 400 px de ancho y las guarda en ../img/
# con el id de cada carta (m18.jpg, copas-5.jpg, ...).
#
# Usa las miniaturas del CDN (thumb.wikimedia.org) en lugar del archivo
# original: pesan menos y evitan el límite de peticiones (HTTP 429).
#
# Uso:  powershell -ExecutionPolicy Bypass -File tools/fetch-images.ps1
# Si un archivo ya existe, se salta.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "img"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

Add-Type -AssemblyName System.Drawing

$majors = @(
  "RWS_Tarot_00_Fool.jpg",
  "RWS_Tarot_01_Magician.jpg",
  "RWS_Tarot_02_High_Priestess.jpg",
  "RWS_Tarot_03_Empress.jpg",
  "RWS_Tarot_04_Emperor.jpg",
  "RWS_Tarot_05_Hierophant.jpg",
  "RWS_Tarot_06_Lovers.jpg",
  "RWS_Tarot_07_Chariot.jpg",
  "RWS_Tarot_08_Strength.jpg",
  "RWS_Tarot_09_Hermit.jpg",
  "RWS_Tarot_10_Wheel_of_Fortune.jpg",
  "RWS_Tarot_11_Justice.jpg",
  "RWS_Tarot_12_Hanged_Man.jpg",
  "RWS_Tarot_13_Death.jpg",
  "RWS_Tarot_14_Temperance.jpg",
  "RWS_Tarot_15_Devil.jpg",
  "RWS_Tarot_16_Tower.jpg",
  "RWS_Tarot_17_Star.jpg",
  "RWS_Tarot_18_Moon.jpg",
  "RWS_Tarot_19_Sun.jpg",
  "RWS_Tarot_20_Judgement.jpg",
  "RWS_Tarot_21_World.jpg"
)

# id en la app -> prefijo del archivo en Commons
$suits = [ordered]@{
  bastos  = "Wands"
  copas   = "Cups"
  espadas = "Swords"
  oros    = "Pents"
}

$cards = New-Object System.Collections.Generic.List[object]
for ($n = 0; $n -lt 22; $n++) {
  $cards.Add(@{ id = "m$n"; title = "File:" + $majors[$n] })
}
foreach ($s in $suits.Keys) {
  for ($n = 1; $n -le 14; $n++) {
    $cards.Add(@{ id = "$s-$n"; title = ("File:{0}{1:D2}.jpg" -f $suits[$s], $n) })
  }
}

$ua = @{ "User-Agent" = "ArcanoDelDia/1.0 (local static tarot learning app)" }
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }

function Get-ThumbUrls([object[]]$batch) {
  $titles = ($batch | ForEach-Object { $_.title }) -join "|"
  $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json" +
    "&formatversion=2&prop=imageinfo&iiprop=url&iiurlwidth=500&titles=" +
    [uri]::EscapeDataString($titles)
  for ($try = 0; $try -lt 4; $try++) {
    try {
      $r = Invoke-RestMethod -Uri $url -UseBasicParsing -TimeoutSec 40 -Headers $ua
      return $r.query.pages
    } catch {
      if ($try -eq 3) { throw }
      $wait = 6 * ($try + 1)
      Write-Host ("  API ocupada, reintento en {0} s..." -f $wait)
      Start-Sleep -Seconds $wait
    }
  }
}

function Save-Card([string]$url, [string]$dest) {
  $tmp = [System.IO.Path]::GetTempFileName()
  try {
    for ($try = 0; $try -lt 4; $try++) {
      try {
        Invoke-WebRequest -Uri $url -OutFile $tmp -Headers $ua -TimeoutSec 60
        break
      } catch {
        if ($try -eq 3) { throw }
        $wait = 8 * ($try + 1)
        Write-Host ("  descarga ocupada, reintento en {0} s..." -f $wait)
        Start-Sleep -Seconds $wait
      }
    }

    $src = [System.Drawing.Image]::FromFile($tmp)
    $w = 400
    $h = [int][Math]::Round($src.Height * $w / $src.Width)
    $bmp = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, 0, 0, $w, $h)
    $g.Dispose()
    $src.Dispose()

    $p = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
      [System.Drawing.Imaging.Encoder]::Quality, 82)
    $bmp.Save($dest, $codec, $p)
    $bmp.Dispose()
  } finally {
    Remove-Item $tmp -ErrorAction SilentlyContinue
  }
}

# Resuelve las URLs de las miniaturas en lotes de 50.
$thumbs = @{}
for ($i = 0; $i -lt $cards.Count; $i += 50) {
  $batch = $cards[$i..([Math]::Min($i + 49, $cards.Count - 1))]
  $pages = Get-ThumbUrls $batch
  foreach ($p in $pages) {
    if ($p.imageinfo -and $p.imageinfo[0].thumburl) {
      # La API devuelve los títulos con espacios; los nuestros usan guiones bajos.
      $key = $p.title -replace " ", "_"
      $thumbs[$key] = $p.imageinfo[0].thumburl
    }
  }
}

$total = $cards.Count
$done = 0
$ok = 0
$fail = 0

foreach ($c in $cards) {
  $done++
  $dest = Join-Path $outDir ($c.id + ".jpg")
  if (Test-Path $dest) { $ok++; continue }

  $url = $thumbs[$c.title]
  if (-not $url) {
    Write-Warning ("Sin URL para {0}" -f $c.title)
    $fail++
    continue
  }

  Write-Host ("[{0}/{1}] {2}" -f $done, $total, (Split-Path -Leaf $dest))
  try {
    Save-Card $url $dest
    $ok++
  } catch {
    Write-Warning ("Fallo {0}: {1}" -f $c.title, $_.Exception.Message)
    $fail++
  }
  Start-Sleep -Milliseconds 1200
}

$files = Get-ChildItem $outDir -Filter *.jpg
$bytes = ($files | Measure-Object Length -Sum).Sum
Write-Host ("`n{0}/{1} imagenes ({2} fallos), {3:N1} MB en {4}" -f `
  $ok, $total, $fail, ($bytes / 1MB), $outDir)
