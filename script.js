var KEY = "arcano-v2", MAX = 5, mode = "daily";
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

// Cinco pistas. El orden va de la emoción a la estructura:
//   dominio -> símbolo -> significado -> ambiente -> posición
// La posición (el tramo o el rango) va al final: es la última muleta, no la
// primera. El número exacto no se dice nunca; se deduce del significado.
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function clues(c) {
  if (c.arc === "mayor") {
    return [
      ["Dominio", cap(ELEMENTS[c.el].tema)],
      ["Símbolo", ELEMENTS[c.el].name],
      ["Palabra clave", c.kw[0]],
      ["Ambiente", c.amb],
      ["Posición", c.n <= 7 ? "Entre el 0 y el VII" : c.n <= 14 ? "Entre el VIII y el XIV" : "Entre el XV y el XXI"]
    ];
  }
  var suit = SUITS[c.suit];
  var pos = c.court
    ? (c.n <= 12 ? "Corte: Paje o Caballo" : "Corte: Reina o Rey")
    : (c.n <= 5 ? "Pip del As al 5" : "Pip del 6 al 10");
  return [
    ["Dominio", cap(suit.el) + ", " + suit.dom],
    ["Símbolo", cap(suit.sym)],
    ["Palabra clave", c.kw[0]],
    ["Ambiente", c.amb],
    ["Posición", pos]
  ];
}

function numLabel(c) {
  return c.arc === "mayor" ? c.roman : RANKS[c.n - 1].name;
}

// Feedback tipo Wordle para cada fallo: palo, elemento y número.
// Verde = coincide · amarillo = misma familia (mismo elemento, distinto palo)
// Rojo = no coincide · ↑/↓ = la carta secreta está por encima o por debajo.
function fbRow(g, t) {
  var palo = g.arc === "mayor" ? "Arcano Mayor" : "Palo: " + SUITS[g.suit].name;
  var pst;
  if (g.arc === "mayor" && t.arc === "mayor") pst = "ok";
  else if (g.arc === "menor" && t.arc === "menor" && g.suit === t.suit) pst = "ok";
  else if (g.el === t.el) pst = "near";
  else pst = "no";

  var est = g.el === t.el ? "ok" : "no";

  var nst, ntxt, ntitle = "";
  if (g.arc !== t.arc) {
    nst = "off"; ntxt = "—";
    ntitle = ' title="El número solo se compara dentro del mismo tipo"';
  } else if (g.n === t.n) {
    nst = "ok"; ntxt = numLabel(g);
  } else {
    nst = "no";
    ntxt = numLabel(g) + (t.n > g.n ? " ↑" : " ↓");
    ntitle = ' title="La carta secreta tiene un número ' + (t.n > g.n ? "más alto" : "más bajo") + '"';
  }

  return '<div class="fbrow"><span class="fbname">✗ ' + g.name + "</span>" +
    '<span class="chip ' + pst + '">' + palo + "</span>" +
    '<span class="chip ' + est + '">Elemento: ' + ELEMENTS[g.el].name + "</span>" +
    '<span class="chip ' + nst + '"' + ntitle + ">Número: " + ntxt + "</span></div>";
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
    ? "Una carta del tarot cada día. Tienes 5 intentos y cada fallo revela una pista."
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

  var wrong = guesses.filter(function (g) { return g !== target; });
  $("misses").innerHTML = (wrong.length
    ? '<p class="legend">Verde = coincide · Amarillo = misma familia · Rojo = no · ↑/↓ = la carta secreta está más arriba/abajo</p>'
    : "") + wrong.map(function (g) { return fbRow(BY_ID[g], c); }).join("");

  $("play").style.display = fin ? "none" : "block";
  $("sel").innerHTML = options();

  var e = "";
  if (fin) {
    e = '<div class="res' + (won ? " win" : "") + '"><h2>' +
      (won ? "¡Lo tienes en " + guesses.length + (guesses.length === 1 ? " intento!" : " intentos!")
           : "Era " + c.numeral + " · " + c.name) +
      "</h2><p><b>Significado:</b> " + c.mean + "</p>" +
      '<p class="read"><b>Cómo se lee:</b> ' + c.read + "</p>" +
      '<p class="hint">Para recordarla, visualiza esta escena: ' + c.scene.toLowerCase() + ".</p>" +
      '<button id="again">Otra carta de práctica</button></div>';
  }
  $("end").innerHTML = e;

  var b = $("again");
  if (b) b.onclick = practice;

  $("stats").textContent = "Partidas: " + S.played + " · Aciertos: " + S.wins + " · Racha: " + S.streak;
  $("ver").textContent = "v2 · " + CARDS.length + " cartas";
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

// Tema: morado + naranja por defecto (el que se veía de noche),
// con botón para cambiar a claro. La elección se recuerda.
var TK = "arcano-theme";
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  var b = $("theme");
  if (!b) return;
  b.textContent = t === "dark" ? "☀" : "☾";
  b.setAttribute("aria-label", t === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
}
(function () {
  var saved = null;
  try { saved = localStorage.getItem(TK); } catch (e) {}
  applyTheme(saved === "light" ? "light" : "dark");
  var b = $("theme");
  if (b) b.onclick = function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(TK, next); } catch (e) {}
  };
})();

ld();
target = dailyTarget();
if (S.today && S.today.day === DAY && Array.isArray(S.today.g)) {
  guesses = S.today.g.filter(function (id) { return BY_ID[id]; });
}
render();
