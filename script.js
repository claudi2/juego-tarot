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
    : (c.n <= 5 ? "Del As al 5" : "Del 6 al 10");
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
  var frame = $("frame");
  if (frame && frame.classList) frame.classList.toggle("reveal", fin);
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
    ? '<img class="cardimg" src="img/' + c.id + '.jpg" alt="' + c.name +
      '" onerror="this.classList.add(\'hide\')">' +
      '<span class="num' + ncls + '">' + c.numeral +
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
      "</h2>" +
      (won ? '<p class="rname">' + c.numeral + " · " + c.name + "</p>" : "") +
      "<p><b>Significado:</b> " + c.mean + "</p>" +
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

// Ayuda: modal con instrucciones.
(function () {
  var modal = $("helpModal"), open = $("help"), close = $("helpClose"), ok = $("helpOk");
  if (!modal || !open || !close) return;

  function show() {
    modal.hidden = false;
    document.body.classList.add("modal-open");
    close.focus();
  }
  function hide() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    open.focus();
  }

  open.onclick = show;
  close.onclick = hide;
  if (ok) ok.onclick = hide;
  modal.addEventListener("click", function (e) { if (e.target === modal) hide(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) hide();
  });
  modal.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var f = modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();

// ── En mano: práctica con la baraja física ───────────────────────────────
// La app no roba por ti. Tú sacas la carta, dices cuál es (palo + número) y
// la app te acompaña para recordar su significado. Cada carta se guarda en un
// montón: 0 = para repasar, 1 = aprendiendo, 3 = dominada.
var HAND_KEY = "arcano-hand", HAND_MAX = 4, HAND_MASTER = 3;
var hand = { cards: {}, suit: "mayores", id: null, stage: 0, rated: false, rate: null, review: false, orient: "up" };
var HAND_SUITS = [
  { id: "mayores", name: "Mayores" },
  { id: "bastos", name: "Bastos" },
  { id: "copas", name: "Copas" },
  { id: "espadas", name: "Espadas" },
  { id: "oros", name: "Oros" }
];

function handLoad() {
  try {
    var raw = localStorage.getItem(HAND_KEY);
    if (!raw) return;
    var o = JSON.parse(raw);
    if (!o || typeof o !== "object" || Array.isArray(o)) return;
    Object.keys(o).forEach(function (id) {
      if (!BY_ID[id]) return;
      var v = o[id];
      if (!v || typeof v !== "object") return;
      hand.cards[id] = {
        box: Math.max(0, Math.min(HAND_MAX, Math.floor(Number(v.box) || 0))),
        seen: Math.max(0, Math.floor(Number(v.seen) || 0)),
        last: Number(v.last) || 0
      };
    });
  } catch (e) {}
}

function handSave() {
  try { localStorage.setItem(HAND_KEY, JSON.stringify(hand.cards)); } catch (e) {}
}

function handStats() {
  var out = { seen: 0, mastered: 0, learning: 0, review: 0, pending: 0 };
  Object.keys(hand.cards).forEach(function (id) {
    var st = hand.cards[id];
    if (!st || !st.seen) return;
    out.seen++;
    if (st.box >= HAND_MASTER) {
      out.mastered++;
    } else {
      out.pending++;
      if (st.box > 0) out.learning++;
      else out.review++;
    }
  });
  return out;
}

function handDot(c) {
  var st = hand.cards[c.id];
  if (!st || !st.seen) return "";
  var k = st.box >= HAND_MASTER ? "ok" : st.box > 0 ? "mid" : "bad";
  return '<span class="dot ' + k + '" aria-hidden="true"></span>';
}

function handComp(c) {
  if (c.arc === "mayor") return c.numeral + " · " + c.meta;
  var r = RANKS[c.n - 1], s = SUITS[c.suit];
  var rank = c.court ? r.name : c.numeral + " · " + r.name;
  return rank + " (" + r.core + ") en " + s.name + " (" + s.dom + ")";
}

function handPicker() {
  var sh = $("handSuits"), grid = $("handGrid");
  if (!sh || !grid) return;

  sh.innerHTML = HAND_SUITS.map(function (s) {
    var on = hand.suit === s.id;
    return '<button type="button" class="hand-suit' + (on ? " on" : "") +
      '" data-suit="' + s.id + '" aria-pressed="' + on + '">' + s.name + "</button>";
  }).join("");

  var list = CARDS.filter(function (c) {
    return hand.suit === "mayores" ? c.arc === "mayor" : c.suit === hand.suit;
  });
  var major = hand.suit === "mayores";
  grid.className = "hand-grid" + (major ? " majors" : "");
  grid.innerHTML = list.map(function (c) {
    return '<button type="button" class="hand-num' + (major ? " major" : "") +
      '" data-id="' + c.id + '" aria-label="' + c.name + '" title="' + c.name + '">' +
      '<span class="hn' + (c.court ? " word" : "") + '">' + c.numeral + "</span>" +
      (major ? '<span class="hl">' + c.name + "</span>" : "") +
      handDot(c) + "</button>";
  }).join("");

  var st = handStats();
  $("handProgress").textContent = st.seen
    ? "Vistas " + st.seen + "/" + CARDS.length + " · Dominadas " + st.mastered +
      " · Aprendiendo " + st.learning + " · Para repasar " + st.review
    : "Aún no has marcado ninguna carta.";
  $("handLegend").hidden = !st.seen;
  var rev = $("handReview");
  rev.textContent = st.pending ? "Repasar pendientes (" + st.pending + ")" : "Repasar pendientes";
  rev.disabled = !st.pending;
}

function handSelect(id, review) {
  if (!BY_ID[id]) return;
  hand.id = id;
  hand.stage = 0;
  hand.rated = false;
  hand.rate = null;
  hand.review = !!review;
  hand.orient = "up";
  handRenderQuiz();
}

function handRenderQuiz() {
  var c = BY_ID[hand.id], box = $("handQuiz");
  if (!c || !box) return;
  $("handPick").hidden = true;
  box.hidden = false;

  var ncls = c.court ? " small" : (c.numeral.length >= 4 ? " mid" : "");
  var h = '<div class="hand-top">' +
    '<div class="card hand"><div>' +
      '<img class="cardimg" src="img/' + c.id + '.jpg" alt="' + c.name +
      '" onerror="this.classList.add(\'hide\')">' +
      '<span class="num' + ncls + '">' + c.numeral + "</span>" +
      '<span class="cname">' + c.name + "</span>" +
    "</div></div>" +
    '<div class="hand-meta">' +
      '<p class="hand-name">' + c.name + "</p>" +
      '<p class="hand-num-label">' +
        (c.arc === "mayor" ? "Arcano Mayor · " + c.numeral : SUITS[c.suit].name + " · " + c.numeral) +
      "</p>" +
      '<button class="hand-change" id="handChange" type="button">Cambiar carta</button>' +
    "</div></div>";

  if (hand.stage === 0) {
    h += '<p class="hand-prompt">' +
      (hand.review ? "Repaso: busca esta carta en tu baraja." : "¿Qué te dice esta carta?") +
      "</p>" +
      '<p class="hand-note">Piénsalo. Si te atascas, pide una pista.</p>' +
      '<div class="hand-actions"><button id="handHint" class="alt" type="button">Pista</button>' +
      '<button id="handReveal" type="button">Ver significado</button></div>';
  } else {
    h += '<div class="hand-answer">' +
      "<h3>Composición</h3><p>" + handComp(c) + "</p>" +
      '<h3>Palabras clave</h3><div class="hand-kw">' +
        c.kw.map(function (k) { return "<span>" + k + "</span>"; }).join("") +
      "</div>";
    if (hand.stage >= 2) {
      h += "<h3>Significado</h3><p>" + c.mean + "</p>" +
        '<p class="read"><b>Cómo se lee:</b> ' + c.read + "</p>";

      var deep = typeof DEEP !== "undefined" ? DEEP[c.id] : null;
      if (deep) {
        var isRev = hand.orient === "rev";
        h += '<div class="hand-deep">' +
          '<div class="hand-deep-head">' +
            "<h3>Lectura extendida</h3>" +
            '<div class="hand-orient" role="group" aria-label="Orientación de la carta">' +
              '<button type="button" data-orient="up" class="' + (isRev ? "" : "on") +
                '" aria-pressed="' + (!isRev) + '">Derecho</button>' +
              '<button type="button" data-orient="rev" class="' + (isRev ? "on" : "") +
                '" aria-pressed="' + isRev + '">Invertido</button>' +
            "</div>" +
          "</div>" +
          '<p class="hand-deep-text">' + deep[isRev ? "rev" : "up"] + "</p>" +
          "<h3>Contextos</h3>" +
          '<div class="hand-contexts">' +
            "<div><h4>Amor</h4><p>" + deep.love + "</p></div>" +
            "<div><h4>Amistad</h4><p>" + deep.friends + "</p></div>" +
            "<div><h4>Trabajo</h4><p>" + deep.work + "</p></div>" +
          "</div>" +
        "</div>";
      }
    }
    h += "</div>";

    if (hand.stage === 1) {
      h += '<div class="hand-actions"><button id="handReveal" type="button">Ver significado</button></div>';
    } else if (!hand.rated) {
      h += '<p class="hand-rate-label">¿La sabías?</p>' +
        '<div class="hand-rate">' +
        '<button class="good" type="button" data-rate="good">La sabía</button>' +
        '<button class="mid" type="button" data-rate="mid">A medias</button>' +
        '<button class="bad" type="button" data-rate="bad">No la sabía</button>' +
        "</div>";
    } else {
      var msg = hand.rate === "good"
        ? "Guardada en dominadas."
        : hand.rate === "mid"
          ? "Guardada en aprendiendo."
          : "Guardada en para repasar.";
      h += '<p class="hand-done">' + msg + "</p>" +
        '<button id="handNext" type="button">Otra carta</button>';
    }
  }

  box.innerHTML = h;
}

function handRate(level) {
  if (!hand.id || hand.rated) return;
  var c = BY_ID[hand.id];
  var st = hand.cards[c.id] || { box: 0, seen: 0, last: 0 };
  st.seen = (st.seen || 0) + 1;
  st.last = Date.now();
  if (level === "good") st.box = HAND_MASTER;
  else if (level === "mid") st.box = 1;
  else st.box = 0;
  hand.cards[c.id] = st;
  handSave();
  hand.rated = true;
  hand.rate = level;
  hand.stage = 2;
  handRenderQuiz();
}

function handNext() {
  hand.id = null;
  hand.stage = 0;
  hand.rated = false;
  hand.rate = null;
  hand.review = false;
  hand.orient = "up";
  $("handQuiz").hidden = true;
  $("handPick").hidden = false;
  handPicker();
}

function handReviewPick() {
  var ids = Object.keys(hand.cards).filter(function (id) {
    var st = hand.cards[id];
    return st && st.seen && st.box < HAND_MASTER;
  });
  if (!ids.length) return;
  handSelect(ids[Math.floor(Math.random() * ids.length)], true);
}

function handRender() {
  if (hand.id) {
    handRenderQuiz();
  } else {
    $("handPick").hidden = false;
    $("handQuiz").hidden = true;
    handPicker();
  }
}

var activeTab = "daily";
function showTab(name) {
  activeTab = name === "hand" ? "hand" : "daily";
  var daily = activeTab === "daily";
  $("daily").hidden = !daily;
  $("hand").hidden = daily;
  $("tabDaily").classList.toggle("on", daily);
  $("tabHand").classList.toggle("on", !daily);
  $("tabDaily").setAttribute("aria-selected", daily ? "true" : "false");
  $("tabHand").setAttribute("aria-selected", !daily ? "true" : "false");
  if (!daily) handRender();
}

function tabKey(e) {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  e.preventDefault();
  showTab(activeTab === "daily" ? "hand" : "daily");
  $(activeTab === "daily" ? "tabDaily" : "tabHand").focus();
}

$("tabDaily").onclick = function () { showTab("daily"); };
$("tabHand").onclick = function () { showTab("hand"); };
$("tabDaily").addEventListener("keydown", tabKey);
$("tabHand").addEventListener("keydown", tabKey);

$("handSuits").onclick = function (e) {
  var b = e.target.closest("button[data-suit]");
  if (!b) return;
  hand.suit = b.getAttribute("data-suit");
  handPicker();
};

$("handGrid").onclick = function (e) {
  var b = e.target.closest("button[data-id]");
  if (!b) return;
  handSelect(b.getAttribute("data-id"), false);
};

$("handReview").onclick = handReviewPick;

$("handQuiz").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  if (b.id === "handHint") { hand.stage = 1; handRenderQuiz(); }
  else if (b.id === "handReveal") { hand.stage = 2; handRenderQuiz(); }
  else if (b.id === "handNext" || b.id === "handChange") handNext();
  else if (b.hasAttribute("data-orient")) {
    hand.orient = b.getAttribute("data-orient") === "rev" ? "rev" : "up";
    handRenderQuiz();
  }
  else if (b.hasAttribute("data-rate")) handRate(b.getAttribute("data-rate"));
});

handLoad();

ld();
target = dailyTarget();
if (S.today && S.today.day === DAY && Array.isArray(S.today.g)) {
  guesses = S.today.g.filter(function (id) { return BY_ID[id]; });
}
render();
