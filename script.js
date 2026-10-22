var KEY = "arcano-v2", MAX = 6, mode = "daily";
var target = null, guesses = [];
var S = { played: 0, wins: 0, streak: 0, last: -9, today: null };

function ld() {
  try { var v = localStorage.getItem(KEY); if (v) S = Object.assign(S, JSON.parse(v)); } catch (e) {}
}
function sv() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
}

var d = new Date();
var DAY = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);

function dailyTarget() { return CARDS[(DAY * 7 + 3) % CARDS.length].id; }
function $(i) { return document.getElementById(i); }
function done() { return guesses.indexOf(target) > -1 || guesses.length >= MAX; }

// Seis pistas, de más general a más concreta. Cada una recorta el espacio
// de búsqueda a la mitad, y las de significado enseñan antes que las de trivia.
function clues(c) {
  if (c.arc === "mayor") {
    return [
      ["Categoría", "Arcano Mayor (22 cartas)"],
      ["Elemento o astro", c.meta],
      ["Posición", c.n <= 10 ? "Primera mitad del viaje (0–X)" : "Segunda mitad del viaje (XI–XXI)"],
      ["Palabra clave", c.kw[0]],
      ["Escena", c.scene],
      ["Numeral", "Su número romano empieza por «" + c.roman.charAt(0) + "» y tiene " +
        c.roman.length + (c.roman.length === 1 ? " signo" : " signos")]
    ];
  }
  var rank = RANKS[c.n - 1];
  var last = c.court
    ? ["Rango", "Su rango tiene " + rank.name.length + " letras"]
    : ["Número", "Es un número " + (c.n % 2 === 0 ? "par" : "impar")];
  return [
    ["Categoría", "Arcano Menor (56 cartas)"],
    ["Palo", SUITS[c.suit].name + " · " + SUITS[c.suit].el + " — " + SUITS[c.suit].dom],
    ["Rango", c.court
      ? "Es una carta de corte. " + (c.n <= 12 ? "Sota o Caballo" : "Reina o Rey")
      : "Es un pip, del As al 10. " + (c.n <= 5 ? "Entre el As y el 5" : "Entre el 6 y el 10")],
    ["Palabra clave", c.kw[0]],
    ["Escena", c.scene],
    last
  ];
}

function options() {
  var o = '<option value="">Elige una carta…</option>';
  o += '<optgroup label="Arcanos Mayores">';
  CARDS.forEach(function (c, i) {
    if (c.arc === "mayor" && guesses.indexOf(c.id) < 0)
      o += '<option value="' + c.id + '">' + c.roman + " · " + c.name + "</option>";
  });
  o += "</optgroup>";
  ["bastos", "copas", "espadas", "oros"].forEach(function (s) {
    o += '<optgroup label="' + SUITS[s].name + '">';
    CARDS.forEach(function (c) {
      if (c.suit === s && guesses.indexOf(c.id) < 0)
        o += '<option value="' + c.id + '">' + c.name + "</option>";
    });
    o += "</optgroup>";
  });
  return o;
}

function render() {
  var fin = done(), won = guesses.indexOf(target) > -1, c = BY_ID[target];
  var cl = clues(c), shown = fin ? MAX : guesses.length + 1, h = "";

  $("sub").textContent = mode === "daily"
    ? "Una carta del tarot cada día. Tienes 6 intentos y cada fallo revela una pista."
    : "Modo práctica: no cuenta para tu racha.";

  for (var k = 0; k < MAX; k++) {
    h += k < shown
      ? "<li><b>" + cl[k][0] + ":</b>" + cl[k][1] + "</li>"
      : '<li class="lock">Pista ' + (k + 1) + " · se abre al fallar</li>";
  }
  $("clues").innerHTML = h;

  var ncls = c.court ? " small" : (c.numeral.length >= 4 ? " mid" : "");
  $("card").innerHTML = fin
    ? '<span class="num' + ncls + '">' + c.numeral +
      '</span><span class="cname">' + c.name + "</span>"
    : '<span class="num">?</span>';

  $("misses").innerHTML = guesses
    .filter(function (g) { return g !== target; })
    .map(function (g) { return '<p class="miss">✗ ' + BY_ID[g].name + "</p>"; })
    .join("");

  $("play").style.display = fin ? "none" : "block";
  $("sel").innerHTML = options();

  var e = "";
  if (fin) {
    var sys = "";
    if (c.arc === "menor") {
      sys = '<p class="sys"><b>Cómo se compone:</b> ' + RANKS[c.n - 1].name +
        " = " + RANKS[c.n - 1].core + " · " + SUITS[c.suit].name +
        " = " + SUITS[c.suit].dom + ".</p>";
    }
    e = '<div class="res' + (won ? " win" : "") + '"><h2>' +
      (won ? "¡Lo tienes en " + guesses.length + (guesses.length === 1 ? " intento!" : " intentos!")
           : "Era " + c.numeral + " · " + c.name) +
      "</h2><p><b>" + c.name + "</b>: " + c.mean + "</p>" +
      '<p class="hint">Para recordarla, visualiza esta escena: ' + c.scene.toLowerCase() + ".</p>" +
      sys + '<button id="again">Otra carta de práctica</button></div>';
  }
  $("end").innerHTML = e;

  var b = $("again");
  if (b) b.onclick = practice;

  $("stats").textContent = "Partidas: " + S.played + " · Aciertos: " + S.wins + " · Racha: " + S.streak;
}

function guess() {
  if (done()) return;
  var v = $("sel").value;
  if (!v || guesses.indexOf(v) > -1) return;
  guesses.push(v);
  if (mode === "daily") {
    S.today = { day: DAY, g: guesses.slice() };
    if (done()) {
      var w = guesses.indexOf(target) > -1;
      S.played++;
      if (w) { S.wins++; S.streak = (S.last === DAY - 1) ? S.streak + 1 : 1; }
      else S.streak = 0;
      S.last = DAY;
    }
    sv();
  }
  render();
}

function practice() {
  mode = "practice";
  var t;
  do { t = CARDS[Math.floor(Math.random() * CARDS.length)].id; } while (t === target);
  target = t; guesses = []; render();
}

$("go").onclick = guess;
$("sel").addEventListener("keydown", function (ev) { if (ev.key === "Enter") guess(); });

ld();
target = dailyTarget();
if (S.today && S.today.day === DAY && Array.isArray(S.today.g)) {
  guesses = S.today.g.filter(function (id) { return BY_ID[id]; });
}
render();
