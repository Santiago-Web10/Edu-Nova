"use strict";

/* ==========================================================
   01. CONFIGURACIÓN Y CATÁLOGOS
   Grados, temas, juegos, ayudas e ilustraciones de la plataforma.
   ========================================================== */

const $ = (id) => document.getElementById(id),
  KEY = "edu-nova-v12";

const W = [
  {
    id: "op",
    name: "Operaciones",
    icon: "🚀",
    title: "Enciende la nave",
    desc: "Reúne energía, resuelve operaciones y prepara el despegue.",
    badge: "Piloto de los números",
  },
  {
    id: "fr",
    name: "Fracciones",
    icon: "🍕",
    title: "La cocina de las porciones",
    desc: "Reparte, compara y descubre el mundo de las fracciones.",
    badge: "Chef de las fracciones",
  },
  {
    id: "ge",
    name: "Geometría",
    icon: "🌿",
    title: "Construye tu jardín",
    desc: "Explora las medidas y las figuras para construir tu jardín.",
    badge: "Constructor de figuras",
  },
];

W.push(
  {
    id: "de",
    name: "Decimales",
    icon: "🔢",
    title: "El laboratorio decimal",
    desc: "Descubre las partes de los números y aprende a calcular con decimales.",
    badge: "Explorador decimal",
  },
  {
    id: "me",
    name: "Medidas",
    icon: "📏",
    title: "La estación de las medidas",
    desc: "Convierte longitudes, pesos, capacidades y tiempo.",
    badge: "Maestro de las medidas",
  },
  {
    id: "pr",
    name: "Problemas",
    icon: "🧩",
    title: "Detectives matemáticos",
    desc: "Usa las matemáticas para resolver situaciones de la vida cotidiana.",
    badge: "Detective de soluciones",
  },
);

const validIds = W.flatMap((w) => [4, 5, 6].map((g) => g + "-" + w.id));

const fmt = (n) => String(Math.round(n * 100) / 100).replace(".", ",");

const GAME_TYPES = [
  {
    id: "memory",
    title: "Parejas numéricas",
    icon: "🃏",
    desc: "Busca operaciones y resultados. Las parejas cambian en cada partida.",
    color: "purple",
  },
  {
    id: "fraction",
    title: "Constructor de fracciones",
    icon: "🍰",
    desc: "Colorea cinco fracciones diferentes y descubre sus partes iguales.",
    color: "peach",
  },
  {
    id: "shop",
    title: "La tienda de Nova",
    icon: "🛍️",
    desc: "Compra el importe exacto con productos y precios nuevos.",
    color: "green",
  },
  {
    id: "detective",
    title: "Detectives matemáticos",
    icon: "🔎",
    desc: "Resuelve cinco preguntas de operaciones, figuras, decimales y otros temas.",
    color: "blue",
  },
  {
    id: "patterns",
    title: "Completa el patrón",
    icon: "🪐",
    desc: "Descubre la regla y el número que sigue en cinco secuencias.",
    color: "lemon",
  },
  {
    id: "order",
    title: "Ordena las estrellas",
    icon: "🌟",
    desc: "Coloca números, decimales o fracciones en el orden indicado.",
    color: "mint",
  },
];
const gameIds = GAME_TYPES.flatMap((g) => [4, 5, 6].map((n) => n + "-" + g.id));

const NOVA_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="813 122 265 283" role="img" aria-label="Nova, tu compañero de matemáticas" data-nova="true"><use href="#nova-art-image"/></svg>';

const PRACTICE_TIPS = {
  op: "Repasa las operaciones y las tablas con grupos de objetos.",
  fr: "Practica cómo contar, comparar y repartir partes iguales.",
  ge: "Revisa los lados de las figuras y la diferencia entre perímetro y área.",
  de: "Observa las posiciones decimales y alinea las comas al calcular.",
  me: "Recuerda la equivalencia entre unidades antes de convertir.",
  pr: "Identifica los datos, elige la operación y comprueba tu respuesta.",
};

const NOVA_TOUR = [
  "1. Inicio: aquí te doy la bienvenida y te sugiero un próximo paso. Puedes entrar en Temas, Juegos o Mi progreso.",
  "2. Temas: elige 4.º, 5.º o 6.º y uno de los seis temas. Lee el ejemplo, responde y usa pistas si lo necesitas.",
  "3. Juegos: elige entre seis juegos con preguntas y retos diferentes en cada partida. Usa las pistas de Nova; juega sin reloj ni vidas.",
  "4. Mi progreso: descubre tus avances y recomendaciones de práctica. Cada tarjeta explica por qué te sugiero ese tema.",
  "5. Mis logros: celebra tus insignias y estrellas. Mi botón «¿Te ayudo?» está disponible en todas las secciones.",
];

const CURRICULUM = {
  4: {
    title: "Construimos las bases",
    intro:
      "Empezamos con operaciones, aprendemos a representar partes y usamos las matemáticas en situaciones cotidianas.",
    topics: [
      [
        "Las cuatro operaciones",
        "Sumar, restar, multiplicar y repartir con números naturales.",
        "Representa grupos y resuelve una operación cada vez.",
      ],
      [
        "Fracciones básicas",
        "Identificar partes iguales, comparar y sumar fracciones sencillas.",
        "Cuenta el total de partes y después las que tomas.",
      ],
      [
        "Figuras y perímetros",
        "Reconocer figuras y medir el borde de cuadrados y rectángulos.",
        "Cuenta los lados y súmalos para hallar el perímetro.",
      ],
      [
        "Décimas y comparación",
        "Leer números con una décima y compararlos o calcular con ellos.",
        "Mira las unidades y luego la cifra de las décimas.",
      ],
      [
        "Medidas cotidianas",
        "Relacionar metros, centímetros, kilos, litros y tiempo.",
        "Escribe la equivalencia antes de convertir.",
      ],
      [
        "Problemas de mi entorno",
        "Elegir operaciones para compras, repartos y situaciones de la vida diaria.",
        "Separa los datos y resuelve un paso cada vez.",
      ],
    ],
  },
  5: {
    title: "Conectamos lo que sabemos",
    intro:
      "Usamos las bases para resolver paréntesis, fracciones equivalentes, áreas, centésimas y problemas de varios pasos.",
    topics: [
      [
        "Operaciones y paréntesis",
        "Calcular con números naturales y respetar el orden de las operaciones.",
        "Resuelve primero los paréntesis, después multiplicaciones y divisiones.",
      ],
      [
        "Fracciones equivalentes",
        "Reconocer equivalencias, operar y calcular partes de una cantidad.",
        "Multiplica o divide arriba y abajo por el mismo número.",
      ],
      [
        "Áreas y ángulos",
        "Distinguir área y perímetro y reconocer el ángulo recto.",
        "El área mide la superficie; el perímetro mide el borde.",
      ],
      [
        "Centésimas y redondeo",
        "Operar con dos cifras decimales y aproximar a décimas.",
        "Alinea las comas y mira la cifra siguiente al redondear.",
      ],
      [
        "Conversión de unidades",
        "Convertir medidas con decimales de longitud, peso, capacidad y tiempo.",
        "Identifica si necesitas multiplicar o dividir.",
      ],
      [
        "Problemas de varios pasos",
        "Organizar los datos y combinar operaciones para encontrar una solución.",
        "Anota qué necesitas calcular primero y qué viene después.",
      ],
    ],
  },
  6: {
    title: "Resolvemos nuevos retos",
    intro:
      "Avanzamos a potencias, porcentajes, volúmenes, milésimas, superficies y problemas de proporcionalidad.",
    topics: [
      [
        "Potencias y orden de cálculo",
        "Interpretar potencias y resolver expresiones con varias operaciones.",
        "Una potencia repite una multiplicación, no una suma.",
      ],
      [
        "Fracciones y porcentajes",
        "Usar denominadores comunes, simplificar y calcular porcentajes.",
        "Busca partes del mismo tamaño y recuerda que un porcentaje es sobre 100.",
      ],
      [
        "Áreas y volúmenes",
        "Calcular superficies y descubrir el espacio que ocupa un cubo.",
        "Para un cubo, multiplica lado por lado por lado.",
      ],
      [
        "Milésimas y cálculo decimal",
        "Redondear, multiplicar, dividir y conectar decimales con fracciones.",
        "Cuenta las posiciones decimales y comprueba el tamaño del resultado.",
      ],
      [
        "Superficies y conversiones",
        "Convertir medidas y relacionar metros cuadrados con centímetros cuadrados.",
        "1 m² equivale a 100 × 100 cm², es decir, 10 000 cm².",
      ],
      [
        "Proporciones y descuentos",
        "Resolver recetas, precios, escalas y descuentos mediante relaciones entre cantidades.",
        "Encuentra cuánto corresponde a una unidad o calcula el porcentaje primero.",
      ],
    ],
  },
};

const NAV_ICONS = {
  navHome: '<path d="M3 11 12 3l9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/>',
  navTopics: '<path d="M12 5v16M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2z"/>',
  navGames:
    '<rect x="3" y="6" width="18" height="14" rx="5"/><path d="M7 13h5M9.5 10.5v5M16 11h.1M18 14h.1"/>',
  navProgress: '<path d="M4 21V12h4v9M10 21V7h4v14M16 21V3h4v18"/>',
  navAchievements:
    '<path d="M7 3h10v8a5 5 0 0 1-10 0zM7 6H3v4c0 3 2 4 5 4M17 6h4v4c0 3-2 4-5 4M12 16v5M8 21h8"/>',
};

const COURSE_ART = { 4: "298 572 88 90", 5: "594 572 85 88", 6: "860 572 82 88" };

NOVA_TOUR[1] =
  "2. Temas: elige tu grado y recorre seis temas pensados para ese nivel. En cada ejercicio puedo explicarte el tema, mostrarte pasos y darte práctica más sencilla.";

NOVA_TOUR[0] =
  "1. Inicio: selecciona tu grado en las tarjetas. El círculo muestra tu progreso real y yo te propongo una actividad. Usa el menú para moverte entre las áreas.";

/* ==========================================================
   02. ESTADO Y GUARDADO LOCAL
   Valida el progreso y lo guarda en este navegador; recupera versiones anteriores.
   ========================================================== */

function clean(raw) {
  if (raw && raw.version && raw.version < 6) {
    raw = { ...raw, awarded: [...(raw.awarded || [])], topicStats: { ...(raw.topicStats || {}) } };
    const changed = ["5-op", "6-op", "6-pr"];
    raw.awarded = raw.awarded.filter((k) => !changed.some((id) => k.startsWith(id + "-")));
    for (const id of changed) delete raw.topicStats[id];
  }

  if (!raw || typeof raw !== "object") throw Error("Formato no válido");
  const unique = (a, allowed) =>
    Array.isArray(a) ? [...new Set(a.filter((x) => allowed.includes(x)))] : [];
  const awarded = unique(
    raw.awarded,
    validIds.flatMap((id) => [0, 1, 2, 3, 4].map((i) => id + "-" + i)),
  );
  const progress = {};
  for (const id of validIds) {
    const n = raw.progress && raw.progress[id];
    progress[id] = Number.isInteger(n) && n >= 0 && n <= 5 ? n : 0;
  }
  // El avance se reconstruye con ejercicios realmente completados.
  for (const id of validIds) {
    let n = 0;
    while (n < 5 && awarded.includes(id + "-" + n)) n++;
    progress[id] = n;
  }
  const done = validIds.filter((id) => progress[id] === 5);
  const result = {
    version: 12,
    grade: [4, 5, 6].includes(raw.grade) ? raw.grade : 4,
    awarded,
    progress,
    done,
  };

  const s = result;
  const integer = (x) => (Number.isInteger(x) && x >= 0 && x < 100000 ? x : 0);
  s.topicStats = {};
  for (const id of validIds) {
    const x = (raw.topicStats && raw.topicStats[id]) || {};
    s.topicStats[id] = {
      attempts: integer(x.attempts),
      correct: integer(x.correct),
      hints: integer(x.hints),
    };
  }
  s.gameAwards = Array.isArray(raw.gameAwards)
    ? [...new Set(raw.gameAwards.filter((k) => gameIds.includes(k)))]
    : [];
  s.gameRecords = {};
  for (const id of gameIds) {
    const x = (raw.gameRecords && raw.gameRecords[id]) || {};
    s.gameRecords[id] = {
      plays: integer(x.plays),
      completed: integer(x.completed),
      bestTries: integer(x.bestTries),
      lastDate:
        typeof x.lastDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(x.lastDate) ? x.lastDate : "",
    };
  }
  s.activity = Array.isArray(raw.activity)
    ? raw.activity
        .filter(
          (x) =>
            x &&
            typeof x.day === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(x.day) &&
            ["lesson", "game"].includes(x.kind),
        )
        .slice(-2000)
    : [];
  return result;
}

let state = clean({}),
  active,
  index = 0,
  solved = false,
  hints = 0,
  errors = 0,
  replay = false,
  sessionStars = 0;

function loadProgress() {
  try {
    const keys = [
      KEY,
      "edu-nova-v11",
      "edu-nova-v10",
      "edu-nova-v9",
      "edu-nova-v8",
      "edu-nova-v7",
      "edu-nova-v6",
      "edu-nova-v5",
      "edu-nova-v4",
      "edu-nova-v3",
      "edu-nova-v2",
    ];
    const stored = keys.map((key) => localStorage.getItem(key)).find(Boolean);
    if (stored) state = clean(JSON.parse(stored));
  } catch (error) {
    state = clean({});
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    $("notice").classList.remove("hidden");
  }
}

function id() {
  return state.grade + "-" + active.id;
}

function today(date = new Date()) {
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}

function totalStars() {
  return state.awarded.length * 10 + state.gameAwards.length * 25;
}

function recordActivity(kind) {
  state.activity.push({ day: today(), kind });
  state.activity = state.activity.slice(-2000);
}

let novaView = "home",
  novaTour = -1,
  lastNovaMessage = "";

let currentGame = null,
  gameEpoch = 0;

/* ==========================================================
   03. NAVEGACIÓN Y PÁGINA DE INICIO
   Cambia de sección, actualiza el grado y muestra avances e insignias reales.
   ========================================================== */

function view(name) {
  syncGradeCatalog();
  novaView = name;
  [
    "home",
    "mission",
    "result",
    "achievements",
    "games",
    "gamePlay",
    "progressView",
    "topics",
  ].forEach((v) => $(v).classList.toggle("hidden", v !== name));
  const routes = {
    navHome: ["home"],
    navTopics: ["topics", "mission", "result"],
    navGames: ["games", "gamePlay"],
    navProgress: ["progressView"],
    navAchievements: ["achievements"],
  };
  for (const [nav, pages] of Object.entries(routes))
    $(nav).classList.toggle("active", pages.includes(name));
  $("profileGrade").value = state.grade;
  if (name !== "mission") lastNovaMessage = "";
  if (!$("novaPanel").classList.contains("hidden")) {
    novaTour = -1;
    paintNovaGuide();
  }
  window.scrollTo(0, 0);
}

function home() {
  syncGradeCatalog();
  view("home");
  $("grade").value = state.grade;
  $("stars").textContent = totalStars();
  $("worldCount").textContent =
    W.filter((w) => state.done.includes(state.grade + "-" + w.id)).length + " / 6";
  $("level").textContent =
    state.done.length >= 6 ? "Estrella" : state.done.length >= 3 ? "Aventurero" : "Explorador";
  $("worlds").replaceChildren();
  W.forEach((w) => {
    const k = state.grade + "-" + w.id,
      n = state.progress[k] || 0;
    const c = document.createElement("article");
    c.className = "card world";
    c.innerHTML =
      '<div class="art" aria-hidden="true">' +
      worldArt(w.id) +
      '</div><div class="inside"><h3>' +
      w.name +
      "</h3><p>" +
      w.desc +
      '</p><progress max="5" value="' +
      n +
      '" aria-label="Progreso de ' +
      w.name +
      '"></progress><span class="small">' +
      n +
      "/5 pasos completados</span></div>";
    const b = document.createElement("button");
    b.textContent = n === 5 ? "Practicar de nuevo" : n ? "Continuar misión →" : "Explorar mundo →";
    b.onclick = () => start(w);
    c.lastChild.append(b);
    $("worlds").append(c);
  });
  const rec = recommendationsFor()[0];
  $("homeSuggestion").textContent = "Para " + state.grade + ".º: " + rec.w.name + ". " + rec.reason;
  decorateGradeTopics();
  updateDashboard();
}

function topicsPage() {
  home();
  view("topics");
  $("grade").value = state.grade;
}

function updateDashboard() {
  const prefix = state.grade + "-",
    count = state.awarded.filter((k) => k.startsWith(prefix)).length,
    percent = Math.round((count / 30) * 100);
  $("homePercent").textContent = percent + "%";
  $("progressDonut").style.setProperty("--progress-angle", percent * 3.6 + "deg");
  $("progressDonut").setAttribute(
    "aria-label",
    "Progreso de " + state.grade + ".º: " + count + " de 30 ejercicios, " + percent + " por ciento",
  );
  $("homeSolved").textContent = count + " / 30";
  $("profileGrade").value = state.grade;
  const r = recommendationsFor()[0];
  $("activityTitle").textContent = r.w.name;
  $("activityGrade").textContent =
    state.grade + ".º grado · " + (r.n ? r.n + " de 5 pasos" : "Actividad sugerida");
  $("activityIcon").textContent = r.w.icon;
  $("badgePreview").replaceChildren();
  const earned = state.done.filter((id) => id.startsWith(prefix));
  for (let i = 0; i < 3; i++) {
    const id = earned[i],
      w = id ? W.find((w) => id.endsWith("-" + w.id)) : null,
      item = document.createElement("div");
    item.className = "badge-item" + (w ? " earned" : " pending");
    const icon = document.createElement("span");
    icon.textContent = w ? w.icon : ["⭐", "🏅", "🌟"][i];
    const text = document.createElement("small");
    text.textContent = w ? w.badge : ["Primer logro", "Sigue avanzando", "Nuevo reto"][i];
    item.append(icon, text);
    $("badgePreview").append(item);
  }
}

function selectCourse(grade) {
  state.grade = grade;
  save();
  topicsPage();
  $("grade").focus();
}

function syncGradeCatalog(grade = state.grade) {
  const catalog = CURRICULUM[grade];
  W.forEach((w, i) => {
    const row = catalog.topics[i];
    w.name = row[0];
    w.title = row[0];
    w.desc = row[1];
    PRACTICE_TIPS[w.id] = row[2];
  });
  $("curriculumTitle").textContent = grade + ".º · " + catalog.title;
  $("curriculumDescription").textContent = catalog.intro;
}

function decorateGradeTopics() {
  [...$("worlds").children].forEach((card, i) => {
    if (card.querySelector(".topic-step")) return;
    const label = document.createElement("span");
    label.className = "topic-step";
    label.textContent = "PASO " + (i + 1) + " DE 6 · " + state.grade + ".º";
    card.querySelector(".inside").prepend(label);
  });
}

function achievements() {
  view("achievements");
  $("badgeList").replaceChildren();
  for (const g of [4, 5, 6]) {
    const c = document.createElement("article");
    c.className = "card";
    const h = document.createElement("h2");
    h.textContent = g + ".º de primaria";
    c.append(h);
    for (const w of W) {
      const p = document.createElement("p");
      p.className = state.done.includes(g + "-" + w.id) ? "badge" : "small";
      p.textContent = (state.done.includes(g + "-" + w.id) ? w.icon : "🔒") + " " + w.badge;
      c.append(p);
    }
    $("badgeList").append(c);
  }
  $("overall").textContent =
    state.done.length + " de 18 insignias · " + totalStars() + " estrellas";
}

/* ==========================================================
   04. BANCO DE EJERCICIOS
   18 temas y 90 preguntas: cinco ejercicios de cada tema para cada grado.
   ========================================================== */

function q(text, answer, choices, lesson, example, explain, hint, visual) {
  return {
    text,
    answer: String(answer),
    choices: choices.map(String),
    lesson,
    example,
    explain,
    hint,
    visual,
  };
}

function operations(g) {
  const sets = {
    4: [
      [3, 4, "×"],
      [24, 6, "÷"],
      [125, 34, "+"],
      [80, 27, "−"],
      [6, 7, "×"],
    ],
    5: [
      [12, 8, "×"],
      [144, 12, "÷"],
      [2.5, 1.25, "+"],
      [7.8, 2.3, "−"],
      [25, 4, "×"],
    ],
    6: [
      [125, 8, "×"],
      [450, 15, "÷"],
      [3.75, 2.5, "+"],
      [12.6, 4.85, "−"],
      [2.5, 4, "×"],
    ],
  };
  return sets[g].map(([a, b, o]) => {
    const n = Number(
      (o === "×" ? a * b : o === "÷" ? a / b : o === "+" ? a + b : a - b).toFixed(2),
    );
    const lesson = {
      "×": "Multiplicar es sumar grupos iguales.",
      "÷": "Dividir es repartir en grupos iguales.",
      "+": "Para sumar, alinea unidades, decenas y comas decimales.",
      "−": "Para restar, alinea unidades, decenas y comas decimales.",
    }[o];
    const example = {
      "×": "Ejemplo: 2 × 3 = 3 + 3 = 6.",
      "÷": "Ejemplo: 12 ÷ 3 = 4 porque 3 × 4 = 12.",
      "+": "Ejemplo: 1,5 + 2,3 = 3,8.",
      "−": "Ejemplo: 5,5 − 2,2 = 3,3.",
    }[o];
    let explain, hint;
    if (o === "×" && Number.isInteger(a) && a <= 6) {
      explain =
        "Suma " + a + " grupos de " + b + ": " + Array(a).fill(b).join(" + ") + " = " + n + ".";
      hint = "Cuenta los " + a + " grupos de " + b + " elementos.";
    } else if (o === "×") {
      const p = Number.isInteger(a) ? Math.floor(a / 10) * 10 : Math.floor(a),
        r = Number((a - p).toFixed(2));
      explain =
        fmt(a) +
        " × " +
        b +
        " = (" +
        fmt(p) +
        " × " +
        b +
        ") + (" +
        fmt(r) +
        " × " +
        b +
        ") = " +
        fmt(p * b) +
        " + " +
        fmt(r * b) +
        " = " +
        fmt(n) +
        ".";
      hint =
        "Separa " +
        fmt(a) +
        " en " +
        fmt(p) +
        " y " +
        fmt(r) +
        ". Multiplica cada parte por " +
        b +
        ".";
    } else if (o === "÷") {
      explain = b + " × " + n + " = " + a + ". Por eso " + a + " ÷ " + b + " = " + n + ".";
      hint = "Busca qué número multiplicado por " + b + " da " + a + ".";
    } else {
      const base = Number.isInteger(a) && Number.isInteger(b) ? 10 : 1,
        p = Math.floor(b / base) * base,
        r = Number((b - p).toFixed(2)),
        m = o === "+" ? a + p : a - p;
      explain =
        "Primero " +
        fmt(a) +
        " " +
        o +
        " " +
        fmt(p) +
        " = " +
        fmt(m) +
        ". Luego " +
        fmt(m) +
        " " +
        o +
        " " +
        fmt(r) +
        " = " +
        fmt(n) +
        ".";
      hint = "Separa " + fmt(b) + " en " + fmt(p) + " y " + fmt(r) + ".";
    }
    return q(
      "¿Cuánto es " + fmt(a) + " " + o + " " + fmt(b) + "?",
      fmt(n),
      [fmt(n), fmt(n + 1), fmt(n + 2), fmt(n - 1)],
      lesson,
      example,
      explain,
      hint,
      o === "×" && a <= 6 && Number.isInteger(a)
        ? { type: "groups", a, b }
        : { type: "math", text: fmt(a) + " " + o + " " + fmt(b) + " = ?" },
    );
  });
}

function fractions(g) {
  const l =
      "El denominador indica el total de partes iguales. El numerador indica cuántas tomamos.",
    ex = "Ejemplo: 2/6 significa tomar dos de seis partes iguales.";
  const data = {
    4: [
      [
        "Hay 8 porciones y quedan 5. ¿Qué fracción queda?",
        "5/8",
        ["3/8", "5/8", "8/5", "5/3"],
        "Quedan 5 de las 8 partes: 5/8.",
        "Cuenta las partes coloreadas.",
        5,
        8,
      ],
      [
        "¿Qué fracción representan las partes coloreadas?",
        "3/6",
        ["6/3", "2/6", "3/6", "3/3"],
        "Hay 3 coloreadas de 6 partes: 3/6.",
        "Cuenta primero el total y luego las partes coloreadas.",
        3,
        6,
      ],
      [
        "¿Cuál es mayor: 1/4 o 3/4?",
        "3/4",
        ["1/4", "3/4", "Son iguales", "Ninguna"],
        "Con el mismo denominador, comparamos 1 y 3. Tres porciones son más que una.",
        "Compara los numeradores.",
        3,
        4,
      ],
      [
        "¿Cuánto es 1/5 + 2/5?",
        "3/5",
        ["3/10", "1/5", "3/5", "2/5"],
        "Suma arriba y conserva abajo: (1 + 2)/5 = 3/5.",
        "Las porciones tienen el mismo tamaño. El denominador no cambia.",
        3,
        5,
      ],
      [
        "¿Qué fracción representa un entero completo?",
        "4/4",
        ["1/4", "3/4", "4/4", "2/4"],
        "Todas las partes: 4 de 4. Por eso 4/4 = 1.",
        "Busca la opción que toma todas las partes.",
        4,
        4,
      ],
    ],
    5: [
      [
        "¿Qué fracción equivale a 1/2?",
        "2/4",
        ["1/4", "2/4", "3/4", "2/3"],
        "Multiplica ambos números por 2: 1/2 = 2/4.",
        "Multiplica numerador y denominador por el mismo número.",
        2,
        4,
      ],
      [
        "¿Cuánto es 2/7 + 3/7?",
        "5/7",
        ["5/14", "1/7", "5/7", "6/7"],
        "(2 + 3)/7 = 5/7.",
        "Suma los numeradores. Conserva el 7.",
        5,
        7,
      ],
      [
        "¿Cuánto es 5/6 − 2/6?",
        "3/6",
        ["3/0", "7/6", "2/6", "3/6"],
        "(5 − 2)/6 = 3/6.",
        "Resta los numeradores y conserva el 6.",
        5,
        6,
      ],
      [
        "¿Cuál es la mitad de 12?",
        "6",
        ["3", "4", "6", "8"],
        "La mitad es dividir entre 2: 12 ÷ 2 = 6.",
        "Reparte 12 en dos grupos iguales.",
        1,
        2,
      ],
      [
        "¿Cuál es mayor: 2/3 o 1/3?",
        "2/3",
        ["1/3", "2/3", "Son iguales", "Ninguna"],
        "Con el mismo denominador, 2 porciones son más que 1.",
        "Compara 2 con 1.",
        2,
        3,
      ],
    ],
    6: [
      [
        "¿Qué porcentaje equivale a 1/2?",
        "50 %",
        ["25 %", "50 %", "75 %", "10 %"],
        "1/2 = 50/100 = 50 %.",
        "Calcula la mitad de 100.",
        1,
        2,
      ],
      [
        "¿Cuánto es 1/2 + 1/4?",
        "3/4",
        ["2/6", "2/4", "3/4", "1/4"],
        "1/2 = 2/4. Luego 2/4 + 1/4 = 3/4.",
        "Expresa la mitad en cuartos.",
        3,
        4,
      ],
      [
        "¿Cuánto es el 25 % de 20?",
        "5",
        ["4", "5", "10", "15"],
        "25 % = 1/4. Entonces 20 ÷ 4 = 5.",
        "El 25 % es una cuarta parte.",
        1,
        4,
      ],
      [
        "¿Cuál es la forma simplificada de 6/8?",
        "3/4",
        ["2/4", "3/4", "3/8", "6/4"],
        "Divide ambos números por 2: 6/8 = 3/4.",
        "Divide arriba y abajo por el mismo divisor.",
        6,
        8,
      ],
      [
        "¿Cuánto es 3/4 − 1/2?",
        "1/4",
        ["2/2", "1/4", "2/4", "1/2"],
        "1/2 = 2/4. Entonces 3/4 − 2/4 = 1/4.",
        "Convierte la mitad en cuartos antes de restar.",
        3,
        4,
      ],
    ],
  };
  return data[g].map((d, i) =>
    q(
      d[0],
      d[1],
      d[2],
      g === 6
        ? "Usa fracciones equivalentes para comparar partes del mismo tamaño. Un porcentaje expresa partes de cada 100."
        : l,
      g === 6 ? "Ejemplo: 1/4 = 25/100 = 25 %." : ex,
      d[3],
      d[4],
      { type: "fraction", n: d[5], d: d[6] },
    ),
  );
}

function geometry(g) {
  if (g === 4)
    return [
      q(
        "¿Cuántos lados tiene un triángulo?",
        3,
        [3, 4, 5, 6],
        "Reconocemos las figuras por sus lados.",
        "Ejemplo: un cuadrado tiene cuatro lados.",
        "Un triángulo tiene tres lados.",
        "Su nombre empieza por «tri».",
        { type: "math", text: "△" },
      ),
      q(
        "¿Cuántos lados tiene un cuadrado?",
        4,
        [3, 4, 5, 6],
        "Un cuadrado tiene cuatro lados iguales.",
        "Ejemplo: una ventana cuadrada tiene cuatro bordes.",
        "Arriba, abajo, izquierda y derecha: cuatro lados.",
        "Cuenta los cuatro bordes.",
        { type: "shape", text: "Cuadrado" },
      ),
      ...[
        [3, 3],
        [5, 2],
      ].map(([a, b]) =>
        q(
          "Lados de " + a + " cm y " + b + " cm. ¿Cuál es el perímetro?",
          2 * (a + b) + " cm",
          [2 * (a + b) + " cm", a + b + " cm", a * b + " cm", 2 * (a + b) + 2 + " cm"],
          "El perímetro es la longitud del borde.",
          "Ejemplo: lados 2 y 1: 2 + 1 + 2 + 1 = 6 cm.",
          a + " + " + b + " + " + a + " + " + b + " = " + 2 * (a + b) + " cm.",
          "Cada longitud aparece dos veces.",
          { type: "shape", text: a + " cm × " + b + " cm" },
        ),
      ),
      q(
        "¿Cuántos centímetros tiene un metro?",
        "100 cm",
        ["10 cm", "100 cm", "1000 cm", "50 cm"],
        "Usamos unidades para medir longitudes.",
        "Ejemplo: medio metro equivale a 50 cm.",
        "Un metro tiene 100 centímetros.",
        "Dos mitades de 50 cm forman un metro.",
        { type: "math", text: "1 m = ? cm" },
      ),
    ];
  const sizes =
    g === 5
      ? [
          [4, 3],
          [5, 5],
          [6, 2],
          [8, 3],
        ]
      : [
          [7, 4],
          [6, 6],
          [9, 3],
          [10, 4],
        ];
  const out = sizes.map(([a, b], i) => {
    const area = i % 2 === 0,
      n = area ? a * b : 2 * (a + b),
      u = area ? "cm²" : "cm";
    return q(
      "Lados de " + a + " cm y " + b + " cm. ¿Cuál es " + (area ? "el área" : "el perímetro") + "?",
      n + " " + u,
      [n + " " + u, n + 2 + " " + u, n + 4 + " " + u, n - 2 + " " + u],
      area
        ? "El área mide la superficie: base × altura."
        : "El perímetro mide el borde: suma todos los lados.",
      area ? "Ejemplo: 3 × 2 = 6 cm²." : "Ejemplo: 3 + 2 + 3 + 2 = 10 cm.",
      area
        ? a + " × " + b + " = " + n + " cm²."
        : a + " + " + b + " + " + a + " + " + b + " = " + n + " cm.",
      area ? "Multiplica base por altura." : "Cada medida aparece dos veces.",
      { type: "shape", text: a + " cm × " + b + " cm" },
    );
  });
  out.push(
    g === 5
      ? q(
          "¿Cuánto mide un ángulo recto?",
          "90°",
          ["45°", "90°", "180°", "360°"],
          "Un ángulo recto forma una esquina como la de un cuadrado.",
          "Ejemplo: una vuelta completa mide 360°.",
          "Un ángulo recto es un cuarto de vuelta: 360 ÷ 4 = 90°.",
          "Piensa en un cuarto de vuelta.",
          { type: "math", text: "∟" },
        )
      : q(
          "Un cubo tiene aristas de 3 cm. ¿Cuál es su volumen?",
          "27 cm³",
          ["9 cm³", "18 cm³", "27 cm³", "30 cm³"],
          "El volumen de un cubo es lado × lado × lado.",
          "Ejemplo: lado 2 cm: 2 × 2 × 2 = 8 cm³.",
          "3 × 3 × 3 = 9 × 3 = 27 cm³.",
          "Multiplica la medida tres veces.",
          { type: "math", text: "🧊 3 × 3 × 3" },
        ),
  );
  return out;
}

function decimalQuestions(g) {
  const data = {
    4: [
      [
        "¿Cuál es la escritura decimal de cinco décimas?",
        "0,5",
        ["0,5", "5", "0,05", "0,005"],
        "Cinco décimas son 5/10 = 0,5.",
        "La primera cifra después de la coma representa décimas.",
      ],
      [
        "¿Cuánto es 3,2 + 1,4?",
        "4,6",
        ["4,6", "4,4", "3,6", "5,6"],
        "3 + 1 = 4 y 0,2 + 0,4 = 0,6. Total: 4,6.",
        "Alinea las comas y suma cada posición.",
      ],
      [
        "¿Cuánto es 5,6 − 2,1?",
        "3,5",
        ["3,5", "3,7", "2,5", "4,5"],
        "5 − 2 = 3 y 0,6 − 0,1 = 0,5. Total: 3,5.",
        "Resta unidades y décimas.",
      ],
      [
        "¿Cuál es mayor: 2,7 o 2,4?",
        "2,7",
        ["2,7", "2,4", "Son iguales", "Ninguno"],
        "Las unidades son iguales. Compara 7 décimas con 4 décimas: 2,7 es mayor.",
        "Compara la primera cifra después de la coma.",
      ],
      [
        "¿Qué fracción equivale a 0,3?",
        "3/10",
        ["3/10", "3/100", "3/1", "10/3"],
        "0,3 son tres décimas, es decir, 3/10.",
        "Décimas significa partes de diez.",
      ],
    ],
    5: [
      [
        "¿Cuánto es 2,35 + 1,20?",
        "3,55",
        ["3,55", "3,25", "2,55", "4,55"],
        "2,35 + 1,20 = 3,55. Alinea las comas.",
        "Suma centésimas, décimas y unidades.",
      ],
      [
        "¿Cuánto es 5,75 − 2,50?",
        "3,25",
        ["3,25", "3,75", "2,25", "4,25"],
        "5,75 − 2,50 = 3,25.",
        "Puedes separar 2,50 en 2 y 0,50.",
      ],
      [
        "¿Qué fracción equivale a 0,25?",
        "25/100",
        ["25/100", "25/10", "2/5", "5/25"],
        "Dos cifras decimales representan centésimas: 0,25 = 25/100.",
        "Cuenta las cifras después de la coma.",
      ],
      [
        "Redondea 3,76 a una décima.",
        "3,8",
        ["3,8", "3,7", "3,76", "4"],
        "La centésima es 6. Como es al menos 5, la décima aumenta de 7 a 8: 3,8.",
        "Para redondear a décimas, mira la centésima.",
      ],
      [
        "¿Cuál es mayor: 4,08 o 4,8?",
        "4,8",
        ["4,8", "4,08", "Son iguales", "Ninguno"],
        "4,8 = 4,80. Compara 4,80 y 4,08: 4,80 es mayor.",
        "Escribe ambos números con dos cifras decimales.",
      ],
    ],
    6: [
      [
        "¿Cuánto es 0,6 × 0,5?",
        "0,3",
        ["0,3", "3", "0,03", "0,6"],
        "6 × 5 = 30. Dos cifras decimales en total: 0,30 = 0,3.",
        "Multiplicar por 0,5 es tomar la mitad.",
      ],
      [
        "¿Cuánto es 4,5 ÷ 0,5?",
        "9",
        ["9", "2,25", "4", "0,9"],
        "Multiplica ambos números por 10: 45 ÷ 5 = 9.",
        "Piensa cuántas mitades caben en 4,5.",
      ],
      [
        "Redondea 7,486 a dos cifras decimales.",
        "7,49",
        ["7,49", "7,48", "7,5", "7,486"],
        "La milésima es 6, así que la centésima aumenta: 7,486 → 7,49.",
        "Mira la tercera cifra después de la coma.",
      ],
      [
        "¿Qué fracción equivale a 0,125?",
        "1/8",
        ["1/8", "1/4", "1/5", "1/2"],
        "0,125 = 125/1000. Divide ambos números por 125: 1/8.",
        "Busca qué fracción resulta de dividir 125/1000.",
      ],
      [
        "¿Cuál es la escritura decimal de 12,5 %?",
        "0,125",
        ["0,125", "1,25", "12,5", "0,0125"],
        "Un porcentaje se divide entre 100: 12,5 ÷ 100 = 0,125.",
        "Mueve la coma dos posiciones a la izquierda.",
      ],
    ],
  };
  return data[g].map((d) =>
    q(
      d[0],
      d[1],
      d[2],
      "Los decimales representan partes de una unidad. Cada posición vale diez veces menos que la anterior.",
      "Ejemplo: 1,25 = 1 unidad + 2 décimas + 5 centésimas.",
      d[3],
      d[4],
      { type: "math", text: "1 → 0,1 → 0,01" },
    ),
  );
}

function measureQuestions(g) {
  const sets = {
    4: [
      [2, "m", 200, "cm", 100],
      [3, "kg", 3000, "g", 1000],
      [2, "L", 2000, "mL", 1000],
      [2, "h", 120, "min", 60],
      [150, "cm", 1.5, "m", 0.01],
    ],
    5: [
      [1.5, "m", 150, "cm", 100],
      [2.5, "kg", 2500, "g", 1000],
      [0.75, "L", 750, "mL", 1000],
      [90, "min", 1.5, "h", 1 / 60],
      [250, "cm", 2.5, "m", 0.01],
    ],
    6: [
      [2.4, "km", 2400, "m", 1000],
      [3500, "g", 3.5, "kg", 0.001],
      [1.25, "L", 1250, "mL", 1000],
      [2, "m²", 20000, "cm²", 10000],
      [150, "min", 2.5, "h", 1 / 60],
    ],
  };
  return sets[g].map(([a, from, n, to, factor]) => {
    const rule =
      factor >= 1
        ? "1 " + from + " = " + fmt(factor) + " " + to
        : "1 " + to + " = " + fmt(1 / factor) + " " + from;
    const calculation =
      factor >= 1 ? fmt(a) + " × " + fmt(factor) : fmt(a) + " ÷ " + fmt(1 / factor);
    return q(
      "Convierte " + fmt(a) + " " + from + " a " + to + ".",
      fmt(n) + " " + to,
      [fmt(n) + " " + to, fmt(n * 2) + " " + to, fmt(n / 2) + " " + to, fmt(n + 1) + " " + to],
      "Antes de convertir, identifica la equivalencia entre las dos unidades.",
      "Equivalencia: " + rule + ".",
      calculation + " = " + fmt(n) + " " + to + ".",
      factor >= 1
        ? "Pasa a unidades más pequeñas multiplicando. Usa: " + rule + "."
        : "Pasa a unidades más grandes dividiendo. Usa: " + rule + ".",
      { type: "math", text: fmt(a) + " " + from + " → ? " + to },
    );
  });
}

function problemQuestions(g) {
  const data = {
    4: [8, 5, 3, 2, 24, 4, 20, 47],
    5: [12, 7, 2.5, 1.25, 36, 6, 24, 59],
    6: [18, 14, 3.75, 2.5, 45, 5, 30, 76],
  }[g];
  const [a, b, p, r, length, parts, seats, people] = data;
  const build = (text, n, unit, explain, hint) =>
    q(
      text,
      fmt(n) + (unit ? " " + unit : ""),
      [n, n + 1, n + 2, n - 1].map((v) => fmt(v) + (unit ? " " + unit : "")),
      "Lee el problema, identifica los datos, elige la operación y comprueba si el resultado tiene sentido.",
      "Ejemplo: dos bolsas de 4 manzanas contienen 2 × 4 = 8 manzanas.",
      explain,
      hint,
      { type: "math", text: "Datos → Operación → Respuesta" },
    );
  const out = [
    build(
      "Hay 3 cajas con " + a + " lápices cada una. Se regalan " + b + ". ¿Cuántos quedan?",
      3 * a - b,
      "lápices",
      "Primero 3 × " +
        a +
        " = " +
        3 * a +
        ". Después " +
        3 * a +
        " − " +
        b +
        " = " +
        (3 * a - b) +
        " lápices.",
      "Primero calcula el total y después resta lo regalado.",
    ),
    build(
      "Compras 3 cuadernos de " +
        fmt(p) +
        " monedas y un lápiz de " +
        fmt(r) +
        " monedas. ¿Cuánto pagas?",
      3 * p + r,
      "monedas",
      "3 × " +
        fmt(p) +
        " = " +
        fmt(3 * p) +
        ". Suma el lápiz: " +
        fmt(3 * p) +
        " + " +
        fmt(r) +
        " = " +
        fmt(3 * p + r) +
        ".",
      "Multiplica el precio del cuaderno por 3 y suma el lápiz.",
    ),
    build(
      "Repartes " +
        length +
        " m de cuerda en " +
        parts +
        " partes iguales. ¿Cuánto mide cada parte?",
      length / parts,
      "m",
      length + " ÷ " + parts + " = " + fmt(length / parts) + " m.",
      "Divide la longitud total entre el número de partes.",
    ),
    build(
      "Tres autobuses tienen " +
        seats +
        " asientos cada uno. Viajan " +
        people +
        " personas. ¿Cuántos asientos quedan libres?",
      3 * seats - people,
      "asientos",
      "3 × " +
        seats +
        " = " +
        3 * seats +
        " asientos. Luego " +
        3 * seats +
        " − " +
        people +
        " = " +
        (3 * seats - people) +
        ".",
      "Calcula la capacidad de los tres autobuses y resta los pasajeros.",
    ),
  ];
  out.push(
    g === 6
      ? build(
          "Una mochila cuesta 80 monedas y tiene un descuento del 25 %. ¿Cuál es el precio final?",
          60,
          "monedas",
          "El 25 % de 80 es 80 ÷ 4 = 20. Precio final: 80 − 20 = 60.",
          "Calcula primero el descuento y luego réstalo del precio.",
        )
      : g === 5
        ? build(
            "Hay 20 frutas. Tres quintas partes son manzanas. ¿Cuántas manzanas hay?",
            12,
            "manzanas",
            "20 ÷ 5 = 4. Después 4 × 3 = 12 manzanas.",
            "Divide entre 5 para obtener una quinta parte y multiplica por 3.",
          )
        : build(
            "Hay 16 plantas. Una cuarta parte tiene flores. ¿Cuántas tienen flores?",
            4,
            "plantas",
            "Una cuarta parte de 16: 16 ÷ 4 = 4 plantas.",
            "Reparte las 16 plantas en cuatro grupos iguales.",
          ),
  );
  return out;
}

function orderedOperations(g) {
  const lesson =
    g === 5
      ? "Resuelve primero los paréntesis, después multiplicaciones y divisiones, y al final sumas y restas."
      : "Resuelve primero los paréntesis, luego las potencias, después multiplicaciones y divisiones, y al final sumas y restas.";
  const rows =
    g === 5
      ? [
          ["12 × 8", 96, "12 × 8 = (10 × 8) + (2 × 8) = 80 + 16 = 96.", "Separa 12 en 10 y 2."],
          [
            "144 ÷ 12",
            12,
            "12 × 12 = 144. Por eso 144 ÷ 12 = 12.",
            "Busca qué número multiplicado por 12 da 144.",
          ],
          [
            "(18 + 6) ÷ 4",
            6,
            "Primero 18 + 6 = 24. Después 24 ÷ 4 = 6.",
            "Resuelve la suma dentro del paréntesis primero.",
          ],
          [
            "7 × (5 − 2)",
            21,
            "Primero 5 − 2 = 3. Después 7 × 3 = 21.",
            "Empieza por la resta del paréntesis.",
          ],
          [
            "30 − 4 × 5",
            10,
            "Primero 4 × 5 = 20. Después 30 − 20 = 10.",
            "La multiplicación se resuelve antes que la resta.",
          ],
        ]
      : [
          [
            "2³",
            8,
            "2³ significa 2 × 2 × 2 = 4 × 2 = 8.",
            "El 3 indica cuántas veces multiplicas el 2 por sí mismo.",
          ],
          [
            "3² + 5",
            14,
            "Primero 3² = 3 × 3 = 9. Después 9 + 5 = 14.",
            "Resuelve la potencia antes de sumar.",
          ],
          [
            "18 ÷ (2 + 1)",
            6,
            "Primero 2 + 1 = 3. Después 18 ÷ 3 = 6.",
            "Resuelve el paréntesis antes de dividir.",
          ],
          [
            "4 + 3 × 5",
            19,
            "Primero 3 × 5 = 15. Después 4 + 15 = 19.",
            "La multiplicación va antes que la suma.",
          ],
          [
            "(6 − 2)²",
            16,
            "Primero 6 − 2 = 4. Después 4² = 4 × 4 = 16.",
            "Resuelve el paréntesis y luego la potencia.",
          ],
        ];
  return rows.map(([text, n, explain, hint]) =>
    q(
      "¿Cuánto es " + text + "?",
      n,
      [n, n + 1, n + 2, n - 1],
      lesson,
      g === 5 ? "Ejemplo: (2 + 3) × 4 = 5 × 4 = 20." : "Ejemplo: 3² = 3 × 3 = 9.",
      explain,
      hint,
      { type: "math", text: text + " = ?" },
    ),
  );
}

function proportionalProblems() {
  const rows = [
    [
      "Cuatro lápices cuestan 12 monedas. ¿Cuánto cuestan siete lápices?",
      21,
      "monedas",
      "Un lápiz cuesta 12 ÷ 4 = 3 monedas. Siete cuestan 7 × 3 = 21.",
      "Calcula primero el precio de un lápiz.",
    ],
    [
      "Una receta para 2 personas lleva 150 g de arroz. ¿Cuánto necesitas para 6 personas?",
      450,
      "g",
      "De 2 a 6 personas multiplicamos por 3. Entonces 150 × 3 = 450 g.",
      "Compara el número de personas: 6 ÷ 2 = 3.",
    ],
    [
      "En un mapa, 1 cm representa 2 km. ¿Qué distancia representan 7 cm?",
      14,
      "km",
      "Cada centímetro representa 2 km: 7 × 2 = 14 km.",
      "Multiplica la medida del mapa por los kilómetros que representa cada centímetro.",
    ],
    [
      "Una mochila cuesta 80 monedas y tiene un descuento del 25 %. ¿Cuál es el precio final?",
      60,
      "monedas",
      "25 % = 1/4. Descuento: 80 ÷ 4 = 20. Precio final: 80 − 20 = 60.",
      "Calcula el descuento y réstalo del precio.",
    ],
    [
      "Compras tres cuadernos de 3,75 monedas y un lápiz de 2,50. ¿Cuánto pagas?",
      13.75,
      "monedas",
      "3 × 3,75 = 11,25. Después 11,25 + 2,50 = 13,75 monedas.",
      "Calcula el precio de los tres cuadernos antes de sumar el lápiz.",
    ],
  ];
  return rows.map(([text, n, unit, explain, hint]) =>
    q(
      text,
      fmt(n) + " " + unit,
      [n, n + 1, n + 2, n - 1].map((x) => fmt(x) + " " + unit),
      "En una proporción, las cantidades cambian de forma relacionada. Busca una unidad o el factor que conecta los datos.",
      "Ejemplo: 2 entradas cuestan 10 monedas; una cuesta 5 y tres cuestan 15.",
      explain,
      hint,
      { type: "math", text: "Datos → Relación → Solución" },
    ),
  );
}

function questions() {
  const grade = state.grade,
    topic = active.id;
  const factories = {
    op: grade >= 5 ? orderedOperations : operations,
    fr: fractions,
    ge: geometry,
    de: decimalQuestions,
    me: measureQuestions,
    pr: grade === 6 ? proportionalProblems : problemQuestions,
  };
  const list = factories[topic](grade);
  if (topic === "de" && grade === 4)
    list.forEach((x) => {
      x.lesson =
        "Una décima es una de diez partes iguales. La primera cifra después de la coma indica décimas.";
      x.example = "Ejemplo: 1,3 = 1 unidad y 3 décimas.";
    });
  return list;
}

/* ==========================================================
   05. MISIONES, RESPUESTAS Y ESTRELLAS
   Muestra ejercicios, verifica respuestas y permite aprender sin penalizaciones.
   ========================================================== */

function start(w) {
  active = w;
  replay = state.done.includes(id());
  index = replay ? 0 : state.progress[id()] || 0;
  sessionStars = 0;
  view("mission");
  render();
}

function render() {
  const x = questions()[index];
  solved = false;
  hints = 0;
  errors = 0;
  $("tag").textContent = state.grade + ".º · " + active.name;
  $("title").textContent = active.title;
  $("counter").textContent = "Paso " + (index + 1) + " de 5 · A tu ritmo";
  $("steps").innerHTML = [0, 1, 2, 3, 4]
    .map((i) => '<span class="step ' + (i < index ? "done" : "") + '"></span>')
    .join("");
  $("steps").setAttribute("aria-label", index + " de 5 pasos completados");
  $("lesson").textContent = x.lesson;
  $("example").textContent = x.example;
  $("question").textContent = x.text;
  visual($("visual"), x.visual);
  $("feedback").textContent = "";
  $("hintText").classList.add("hidden");
  $("support").classList.add("hidden");
  $("next").classList.add("hidden");
  $("hint").disabled = false;
  $("hint").textContent = "💡 Una pista, por favor";
  $("answers").replaceChildren();
  const choices = [...x.choices];
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  choices.forEach((c) => {
    const b = document.createElement("button");
    b.className = "option";
    b.textContent = c;
    b.onclick = () => answer(c, b, x);
    $("answers").append(b);
  });
  novaMessage(
    "Vamos con el paso " +
      (index + 1) +
      ". Lee el ejemplo, mira el dibujo y elige tu respuesta. Si lo necesitas, estoy aquí para darte una pista.",
  );
  $("novaCoach").classList.add("hidden");
  $("novaOneStep").textContent = "💡 Muéstrame un paso";
}

function answer(c, b, x) {
  if (solved) return;
  const stats = state.topicStats[id()];
  stats.attempts++;
  if (c === x.answer) stats.correct++;
  recordActivity("lesson");
  if (c === x.answer) {
    solved = true;
    b.classList.add("correct");
    [...$("answers").children].forEach((el) => (el.disabled = true));
    const k = id() + "-" + index,
      fresh = !state.awarded.includes(k);
    if (fresh) {
      state.awarded.push(k);
      sessionStars += 10;
    }
    if (!replay) state.progress[id()] = index + 1;
    if (index === 4 && !state.done.includes(id())) state.done.push(id());
    save();
    $("feedback").textContent =
      "¡Lo has conseguido! " + (fresh ? "+10 estrellas. " : "") + x.explain;
    $("hint").disabled = true;
    $("support").classList.add("hidden");
    $("next").classList.remove("hidden");
    $("next").textContent = index === 4 ? "Ver mi logro 🏅" : "Siguiente paso →";
    $("next").focus();
  } else {
    errors++;
    b.disabled = true;
    b.classList.add("wrong");
    $("feedback").textContent =
      errors === 1
        ? "Vamos a intentarlo de nuevo. " + x.hint + " Puedes pedir una pista."
        : "Te mostramos los pasos: " + x.explain + " Practica abajo y vuelve a intentarlo.";
    if (errors >= 2) support();
  }
  novaMessage(
    solved
      ? "¡Buen trabajo! Ya puedes pulsar «" +
          (index === 4 ? "Ver mi logro" : "Siguiente paso") +
          "». Aprender con pistas también cuenta."
      : errors >= 2
        ? "Hagamos un paso más pequeño. Prueba el ejercicio de refuerzo de abajo y después vuelve al principal."
        : "No pasa nada. Mira la explicación o pídeme una pista. Puedes intentarlo otra vez.",
  );
  save();
}

function showHint() {
  if (solved) return;
  state.topicStats[id()].hints++;
  const x = questions()[index];
  $("hintText").classList.remove("hidden");
  $("hintText").textContent = "💡 " + (hints === 0 ? x.hint : x.explain);
  hints++;
  $("hint").textContent = "💡 Ver los pasos";
  novaMessage(
    hints === 1
      ? "La pista te da una dirección. Léela con calma y prueba de nuevo."
      : "Ahora tienes los pasos completos. Compáralos con las opciones y vuelve a intentarlo.",
  );
  save();
}

/* ==========================================================
   06. PRÁCTICA MÁS SENCILLA
   Nova ofrece ejercicios de refuerzo adaptados al tema y grado del estudiante.
   ========================================================== */

function basicSupportQuestion() {
  if (["de", "me", "pr"].includes(active.id)) {
    return active.id === "de"
      ? q(
          "¿Cuánto es 1,2 + 0,3?",
          "1,5",
          ["1,5", "1,3", "1,6"],
          "",
          "",
          "Una unidad y cinco décimas: 1,2 + 0,3 = 1,5.",
          "",
          { type: "math", text: "1 + 0,2 + 0,3" },
        )
      : active.id === "me"
        ? q(
            "¿Cuántos centímetros tiene 1 metro?",
            "100 cm",
            ["10 cm", "100 cm", "1000 cm"],
            "",
            "",
            "La equivalencia es 1 m = 100 cm.",
            "",
            { type: "math", text: "1 m → ? cm" },
          )
        : q(
            "Dos bolsas tienen 3 manzanas cada una. ¿Cuántas hay en total?",
            6,
            [5, 6, 8],
            "",
            "",
            "Suma los dos grupos: 3 + 3 = 6 manzanas.",
            "",
            { type: "groups", a: 2, b: 3 },
          );
  }
  return active.id === "op"
    ? q("¿Cuánto es 2 × 3?", 6, [5, 6, 8], "", "", "Dos grupos de tres: 3 + 3 = 6.", "", {
        type: "groups",
        a: 2,
        b: 3,
      })
    : active.id === "fr"
      ? q(
          "Una de cuatro partes está coloreada. ¿Qué fracción es?",
          "1/4",
          ["4/1", "1/4", "1/2"],
          "",
          "",
          "Una parte de cuatro: 1/4.",
          "",
          { type: "fraction", n: 1, d: 4 },
        )
      : q(
          "Cuatro lados de 2 cm. ¿Cuál es el perímetro?",
          "8 cm",
          ["4 cm", "6 cm", "8 cm"],
          "",
          "",
          "2 + 2 + 2 + 2 = 8 cm.",
          "",
          { type: "shape", text: "2 cm × 2 cm" },
        );
}

function support() {
  if (!$("support").classList.contains("hidden")) return;
  let easy = null;
  const g = state.grade,
    w = active.id,
    current = questions()[index];
  if (w === "op" && g === 5)
    easy = {
      text: "¿Cuánto es (2 + 1) × 2?",
      answer: "6",
      choices: ["4", "5", "6"],
      explain: "Primero 2 + 1 = 3. Después 3 × 2 = 6.",
      visual: { type: "math", text: "(2 + 1) × 2" },
    };
  if (w === "op" && g === 6)
    easy = {
      text: "¿Cuánto es 2²?",
      answer: "4",
      choices: ["2", "4", "6"],
      explain: "2² = 2 × 2 = 4. La potencia repite una multiplicación.",
      visual: { type: "math", text: "2 × 2 = ?" },
    };
  if (w === "fr" && g >= 5)
    easy = /porcentaje|%/i.test(current.text)
      ? {
          text: "¿Qué porcentaje equivale a la mitad?",
          answer: "50 %",
          choices: ["25 %", "50 %", "100 %"],
          explain: "La mitad de 100 es 50. Por eso 1/2 = 50 %. ",
          visual: { type: "fraction", n: 1, d: 2 },
        }
      : {
          text: "¿Qué fracción equivale a 1/2?",
          answer: "2/4",
          choices: ["1/4", "2/4", "3/4"],
          explain: "Multiplica ambos números por 2: 1/2 = 2/4.",
          visual: { type: "fraction", n: 2, d: 4 },
        };
  if (w === "ge" && g >= 5)
    easy = /volumen/i.test(current.text)
      ? {
          text: "Un cubo tiene aristas de 2 cm. ¿Cuál es su volumen?",
          answer: "8 cm³",
          choices: ["4 cm³", "6 cm³", "8 cm³"],
          explain: "Lado × lado × lado: 2 × 2 × 2 = 8 cm³.",
          visual: { type: "math", text: "2 × 2 × 2" },
        }
      : {
          text: "Un rectángulo mide 2 cm por 3 cm. ¿Cuál es su área?",
          answer: "6 cm²",
          choices: ["5 cm²", "6 cm²", "10 cm²"],
          explain: "Base × altura: 2 × 3 = 6 cm².",
          visual: { type: "shape", text: "2 cm × 3 cm" },
        };
  if (w === "de" && g === 6)
    easy = {
      text: "¿Cuánto es 0,4 × 0,5?",
      answer: "0,2",
      choices: ["0,2", "2", "0,02"],
      explain: "Multiplicar por 0,5 es tomar la mitad. La mitad de 0,4 es 0,2.",
      visual: { type: "math", text: "La mitad de 0,4" },
    };
  if (w === "me" && g === 6 && /m²/.test(current.text))
    easy = {
      text: "¿Cuántos cm² tiene 1 m²?",
      answer: "10 000 cm²",
      choices: ["100 cm²", "1000 cm²", "10 000 cm²"],
      explain: "Cada lado mide 100 cm. La superficie es 100 × 100 = 10 000 cm².",
      visual: { type: "math", text: "100 × 100" },
    };
  if (w === "pr" && g === 6)
    easy = {
      text: "Dos cuadernos cuestan 4 monedas. ¿Cuánto cuestan cinco?",
      answer: "10 monedas",
      choices: ["5 monedas", "8 monedas", "10 monedas"],
      explain: "Un cuaderno cuesta 4 ÷ 2 = 2. Cinco cuestan 5 × 2 = 10 monedas.",
      visual: { type: "math", text: "1 cuaderno → 2 monedas" },
    };

  if (!easy) easy = basicSupportQuestion();
  $("support").classList.remove("hidden");
  $("supportQuestion").textContent = easy.text;
  visual($("supportVisual"), easy.visual);
  $("supportFeedback").textContent = "";
  $("supportAnswers").replaceChildren();
  easy.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = choice;
    button.onclick = () => {
      button.disabled = true;
      if (String(choice) === String(easy.answer)) {
        button.classList.add("correct");
        [...$("supportAnswers").children].forEach((el) => (el.disabled = true));
        $("supportFeedback").textContent =
          "Nova: ¡bien! " + easy.explain + " Ahora puedes volver al ejercicio principal.";
        novaMessage(
          "¡Buen trabajo con el paso sencillo! Cuando quieras, vuelve al ejercicio principal.",
        );
      } else $("supportFeedback").textContent = "Nova: vamos paso a paso. " + easy.explain;
    };
    $("supportAnswers").append(button);
  });
}

/* ==========================================================
   07. DIBUJOS Y REPRESENTACIONES
   Representa fracciones, grupos y figuras; adapta las proporciones de los rectángulos.
   ========================================================== */

function visual(el, v) {
  el.replaceChildren();
  el.removeAttribute("aria-label");
  if (v.type === "fraction") {
    el.setAttribute("aria-label", v.n + " de " + v.d + " partes coloreadas");
    for (let i = 0; i < v.d; i++) {
      const s = document.createElement("span");
      s.className = "piece" + (i < v.n ? " filled" : "");
      s.setAttribute("aria-hidden", "true");
      el.append(s);
    }
  } else if (v.type === "groups") {
    for (let i = 0; i < v.a; i++) {
      const s = document.createElement("span");
      s.className = "group";
      s.textContent = "●".repeat(v.b);
      el.append(s);
    }
    el.setAttribute("aria-label", v.a + " grupos de " + v.b);
  } else {
    const s = document.createElement("div");
    s.className = v.type === "shape" ? "shape" : "math";
    s.textContent = v.text;
    el.append(s);
  }

  if (v.type !== "shape" || !el.firstElementChild) return;
  const match = v.text.match(/(\d+) cm × (\d+) cm/);
  const a = match ? Number(match[1]) : 1,
    b = match ? Number(match[2]) : 1;
  const width = a === b ? 145 : 210,
    height = a === b ? 145 : Math.max(65, Math.round((210 * b) / a));
  Object.assign(el.firstElementChild.style, {
    width: width + "px",
    height: height + "px",
    maxWidth: "100%",
    padding: "8px",
    display: "grid",
    placeItems: "center",
    textAlign: "center",
  });
}

function worldArt(kind) {
  if (!["op", "fr", "ge"].includes(kind)) {
    const colors = { de: "#987acd", me: "#659783", pr: "#c59b54" },
      label = { de: "0,5", me: "cm", pr: "?" },
      fill = colors[kind];
    return (
      '<svg viewBox="0 0 200 145" aria-hidden="true"><ellipse cx="100" cy="131" rx="53" ry="7" fill="' +
      fill +
      '" opacity=".2"/><rect x="52" y="28" width="96" height="91" rx="20" fill="#fffdfa" stroke="' +
      fill +
      '" stroke-width="4"/><text x="100" y="87" text-anchor="middle" fill="' +
      fill +
      '" font-size="34" font-weight="700" font-family="system-ui">' +
      label[kind] +
      '</text><path d="M72 104 H129" stroke="' +
      fill +
      '" stroke-width="3" stroke-linecap="round"/></svg>'
    );
  }

  const shell = '<svg viewBox="0 0 200 145" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
  if (kind === "op")
    return (
      shell +
      '<ellipse cx="104" cy="132" rx="45" ry="6" fill="#b8a0dc" opacity=".4"/><g transform="rotate(20 100 72)"><path d="M82 96 L68 117 L85 112 M119 96 L136 117 L118 111" fill="#9c7ece"/><path d="M88 113 Q99 143 111 113" fill="#ffc96d"/><path d="M80 92 Q76 41 100 15 Q125 41 121 92 L113 113 H88z" fill="#fffcf6" stroke="#8b70b6" stroke-width="3"/><path d="M100 15 Q87 29 83 42 H117 Q112 27 100 15" fill="#9f86d0"/><circle cx="101" cy="62" r="16" fill="#bbdfda" stroke="#8b70b6" stroke-width="3"/><path d="M94 57 Q98 52 104 53" fill="none" stroke="white" stroke-width="4" stroke-linecap="round"/><path d="M88 101 H113" stroke="#8b70b6" stroke-width="4"/></g><text x="27" y="61" fill="#ad90d5" font-size="24" font-family="system-ui">+</text><text x="158" y="96" fill="#ad90d5" font-size="24" font-family="system-ui">×</text></svg>'
    );
  if (kind === "fr")
    return (
      shell +
      '<ellipse cx="98" cy="133" rx="60" ry="6" fill="#e6bd94" opacity=".5"/><circle cx="92" cy="74" r="52" fill="#f2bc71" stroke="#c89157" stroke-width="3"/><circle cx="92" cy="74" r="42" fill="#ffe4a7"/><path d="M92 74 L92 22 M92 74 L143 74 M92 74 L92 126 M92 74 L40 74" stroke="#c89157" stroke-width="3"/><path d="M103 65 L103 14 A51 51 0 0 1 154 65z" fill="#ffe4a7" stroke="#c89157" stroke-width="3"/><circle cx="117" cy="41" r="6" fill="#d78472"/><circle cx="132" cy="53" r="5" fill="#d78472"/><circle cx="70" cy="51" r="7" fill="#d78472"/><circle cx="70" cy="96" r="7" fill="#d78472"/><circle cx="111" cy="96" r="7" fill="#d78472"/><path d="M66 72 l8 -5 M105 108 l8 -5" stroke="#77996d" stroke-width="4" stroke-linecap="round"/></svg>'
    );
  return (
    shell +
    '<ellipse cx="98" cy="133" rx="62" ry="6" fill="#a9cabb" opacity=".4"/><rect x="35" y="79" width="42" height="42" rx="4" fill="#9cbcae" stroke="#648e79" stroke-width="3"/><path d="M89 82 L116 40 L143 82z" fill="#e8cd8d" stroke="#ac9458" stroke-width="3"/><circle cx="159" cy="101" r="20" fill="#bed6b8" stroke="#648e79" stroke-width="3"/><path d="M55 74 V43 Q33 42 33 25 Q55 24 55 43 Q55 22 78 20 Q82 42 55 48" fill="#a5c3a1" stroke="#648e79" stroke-width="3" stroke-linejoin="round"/><path d="M121 118 V100" stroke="#648e79" stroke-width="3"/><text x="98" y="23" fill="#648e79" font-size="20" font-family="system-ui">△</text></svg>'
  );
}

/* ==========================================================
   08. JUEGOS MATEMÁTICOS
   Parejas numéricas, constructor de fracciones y tienda de Nova; sin reloj ni vidas.
   ========================================================== */

/* ==========================================================
   JUEGOS: SEIS MODOS Y RETOS NUEVOS EN CADA PARTIDA
   Genera preguntas por grado, ofrece pistas y guarda recompensas sin duplicarlas.
   ========================================================== */
const lastGameDecks = new Map();
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sample(items, count) {
  return shuffleGame([...items]).slice(0, count);
}
function differentDeck(kind, grade, build) {
  const key = grade + "-" + kind,
    previous = lastGameDecks.get(key);
  let deck, signature;
  for (let attempt = 0; attempt < 20; attempt++) {
    deck = build();
    if (new Set(deck.map((round) => JSON.stringify(round))).size !== deck.length) continue;
    signature = JSON.stringify(deck);
    if (signature !== previous) break;
  }
  lastGameDecks.set(key, signature);
  return deck;
}
function numericChallenge(text, answer, unit, explain, hint, visual, step = 1) {
  const values = [answer];
  for (const candidate of shuffleGame([
    answer + step,
    answer - step,
    answer + 2 * step,
    answer + 3 * step,
    answer + 4 * step,
  ])) {
    if (candidate >= 0 && !values.some((n) => Math.abs(n - candidate) < 0.00001))
      values.push(candidate);
    if (values.length === 4) break;
  }
  const label = (n) => fmt(n) + (unit ? " " + unit : "");
  return {
    text,
    answer: label(answer),
    choices: shuffleGame(values.map(label)),
    explain,
    hint,
    visual,
  };
}
function detectiveQuestion(grade, topic) {
  let a,
    b,
    result,
    text,
    explain,
    hint,
    unit = "",
    visual;
  if (topic === "op") {
    a = randomInt(3, grade === 4 ? 12 : 20);
    b = randomInt(2, 9);
    const mode = randomInt(0, 2);
    if (grade === 6 && mode === 0) {
      a = randomInt(2, 8);
      result = a * a;
      text = "¿Cuánto vale " + a + "²?";
      explain = a + "² = " + a + " × " + a + " = " + result + ".";
    } else if (grade >= 5 && mode === 1) {
      const c = randomInt(2, 8);
      result = (a + b) * c;
      text = "Resuelve (" + a + " + " + b + ") × " + c + ".";
      explain =
        "Primero " +
        a +
        " + " +
        b +
        " = " +
        (a + b) +
        ". Después " +
        (a + b) +
        " × " +
        c +
        " = " +
        result +
        ".";
    } else if (mode === 2) {
      result = a;
      text = "¿Cuánto es " + a * b + " ÷ " + b + "?";
      explain = a * b + " ÷ " + b + " = " + a + ".";
    } else {
      result = a * b;
      text = "¿Cuánto es " + a + " × " + b + "?";
      explain = a + " grupos de " + b + " suman " + result + ".";
    }
    hint =
      "Mira la operación. Resuelve primero los paréntesis; una potencia repite una multiplicación.";
  } else if (topic === "fr") {
    const d = sample(grade === 4 ? [3, 4, 5, 6, 8] : [4, 5, 6, 8, 10, 12], 1)[0],
      n = randomInt(1, d - 1);
    const labels = [n + "/" + d, n + 1 + "/" + d, d + "/" + n, n + "/" + (d + 1)];
    if (grade === 6 && randomInt(0, 1) === 1) {
      const percent = sample([10, 20, 25, 50, 75], 1)[0],
        amount = randomInt(2, 8) * 20;
      result = (amount * percent) / 100;
      return {
        ...numericChallenge(
          "¿Cuánto es el " + percent + " % de " + amount + "?",
          result,
          "",
          amount + " × " + percent + " ÷ 100 = " + result + ".",
          "Calcula primero una centésima de la cantidad y multiplícala por el porcentaje.",
          { type: "math", text: percent + " % de " + amount },
        ),
        topic: "Fracciones y porcentajes",
      };
    }
    return {
      topic: "Fracciones",
      text:
        "Hay " + n + " partes coloreadas de " + d + " partes iguales. ¿Qué fracción representan?",
      answer: n + "/" + d,
      choices: shuffleGame(labels),
      explain:
        "El numerador cuenta " +
        n +
        " partes coloreadas; el denominador cuenta " +
        d +
        " partes en total.",
      hint: "Arriba van las partes coloreadas; abajo, el total de partes.",
      visual: { type: "fraction", n, d },
    };
  } else if (topic === "ge") {
    a = randomInt(2, 10);
    b = randomInt(3, 12);
    if (grade === 6) {
      result = a * a * a;
      unit = "cm³";
      text = "Un cubo tiene aristas de " + a + " cm. ¿Cuál es su volumen?";
      explain = a + " × " + a + " × " + a + " = " + result + " cm³.";
      hint = "El volumen del cubo es lado × lado × lado.";
      visual = { type: "math", text: a + " cm por arista" };
    } else if (grade === 5) {
      result = a * b;
      unit = "cm²";
      text = "Un rectángulo mide " + a + " cm por " + b + " cm. ¿Cuál es su área?";
      explain = a + " × " + b + " = " + result + " cm².";
      hint = "El área del rectángulo es base × altura.";
      visual = { type: "shape", text: a + " cm × " + b + " cm" };
    } else {
      result = 2 * (a + b);
      unit = "cm";
      text = "Un rectángulo mide " + a + " cm por " + b + " cm. ¿Cuál es su perímetro?";
      explain = a + " + " + b + " + " + a + " + " + b + " = " + result + " cm.";
      hint = "Suma los cuatro lados: cada medida se repite dos veces.";
      visual = { type: "shape", text: a + " cm × " + b + " cm" };
    }
  } else if (topic === "de") {
    const scale = grade === 4 ? 10 : 100;
    a = randomInt(10, 80) / scale;
    b = randomInt(5, 35) / scale;
    if (grade === 6) {
      a = randomInt(2, 40) / 10;
      b = 0.5;
      result = a * b;
      text = "¿Cuánto es " + fmt(a) + " × 0,5?";
      explain = "La mitad de " + fmt(a) + " es " + fmt(result) + ".";
      hint = "Multiplicar por 0,5 equivale a tomar la mitad.";
    } else {
      result = Math.round((a + b) * scale) / scale;
      text = "¿Cuánto es " + fmt(a) + " + " + fmt(b) + "?";
      explain = fmt(a) + " + " + fmt(b) + " = " + fmt(result) + ".";
      hint = "Alinea las comas y suma cada posición.";
    }
    return {
      ...numericChallenge(
        text,
        result,
        "",
        explain,
        hint,
        { type: "math", text: grade === 4 ? "Unidades y décimas" : "Unidades y centésimas" },
        1 / scale,
      ),
      topic: "Decimales",
    };
  } else if (topic === "me") {
    a = randomInt(2, 9);
    const mode = randomInt(0, 2);
    if (mode === 0) {
      result = a * 100;
      unit = "cm";
      text = "Convierte " + a + " m a centímetros.";
      explain = "1 m = 100 cm. " + a + " × 100 = " + result + " cm.";
      hint = "Un metro contiene cien centímetros.";
    } else if (mode === 1) {
      result = a * 60;
      unit = "min";
      text = "¿Cuántos minutos hay en " + a + " horas?";
      explain = a + " × 60 = " + result + " minutos.";
      hint = "Cada hora tiene sesenta minutos.";
    } else if (grade === 6) {
      result = a * 10000;
      unit = "cm²";
      text = "Convierte " + a + " m² a cm².";
      explain = "1 m² = 10 000 cm². " + a + " × 10 000 = " + result + " cm².";
      hint = "Una superficie tiene dos dimensiones: 100 × 100 cm² en cada m².";
    } else {
      result = a * 1000;
      unit = "g";
      text = "Convierte " + a + " kg a gramos.";
      explain = a + " × 1000 = " + result + " gramos.";
      hint = "Cada kilogramo contiene mil gramos.";
    }
  } else {
    a = randomInt(3, 9);
    b = randomInt(4, 12);
    const given = randomInt(2, 8);
    if (grade === 6) {
      const price = randomInt(3, 10) * 20,
        percent = sample([10, 25, 50], 1)[0];
      result = price * (1 - percent / 100);
      unit = "monedas";
      text =
        "Una mochila cuesta " +
        price +
        " monedas y tiene un descuento del " +
        percent +
        " %. ¿Cuánto pagas?";
      explain =
        "El descuento es " +
        fmt((price * percent) / 100) +
        ". Pagas " +
        price +
        " − " +
        fmt((price * percent) / 100) +
        " = " +
        fmt(result) +
        " monedas.";
      hint = "Calcula el descuento y réstalo del precio.";
    } else {
      result = a * b - given;
      unit = "lápices";
      text =
        "Hay " +
        a +
        " cajas con " +
        b +
        " lápices cada una. Se regalan " +
        given +
        ". ¿Cuántos quedan?";
      explain =
        a + " × " + b + " = " + a * b + ". Después " + a * b + " − " + given + " = " + result + ".";
      hint = "Multiplica para obtener el total y después resta lo regalado.";
    }
  }
  return {
    ...numericChallenge(
      text,
      result,
      unit,
      explain,
      hint,
      visual || { type: "math", text: "Piensa → Calcula → Comprueba" },
    ),
    topic: { op: "Operaciones", ge: "Geometría", me: "Medidas", pr: "Problemas cotidianos" }[topic],
  };
}
function patternQuestion(grade, mode) {
  let values, answer, hint, explain;
  const start = randomInt(2, 12),
    step = randomInt(2, grade === 4 ? 9 : 15);
  if (mode === 0) {
    values = Array.from({ length: 4 }, (_, i) => start + i * step);
    answer = start + 4 * step;
    hint = "Compara la diferencia entre dos números vecinos.";
    explain = "Cada número aumenta " + step + ". El siguiente es " + answer + ".";
  } else if (mode === 1) {
    const first = step * 6 + start;
    values = Array.from({ length: 4 }, (_, i) => first - i * step);
    answer = first - 4 * step;
    hint = "La secuencia disminuye. Busca cuánto se resta cada vez.";
    explain = "Cada paso resta " + step + ". El siguiente es " + answer + ".";
  } else if (mode === 2) {
    const factor = grade === 6 ? randomInt(2, 3) : 2;
    values = Array.from({ length: 4 }, (_, i) => start * factor ** i);
    answer = start * factor ** 4;
    hint = "Prueba multiplicar un número para obtener el siguiente.";
    explain = "Multiplica por " + factor + " en cada paso. El siguiente es " + answer + ".";
  } else if (mode === 3) {
    const n = randomInt(2, 6);
    values = Array.from({ length: 4 }, (_, i) => (n + i) ** 2);
    answer = (n + 4) ** 2;
    hint = "Los números son cuadrados de enteros consecutivos.";
    explain =
      "Son " +
      n +
      "², " +
      (n + 1) +
      "², " +
      (n + 2) +
      "², " +
      (n + 3) +
      "². Sigue " +
      (n + 4) +
      "² = " +
      answer +
      ".";
  } else {
    const first = randomInt(10, 35) / 10,
      delta = grade === 6 ? 0.25 : 0.5;
    values = Array.from({ length: 4 }, (_, i) => first + i * delta);
    answer = first + 4 * delta;
    hint = "La diferencia también puede ser decimal.";
    explain = "Suma " + fmt(delta) + " en cada paso. Sigue " + fmt(answer) + ".";
  }
  return {
    ...numericChallenge(
      "¿Qué número sigue en la secuencia?",
      answer,
      "",
      explain,
      hint,
      { type: "math", text: "Observa cómo cambia" },
      mode === 4 ? 0.25 : 1,
    ),
    topic: "Patrones numéricos",
    sequence: values.map(fmt),
  };
}
function orderingQuestion(grade) {
  const items = [];
  while (items.length < 4) {
    let value, label;
    if (grade === 4) {
      value = randomInt(5, 180);
      label = String(value);
    } else if (grade === 5) {
      value = randomInt(5, 180) / 10;
      label = fmt(value);
    } else if (randomInt(0, 1)) {
      const d = sample([2, 3, 4, 5, 8, 10], 1)[0],
        n = randomInt(1, d - 1);
      value = n / d;
      label = n + "/" + d;
    } else {
      value = randomInt(1, 95) / 100;
      label = fmt(value);
    }
    if (!items.some((item) => Math.abs(item.value - value) < 0.000001))
      items.push({ value, label });
  }
  const descending = randomInt(0, 1) === 1;
  return {
    topic: "Comparación de números",
    text: "Ordena de " + (descending ? "mayor a menor" : "menor a mayor") + ".",
    items: shuffleGame(items),
    descending,
    hint:
      grade === 4
        ? "Compara primero las centenas, después las decenas y las unidades."
        : grade === 5
          ? "Compara las unidades y luego las décimas. Puedes añadir ceros al final."
          : "Convierte las fracciones a decimales para compararlas. Por ejemplo, 1/2 = 0,5.",
  };
}
function createGameDeck(kind, grade) {
  return differentDeck(kind, grade, () => {
    if (kind === "detective")
      return sample(["op", "fr", "ge", "de", "me", "pr"], 5).map((topic) =>
        detectiveQuestion(grade, topic),
      );
    if (kind === "patterns")
      return shuffleGame(
        (grade === 4 ? [0, 1, 0, 1, 0] : grade === 5 ? [0, 1, 2, 4, 0] : [0, 1, 2, 3, 4]).map(
          (mode) => patternQuestion(grade, mode),
        ),
      );
    if (kind === "order") return Array.from({ length: 5 }, () => orderingQuestion(grade));
    if (kind === "fraction") {
      const pool = [];
      for (const d of grade === 4
        ? [3, 4, 5, 6, 8]
        : grade === 5
          ? [4, 5, 6, 8, 10]
          : [5, 6, 8, 10, 12])
        for (let n = 1; n < d; n++) pool.push([n, d]);
      return sample(pool, 5);
    }
    if (kind === "shop")
      return Array.from({ length: 5 }, () => {
        const products = sample(
          [
            { name: "Manzanas", icon: "🍎" },
            { name: "Cuaderno", icon: "📒" },
            { name: "Zumo", icon: "🧃" },
            { name: "Lápiz", icon: "✏️" },
            { name: "Pan", icon: "🥖" },
            { name: "Regla", icon: "📏" },
            { name: "Leche", icon: "🥛" },
            { name: "Plátanos", icon: "🍌" },
          ],
          4,
        );
        const prices = sample(
          Array.from({ length: 24 }, (_, i) => i + 2),
          4,
        );
        products.forEach((p, i) => (p.price = prices[i] / (grade === 4 ? 1 : grade === 5 ? 2 : 4)));
        const solution = sample([0, 1, 2, 3], randomInt(2, 3)),
          target = solution.reduce((sum, i) => sum + products[i].price, 0);
        return { products, target };
      });
    const pairs = [],
      answers = new Set();
    while (pairs.length < 6) {
      let a = randomInt(2, 12),
        b = randomInt(2, 9),
        text,
        value;
      const mode = randomInt(0, 3);
      if (grade === 6 && mode === 0) {
        a = randomInt(2, 30) / 10;
        value = a * b;
        text = fmt(a) + " × " + b;
      } else if (grade === 6 && mode === 1) {
        a = randomInt(2, 10);
        value = a * a;
        text = a + "²";
      } else if (grade >= 5 && mode === 2) {
        const c = randomInt(1, 7);
        value = (a + c) * b;
        text = "(" + a + " + " + c + ") × " + b;
      } else if (mode === 3) {
        value = a;
        text = a * b + " ÷ " + b;
      } else if (mode === 1) {
        value = a + b;
        text = a + " + " + b;
      } else {
        value = a * b;
        text = a + " × " + b;
      }
      const label = fmt(value);
      if (!answers.has(label)) {
        answers.add(label);
        pairs.push([text, label]);
      }
    }
    return pairs;
  });
}
function gameList() {
  view("games");
  $("gamesGrade").value = state.grade;
  $("gameCards").replaceChildren();
  for (const game of GAME_TYPES) {
    const record = state.gameRecords[state.grade + "-" + game.id],
      card = document.createElement("article");
    card.className = "card game-card " + game.color;
    card.innerHTML =
      '<div class="game-illustration" aria-hidden="true">' +
      game.icon +
      '</div><div class="inside"><span class="tag">RETOS VARIADOS · SIN RELOJ</span><h2>' +
      game.title +
      "</h2><p>" +
      game.desc +
      '</p><p class="small">' +
      (record.completed
        ? "✓ " +
          record.completed +
          " " +
          (record.completed === 1 ? "partida completada" : "partidas completadas")
        : "Tu primera partida te espera") +
      "</p></div>";
    const button = document.createElement("button");
    button.textContent = "Jugar con Nova →";
    button.onclick = () => beginGame(game.id);
    card.lastChild.append(button);
    $("gameCards").append(card);
  }
}
function shuffleGame(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function gameHelp() {
  if (!currentGame) return "Elige un juego para practicar.";
  if (currentGame.finished)
    return "¡Partida completada! Otra partida te traerá nuevos retos. También puedes ver tus estrellas en Mi progreso.";
  return {
    memory:
      "Abre dos cartas: una operación y su resultado. Recuerda sus posiciones. En cada partida cambian las operaciones.",
    fraction:
      "Colorea las partes de la fracción y pulsa Comprobar. Puedes quitar una porción tocándola otra vez.",
    shop: "Elige productos hasta sumar el importe exacto. Puedes quitarlos tocándolos otra vez. Cada compra tiene precios diferentes.",
    detective:
      "Resuelve cinco preguntas de distintos temas. Selecciona una respuesta y pulsa Comprobar. Pídeme una pista cuando lo necesites.",
    patterns:
      "Observa los números y descubre la regla. Elige el número que sigue y comprueba tu respuesta. Cada ronda tiene una secuencia nueva.",
    order:
      "Toca los números en el orden indicado para colocar tus estrellas. Puedes quitar el último o empezar de nuevo antes de comprobar.",
  }[currentGame.id];
}
function gameNotice(text) {
  $("gameMessage").textContent = text;
  if (!$("novaPanel").classList.contains("hidden")) paintNovaGuide();
}
function gameButton(label, fn) {
  const b = document.createElement("button");
  b.textContent = label;
  b.onclick = fn;
  $("gameActions").replaceChildren(b);
}
function addGameHint() {
  const hint = document.createElement("button");
  hint.className = "soft";
  hint.textContent = "💡 Pista de Nova";
  hint.onclick = () => {
    const g = currentGame;
    if (!g || g.finished) return;
    const round = g.deck[g.round];
    const text =
      g.id === "fraction"
        ? "El numerador " +
          round[0] +
          " indica cuántas partes colorear. El denominador " +
          round[1] +
          " es el total."
        : g.id === "shop"
          ? "Suma los precios de tus productos. Si te pasas, quita uno y prueba otra combinación."
          : g.id === "memory"
            ? "Lee una operación, calcula su resultado y recuerda dónde viste ese número."
            : round.hint;
    gameNotice("Nova: " + text);
    novaMood("thinking");
  };
  $("gameActions").append(hint);
}
function beginGame(kind) {
  const type = GAME_TYPES.find((x) => x.id === kind);
  if (!type) return;
  gameEpoch++;
  currentGame = {
    id: kind,
    grade: state.grade,
    round: 0,
    tries: 0,
    finished: false,
    score: 0,
    selected: new Set(),
    cards: [],
    open: [],
    busy: false,
    deck: createGameDeck(kind, state.grade),
  };
  state.gameRecords[state.grade + "-" + kind].plays++;
  save();
  view("gamePlay");
  $("gameTitle").textContent = type.title;
  $("gameTag").textContent = state.grade + ".º · Retos nuevos en cada partida";
  $("gameInstructions").textContent = gameHelp();
  $("gameMessage").textContent = "";
  $("gameActions").replaceChildren();
  $("gameArea").replaceChildren();
  $("gameNovaAvatar").innerHTML = NOVA_SVG;
  novaMood("normal");
  if (kind === "memory") setupMemory();
  else renderGameRound();
  $("gameTitle").focus();
}
function setupMemory() {
  currentGame.cards = shuffleGame(
    currentGame.deck.flatMap((pair, k) =>
      pair.map((text, side) => ({ pair: k, side, text, matched: false })),
    ),
  );
  $("gameCounter").textContent = "0 de 6 parejas · 0 turnos";
  const grid = document.createElement("div");
  grid.className = "memory-grid";
  currentGame.cards.forEach((card, i) => {
    const b = document.createElement("button");
    b.className = "memory-card";
    b.textContent = "✦";
    b.setAttribute("aria-label", "Carta " + (i + 1) + " oculta");
    b.onclick = () => flipCard(i);
    grid.append(b);
  });
  $("gameArea").append(grid);
  addGameHint();
}
function flipCard(i) {
  const g = currentGame;
  if (!g || g.finished || g.busy || g.open.includes(i) || g.cards[i].matched) return;
  const b = $("gameArea").querySelectorAll(".memory-card")[i],
    card = g.cards[i];
  g.open.push(i);
  b.textContent = card.text;
  b.classList.add("flipped");
  b.setAttribute("aria-label", card.text);
  if (g.open.length !== 2) return;
  g.tries++;
  const [a, c] = g.open;
  if (g.cards[a].pair === g.cards[c].pair) {
    g.cards[a].matched = g.cards[c].matched = true;
    g.open = [];
    g.score++;
    for (const k of [a, c]) {
      const el = $("gameArea").querySelectorAll(".memory-card")[k];
      el.classList.add("matched");
      el.disabled = true;
    }
    gameNotice("¡Pareja encontrada! " + g.cards[a].text + " y " + g.cards[c].text + ".");
    $("gameCounter").textContent = g.score + " de 6 parejas · " + g.tries + " turnos";
    if (g.score === 6) finishGame();
  } else {
    g.busy = true;
    gameNotice("No coinciden todavía. Recuerda sus posiciones y prueba otra pareja.");
    const epoch = gameEpoch;
    setTimeout(() => {
      if (epoch !== gameEpoch || currentGame !== g) return;
      for (const k of [a, c]) {
        const el = $("gameArea").querySelectorAll(".memory-card")[k];
        if (el) {
          el.textContent = "✦";
          el.classList.remove("flipped");
          el.setAttribute("aria-label", "Carta " + (k + 1) + " oculta");
        }
      }
      g.open = [];
      g.busy = false;
    }, 950);
    $("gameCounter").textContent = g.score + " de 6 parejas · " + g.tries + " turnos";
  }
}

function fractionTarget() {
  return currentGame.deck[currentGame.round];
}
function shopProducts() {
  return currentGame.deck[currentGame.round].products;
}
function renderGameRound() {
  const g = currentGame,
    round = g.deck[g.round];
  g.selected = new Set();
  g.selection = null;
  g.order = [];
  g.roundSolved = false;
  $("gameArea").replaceChildren();
  $("gameActions").replaceChildren();
  $("gameMessage").textContent = "";
  $("gameCounter").textContent = "Reto " + (g.round + 1) + " de 5 · A tu ritmo";
  if (["detective", "patterns", "order"].includes(g.id)) {
    renderQuestionGame(round);
  } else if (g.id === "fraction") {
    const [n, d] = round,
      h = document.createElement("h2");
    h.className = "game-target";
    h.textContent = "Construye " + n + "/" + d;
    $("gameArea").append(h);
    const p = document.createElement("p");
    p.textContent = "Colorea " + n + " de las " + d + " partes iguales.";
    $("gameArea").append(p);
    const grid = document.createElement("div");
    grid.className = "fraction-game";
    for (let i = 0; i < d; i++) {
      const b = document.createElement("button");
      b.className = "fraction-slice";
      b.textContent = i + 1;
      b.setAttribute("aria-label", "Porción " + (i + 1));
      b.setAttribute("aria-pressed", "false");
      b.onclick = () => {
        if (g.roundSolved) return;
        if (g.selected.has(i)) g.selected.delete(i);
        else g.selected.add(i);
        b.classList.toggle("chosen", g.selected.has(i));
        b.setAttribute("aria-pressed", String(g.selected.has(i)));
        $("selectionCount").textContent = g.selected.size + " de " + d + " partes coloreadas";
      };
      grid.append(b);
    }
    const count = document.createElement("p");
    count.id = "selectionCount";
    count.textContent = "0 de " + d + " partes coloreadas";
    count.setAttribute("role", "status");
    $("gameArea").append(grid, count);
  } else {
    const products = round.products;
    g.target = round.target;
    const h = document.createElement("h2");
    h.className = "game-target";
    h.textContent = "Compra por " + fmt(g.target) + " monedas";
    $("gameArea").append(h);
    const grid = document.createElement("div");
    grid.className = "shop-grid";
    products.forEach((p, i) => {
      const b = document.createElement("button");
      b.className = "product";
      b.setAttribute("aria-pressed", "false");
      b.innerHTML =
        '<span class="product-icon">' +
        p.icon +
        "</span><strong>" +
        p.name +
        "</strong><span>" +
        fmt(p.price) +
        " monedas</span>";
      b.onclick = () => {
        if (g.roundSolved) return;
        if (g.selected.has(i)) g.selected.delete(i);
        else g.selected.add(i);
        b.classList.toggle("chosen", g.selected.has(i));
        b.setAttribute("aria-pressed", String(g.selected.has(i)));
        $("cartTotal").textContent =
          "Tu compra: " +
          fmt([...g.selected].reduce((sum, k) => sum + products[k].price, 0)) +
          " monedas";
      };
      grid.append(b);
    });
    const total = document.createElement("p");
    total.id = "cartTotal";
    total.className = "cart-total";
    total.textContent = "Tu compra: 0 monedas";
    total.setAttribute("role", "status");
    $("gameArea").append(grid, total);
  }
  gameButton("Comprobar →", checkGameRound);
  addGameHint();
}
function renderQuestionGame(round) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = round.topic;
  const title = document.createElement("h2");
  title.className = "game-prompt";
  title.textContent = round.text;
  $("gameArea").append(tag, title);
  if (round.sequence) {
    const strip = document.createElement("div");
    strip.className = "sequence-strip";
    [...round.sequence, "?"].forEach((text) => {
      const item = document.createElement("span");
      item.textContent = text;
      strip.append(item);
    });
    $("gameArea").append(strip);
  } else if (round.visual) {
    const drawing = document.createElement("div");
    drawing.className = "visual game-question-visual";
    visual(drawing, round.visual);
    $("gameArea").append(drawing);
  }
  if (currentGame.id === "order") {
    renderOrdering(round);
    return;
  }
  const options = document.createElement("div");
  options.className = "quiz-options";
  round.choices.forEach((choice) => {
    const b = document.createElement("button");
    b.className = "quiz-choice";
    b.textContent = choice;
    b.setAttribute("aria-pressed", "false");
    b.onclick = () => {
      if (currentGame.roundSolved) return;
      currentGame.selection = choice;
      options.querySelectorAll("button").forEach((el) => {
        el.classList.toggle("chosen", el === b);
        el.setAttribute("aria-pressed", String(el === b));
      });
      gameNotice("Respuesta elegida. Pulsa Comprobar o cambia tu elección.");
    };
    options.append(b);
  });
  $("gameArea").append(options);
}
function renderOrdering(round) {
  const row = document.createElement("div");
  row.className = "order-answer";
  row.id = "orderAnswer";
  row.setAttribute("aria-live", "polite");
  $("gameArea").append(row);
  const options = document.createElement("div");
  options.className = "order-options";
  round.items.forEach((item, i) => {
    const b = document.createElement("button");
    b.className = "order-number";
    b.textContent = item.label;
    b.onclick = () => {
      if (currentGame.roundSolved || currentGame.order.includes(i)) return;
      currentGame.order.push(i);
      updateOrder();
    };
    options.append(b);
  });
  const controls = document.createElement("div");
  controls.className = "order-controls";
  for (const [label, fn] of [
    ["↶ Quitar último", () => currentGame.order.pop()],
    ["Empezar de nuevo", () => currentGame.order.splice(0)],
  ]) {
    const b = document.createElement("button");
    b.className = "soft";
    b.textContent = label;
    b.onclick = () => {
      if (currentGame.roundSolved) return;
      fn();
      updateOrder();
    };
    controls.append(b);
  }
  $("gameArea").append(options, controls);
  updateOrder();
}
function updateOrder() {
  const g = currentGame,
    round = g.deck[g.round];
  $("orderAnswer").replaceChildren();
  for (let i = 0; i < 4; i++) {
    const chip = document.createElement("span");
    chip.textContent = g.order[i] === undefined ? "☆" : round.items[g.order[i]].label;
    chip.setAttribute("aria-label", "Posición " + (i + 1) + ": " + chip.textContent);
    $("orderAnswer").append(chip);
  }
  $("gameArea")
    .querySelectorAll(".order-number")
    .forEach((b, i) => {
      b.disabled = g.order.includes(i);
      b.classList.toggle("chosen", b.disabled);
    });
}
function checkGameRound() {
  const g = currentGame;
  if (!g || g.finished || g.roundSolved) return;
  const round = g.deck[g.round];
  if (["detective", "patterns"].includes(g.id) && g.selection === null) {
    gameNotice("Elige una respuesta antes de comprobar. Nova puede darte una pista.");
    return;
  }
  if (g.id === "order" && g.order.length !== 4) {
    gameNotice(
      "Coloca los cuatro números antes de comprobar. Puedes quitar el último si quieres cambiarlo.",
    );
    return;
  }
  g.tries++;
  let correct;
  if (g.id === "fraction") correct = g.selected.size === round[0];
  else if (g.id === "shop")
    correct =
      Math.abs(
        [...g.selected].reduce((sum, i) => sum + round.products[i].price, 0) - round.target,
      ) < 0.00001;
  else if (g.id === "order")
    correct = g.order.every(
      (index, i) =>
        i === 0 ||
        (round.descending
          ? round.items[g.order[i - 1]].value > round.items[index].value
          : round.items[g.order[i - 1]].value < round.items[index].value),
    );
  else correct = g.selection === round.answer;
  if (correct) {
    g.roundSolved = true;
    g.score++;
    novaMood("happy");
    const explanation =
      g.id === "fraction"
        ? "Representaste " + round.join("/") + " correctamente."
        : g.id === "shop"
          ? "La suma coincide con " + fmt(round.target) + " monedas."
          : g.id === "order"
            ? "El orden es " + g.order.map((i) => round.items[i].label).join(" → ") + "."
            : round.explain;
    gameNotice("¡Bien! " + explanation);
    $("gameArea")
      .querySelectorAll("button")
      .forEach((b) => (b.disabled = true));
    gameButton(g.round === 4 ? "Completar juego 🏅" : "Siguiente reto →", () => {
      if (g.round === 4) finishGame();
      else {
        g.round++;
        novaMood("normal");
        renderGameRound();
        $("gameTitle").focus();
      }
    });
  } else {
    novaMood("thinking");
    const hint =
      g.id === "fraction"
        ? "Necesitas " + round[0] + " porciones coloreadas. Tienes " + g.selected.size + "."
        : g.id === "shop"
          ? "Revisa los precios y tu total. Puedes quitar productos y probar otra combinación."
          : round.hint;
    gameNotice("Vamos a intentarlo otra vez. " + hint + " No pierdes estrellas.");
  }
}
function finishGame() {
  const g = currentGame;
  if (!g || g.finished) return;
  g.finished = true;
  const key = g.grade + "-" + g.id,
    record = state.gameRecords[key],
    fresh = !state.gameAwards.includes(key);
  record.completed++;
  record.bestTries = record.bestTries ? Math.min(record.bestTries, g.tries) : g.tries;
  record.lastDate = today();
  if (fresh) state.gameAwards.push(key);
  recordActivity("game");
  save();
  novaMood("happy");
  $("gameCounter").textContent = "¡Juego completado!";
  gameNotice(
    "¡Buen trabajo! " +
      (fresh
        ? "Has ganado 25 estrellas. "
        : "Ya ganaste las estrellas de este juego; esta partida te ayudó a practicar. ") +
      g.tries +
      " " +
      (g.id === "memory" ? "turnos" : "comprobaciones") +
      ". Puedes ver tus estrellas en Mi progreso.",
  );
  gameButton("Ver mi progreso →", progressScreen);
  const again = document.createElement("button");
  again.className = "soft";
  again.textContent = "Jugar con nuevos retos";
  again.onclick = () => beginGame(g.id);
  $("gameActions").append(again);
}

/* ==========================================================
 09. PROGRESO Y RECOMENDACIONES
 Consejos concretos según el grado, avance, reintentos y pistas.
 ========================================================== */
function recommendationsFor(grade = state.grade) {
  syncGradeCatalog(grade);
  return W.map((w, order) => {
    const k = grade + "-" + w.id,
      n = state.progress[k] || 0,
      stats = state.topicStats[k] || { attempts: 0, correct: 0, hints: 0 };
    const retries = Math.max(0, stats.attempts - stats.correct);
    const needsSupport = retries >= 2 && retries / Math.max(1, stats.attempts) >= 0.25;
    const guided = !needsSupport && n < 5 && stats.hints >= 2;
    const rank = needsSupport ? 0 : guided ? 1 : n > 0 && n < 5 ? 2 : n === 0 ? 3 : 4;
    const reason = needsSupport
      ? "En este tema necesitaste varios intentos. Repasa el ejemplo y resuelve un ejercicio con Nova."
      : guided
        ? "Las pistas te han ayudado. Repasa los pasos y prueba el siguiente ejercicio a tu ritmo."
        : n > 0 && n < 5
          ? "Ya resolviste " + n + " de 5 ejercicios. Continúa desde el paso " + (n + 1) + "."
          : n === 0
            ? "Empieza por este tema para construir una base sólida."
            : "¡Completaste este tema! Vuelve a practicar para afianzar lo aprendido.";
    return {
      w,
      n,
      rank,
      order,
      reason,
      tip: PRACTICE_TIPS[w.id],
      needsSupport,
      guided,
      label: needsSupport
        ? "REPASAR CON NOVA"
        : guided
          ? "PRACTICAR CON PISTAS"
          : n > 0 && n < 5
            ? "CONTINUAR APRENDIENDO"
            : n === 0
              ? "COMENZAR PASO A PASO"
              : "AFIANZAR LO APRENDIDO",
    };
  })
    .sort((a, b) => a.rank - b.rank || (a.rank === 2 ? b.n - a.n : 0) || a.order - b.order)
    .slice(0, 3);
}

function startRecommended() {
  const rec = recommendationsFor()[0];
  closeNova(false);
  start(rec.w);
  $("title").focus();
}

function renderRecommendations() {
  const recs = recommendationsFor(),
    r = recs[0];
  $("recommendCards").replaceChildren();
  const card = document.createElement("article");
  card.className = "card compact-recommend";
  const avatar = document.createElement("div");
  avatar.className = "mini-avatar";
  avatar.innerHTML = NOVA_SVG;
  const copy = document.createElement("div");
  copy.className = "compact-recommend-copy";
  const tag = document.createElement("span");
  tag.className = "recommend-tag";
  tag.textContent = r.label;
  const title = document.createElement("h3");
  title.textContent = r.w.name;
  const note = document.createElement("p");
  note.className = "recommend-reason";
  note.textContent = r.reason;
  const tip = document.createElement("p");
  tip.className = "recommend-tip";
  tip.textContent = "💡 Practica esto: " + r.tip;
  const button = document.createElement("button");
  button.className = "recommend-start";
  button.textContent =
    r.n === 5 ? "Repasar con Nova →" : r.n > 0 ? "Continuar con Nova →" : "Practicar con Nova →";
  button.onclick = () => {
    start(r.w);
    $("title").focus();
    if (r.needsSupport || r.guided) $("novaUnderstand").click();
  };
  copy.append(tag, title, note, tip);
  card.append(avatar, copy, button);
  $("recommendCards").append(card);
  if (recs[1]) {
    const next = document.createElement("div");
    next.className = "recommend-next";
    const label = document.createElement("span");
    label.textContent = "Después puedes practicar:";
    const other = document.createElement("button");
    other.className = "text-button";
    other.textContent = recs[1].w.name + " →";
    other.onclick = () => {
      start(recs[1].w);
      $("title").focus();
    };
    next.append(label, other);
    $("recommendCards").append(next);
  }
}

function progressScreen() {
  view("progressView");
  $("progressGrade").value = state.grade;
  const prefix = state.grade + "-",
    solvedCount = state.awarded.filter((k) => k.startsWith(prefix)).length;
  const completedCount = state.done.filter((k) => k.startsWith(prefix)).length;
  const stars = solvedCount * 10 + state.gameAwards.filter((k) => k.startsWith(prefix)).length * 25;
  $("progressSummary").innerHTML =
    "<div><strong>" +
    solvedCount +
    " / 30</strong><span>Ejercicios</span></div><div><strong>" +
    completedCount +
    " / 6</strong><span>Temas</span></div><div><strong>" +
    stars +
    " ⭐</strong><span>Estrellas</span></div>";
  $("topicProgress").replaceChildren();
  for (const w of W) {
    const n = state.progress[state.grade + "-" + w.id] || 0,
      row = document.createElement("button");
    row.className = "topic-mini";
    row.innerHTML =
      '<span class="topic-mini-top"><span class="topic-mini-name">' +
      w.name +
      "</span><strong>" +
      n +
      '/5</strong></span><progress value="' +
      n +
      '" max="5" aria-label="' +
      w.name +
      ": " +
      n +
      ' de 5"></progress><span class="topic-status">' +
      (n === 5 ? "✓ Completado · repasar" : n ? "En práctica · continuar" : "Por empezar") +
      "</span>";
    row.setAttribute(
      "aria-label",
      w.name + ", " + n + " de 5 ejercicios. " + (n === 5 ? "Repasar" : "Practicar"),
    );
    row.onclick = () => {
      start(w);
      $("title").focus();
    };
    $("topicProgress").append(row);
  }
  renderRecommendations();
}

/* ==========================================================
   10. NOVA: GUÍA ESCRITA Y ACOMPAÑAMIENTO
   Explica los temas, ofrece pistas y orienta al estudiante por todas las secciones.
   ========================================================== */

function guideAction(label, fn, secondary = false) {
  const b = document.createElement("button");
  b.textContent = label;
  if (secondary) b.className = "soft";
  b.onclick = fn;
  $("novaGuideActions").append(b);
}

function closeNova(restore = true) {
  $("novaPanel").classList.add("hidden");
  $("novaHelp").setAttribute("aria-expanded", "false");
  if (restore) $("novaHelp").focus();
}

function openNova(tour = false) {
  novaTour = tour ? 0 : -1;
  paintNovaGuide();
  $("novaPanel").classList.remove("hidden");
  $("novaHelp").setAttribute("aria-expanded", "true");
  $("novaClose").focus();
}

function showNovaCoach(title, text, example = "") {
  $("novaCoachTitle").textContent = title;
  $("novaCoachText").textContent = text;
  $("novaCoachExample").textContent = example;
  $("novaCoachExample").classList.toggle("hidden", !example);
  $("novaCoach").classList.remove("hidden");
  $("novaCoach").focus();
}

function novaUnderstandingText() {
  const x = questions()[index],
    g = state.grade,
    w = active.id;
  if (w === "op")
    return g === 6
      ? "En las potencias, el número grande es la base y el pequeño indica cuántas veces se multiplica por sí misma. Por ejemplo, 2³ no es 2 × 3: es 2 × 2 × 2. En una expresión, mira primero los paréntesis y luego las potencias."
      : g === 5
        ? "Los paréntesis forman un pequeño grupo que resolvemos primero. Después hacemos multiplicaciones y divisiones; al final, sumas y restas. Puedes escribir un resultado intermedio para no hacer todos los pasos de memoria."
        : "Sumar junta cantidades; restar descubre cuánto queda. Multiplicar reúne grupos iguales y dividir reparte por igual. Mira el signo para saber qué acción necesitas.";
  if (w === "fr")
    return /porcentaje|%/i.test(x.text)
      ? "Un porcentaje indica cuántas partes tomamos de cada 100. El 50 % es la mitad y el 25 % es un cuarto. Para calcular un porcentaje, puedes usar su fracción equivalente y después aplicarla a la cantidad."
      : g === 4
        ? "Imagina una pizza cortada en partes del mismo tamaño. El número de abajo dice cuántas partes hay en total; el de arriba dice cuántas tomamos. Para comparar partes, comprueba primero que tengan el mismo tamaño."
        : "Dos fracciones equivalentes representan la misma cantidad aunque se escriban de otra forma. Multiplicar o dividir ambos números por el mismo valor conserva la cantidad. Para sumar o restar, primero necesitas partes del mismo tamaño.";
  if (w === "ge")
    return /volumen/i.test(x.text)
      ? "El volumen cuenta el espacio que cabe dentro de un cuerpo. En un cubo hay filas, columnas y capas: por eso multiplicamos lado × lado × lado. La unidad lleva un 3, como cm³."
      : /perímetro/i.test(x.text)
        ? "El perímetro es el camino alrededor de la figura. Imagina que pones una cinta por todo su borde: suma cada lado una vez. En un rectángulo, los lados opuestos tienen la misma longitud."
        : /área/i.test(x.text)
          ? "El área mide la superficie que cubrimos, como el suelo de una habitación. En un rectángulo multiplicamos el número de columnas por el de filas: base × altura. La unidad lleva un 2, como cm²."
          : "Mira los lados y las esquinas de la figura. Un triángulo tiene tres lados y un cuadrado tiene cuatro iguales. Un ángulo recto es una esquina como la de una hoja y mide 90 grados.";
  if (w === "de")
    return /redondea/i.test(x.text)
      ? "Redondear es escribir un número cercano con menos cifras. Mira la cifra justo después de la posición que quieres conservar: si es 5 o más, aumenta una; si es menor que 5, déjala igual."
      : g === 4
        ? "La coma separa las unidades de sus partes. En 2,7 hay dos unidades y siete décimas. Diez décimas forman una unidad; al comparar, mira primero las unidades y luego las décimas."
        : g === 5
          ? "Después de la coma vienen décimas y centésimas. En 1,25 hay una unidad, dos décimas y cinco centésimas. Puedes añadir un cero al final sin cambiar el valor: 1,2 = 1,20."
          : "Décimas, centésimas y milésimas son partes cada vez más pequeñas. Multiplicar por 0,5 es tomar la mitad; dividir por 0,5 es contar cuántas mitades caben. Comprueba si tu resultado tiene un tamaño razonable.";
  if (w === "me")
    return /m²/.test(x.text)
      ? "Una superficie tiene dos dimensiones. Un metro mide 100 cm en cada dirección, así que un metro cuadrado tiene 100 × 100 = 10 000 cm². No usamos el mismo factor que para una longitud."
      : "Las unidades son distintas formas de medir la misma cantidad. Una unidad grande contiene varias pequeñas: 1 m contiene 100 cm y 1 hora contiene 60 minutos. Busca la equivalencia; multiplica para pasar a unidades pequeñas y divide para pasar a unidades grandes.";
  return g === 6
    ? "En una proporción, si una cantidad se multiplica por un factor, la otra cambia de la misma forma. A veces conviene encontrar primero lo que corresponde a una unidad. En un descuento, calcula cuánto se rebaja y réstalo del precio original."
    : "Lee el problema y separa tres cosas: los datos que tienes, lo que te preguntan y la operación que conecta ambos. Si hay varios pasos, escribe cada resultado intermedio. Al terminar, comprueba las unidades y si la respuesta tiene sentido.";
}

function novaMessage(text) {
  lastNovaMessage = text;
  if ($("novaMissionText")) $("novaMissionText").textContent = text;
  if (!$("novaPanel").classList.contains("hidden") && novaTour === -1) paintNovaGuide();
  novaMood(
    /Buen trabajo|conseguiste|completad/i.test(text)
      ? "happy"
      : /pista|pequeño|intenta/i.test(text)
        ? "thinking"
        : "normal",
  );
}

function novaMood(mood) {
  document.querySelectorAll("svg[data-nova]").forEach((svg) => {
    svg.setAttribute("data-mood", mood);
    if (!svg.getAttribute("data-fixed-pose"))
      svg.setAttribute("viewBox", mood === "happy" ? "0 773 253 307" : "813 122 265 283");
  });
}

function contextMessage() {
  if (novaView === "home") {
    const r = recommendationsFor()[0];
    return (
      "¡Hola! Soy Nova. Primero selecciona 4.º, 5.º o 6.º en las tarjetas. En el menú están Temas, Juegos, Mi progreso y Mis logros. Para " +
      state.grade +
      ".º te recomiendo " +
      r.w.name +
      ". " +
      r.reason
    );
  }

  if (novaView === "topics")
    return (
      state.grade +
      ".º: " +
      CURRICULUM[state.grade].intro +
      " Sigue los pasos del 1 al 6 o elige un tema para repasar. Te acompañaré con explicaciones, pistas y práctica sencilla."
    );

  if (novaView === "progressView") {
    const r = recommendationsFor()[0];
    return (
      "Aquí ves tu avance de " +
      state.grade +
      ".º. Te recomiendo " +
      r.w.name +
      ". " +
      r.reason +
      " Mi consejo: " +
      r.tip +
      " Pulsa «Practicar con Nova» o «Continuar con Nova». También puedes elegir otro tema en las barras."
    );
  }

  if (novaView === "games")
    return "Elige tu grado y uno de los seis juegos. Hay parejas, fracciones, compras, preguntas variadas, patrones y ordenación. En cada partida cambian los retos. Puedes pedir una pista de Nova. Las estrellas se ganan una vez por juego y grado.";
  if (novaView === "gamePlay") return gameHelp();
  if (novaView === "achievements")
    return "Aquí ves las dieciocho insignias de los seis temas y tres grados. Se consiguen al terminar las misiones. Si no sabes qué seguir practicando, abre las recomendaciones de Mi progreso.";
  if (novaView === "result")
    return "¡Misión completada! Tus estrellas y tu insignia ya están guardadas. Puedes volver a Temas o consultar qué te recomiendo practicar después.";
  return (
    lastNovaMessage ||
    "Lee el ejemplo, observa el dibujo y elige una respuesta. Pídeme una pista si lo necesitas. No pierdes estrellas por equivocarte."
  );
}

function paintNovaGuide() {
  $("novaGuideActions").replaceChildren();
  $("novaTourDots").classList.toggle("hidden", novaTour < 0);
  if (novaTour >= 0) {
    novaTour = Math.min(novaTour, 4);
    $("novaGuideMessage").textContent = NOVA_TOUR[novaTour];
    $("novaTourDots").innerHTML = [0, 1, 2, 3, 4]
      .map((i) => '<span class="' + (i <= novaTour ? "on" : "") + '"></span>')
      .join("");
    guideAction(novaTour < 4 ? "Siguiente →" : "Ver mis temas →", () => {
      if (novaTour < 4) {
        novaTour++;
        paintNovaGuide();
        document.querySelector("#novaGuideActions button").focus();
      } else {
        closeNova(false);
        topicsPage();
        $("grade").focus();
      }
    });
    if (novaTour > 0)
      guideAction(
        "← Paso anterior",
        () => {
          novaTour--;
          paintNovaGuide();
          document.querySelector("#novaGuideActions button").focus();
        },
        true,
      );
    return;
  }
  $("novaGuideMessage").textContent = contextMessage();
  if (novaView === "mission") {
    if (solved)
      guideAction(index === 4 ? "Ver mi logro" : "Siguiente paso", () => {
        closeNova(false);
        $("next").click();
      });
    else {
      guideAction("💡 Ayúdame con una pista", () => {
        closeNova(false);
        $("hint").click();
        $("hintText").tabIndex = -1;
        $("hintText").focus();
      });
    }
    guideAction(
      "Volver a temas",
      () => {
        closeNova(false);
        topicsPage();
      },
      true,
    );
  } else if (novaView === "gamePlay") {
    if (currentGame && currentGame.finished)
      guideAction("Ver mi progreso", () => {
        closeNova(false);
        progressScreen();
      });
    else
      guideAction("Continuar el juego", () => {
        closeNova(false);
        const b = $("gameArea").querySelector("button:not(:disabled)");
        if (b) b.focus();
      });
    guideAction(
      "Elegir otro juego",
      () => {
        closeNova(false);
        gameEpoch++;
        gameList();
      },
      true,
    );
  } else if (novaView === "games") {
    guideAction("Jugar a parejas numéricas", () => {
      closeNova(false);
      beginGame("memory");
    });
    guideAction(
      "Ver todos los temas",
      () => {
        closeNova(false);
        topicsPage();
      },
      true,
    );
  } else if (novaView === "achievements" || novaView === "result") {
    guideAction("Ver recomendaciones", () => {
      closeNova(false);
      progressScreen();
    });
    guideAction(
      "Volver a temas",
      () => {
        closeNova(false);
        topicsPage();
      },
      true,
    );
  } else {
    guideAction("Practicar mi recomendación", startRecommended);
    guideAction(
      novaView === "topics" ? "Ver mi progreso" : "Ver los temas",
      () => {
        closeNova(false);
        novaView === "topics" ? progressScreen() : topicsPage();
      },
      true,
    );
    if (novaView === "home")
      guideAction(
        "Muéstrame el recorrido",
        () => {
          novaTour = 0;
          paintNovaGuide();
          document.querySelector("#novaGuideActions button").focus();
        },
        true,
      );
  }
}

/* ==========================================================
   11. PREPARACIÓN VISUAL
   Inserta el avatar, los iconos y los paneles de ayuda sin servicios externos.
   ========================================================== */

function prepareInterface() {
  document.querySelectorAll(".nova-inline .mini-avatar").forEach((el) => (el.innerHTML = NOVA_SVG));
  for (const [id, title, text] of [
    [
      "topics",
      "Elige una aventura",
      "Selecciona tu grado y un tema. Lee el ejemplo antes de responder; yo te ayudaré con las pistas.",
    ],
    [
      "games",
      "Practiquemos jugando",
      "Elige tu grado y un juego. Los seis juegos tienen retos variados para tu grado. No tienes que correr: puedes pedir pistas y probar de nuevo.",
    ],

    [
      "achievements",
      "Celebremos tus avances",
      "Cada insignia representa una misión terminada. Sigue practicando a tu ritmo.",
    ],
  ]) {
    const banner = document.createElement("div");
    banner.className = "nova-section";
    const avatar = document.createElement("div");
    avatar.className = "mini-avatar";
    avatar.innerHTML = NOVA_SVG;
    const copy = document.createElement("div");
    const h = document.createElement("strong");
    h.textContent = "Nova · " + title;
    const p = document.createElement("p");
    p.textContent = text;
    copy.append(h, p);
    const b = document.createElement("button");
    b.className = "soft";
    b.textContent = "Guíame";
    b.onclick = () => openNova();
    banner.append(avatar, copy, b);
    $(id).prepend(banner);
  }
  document.querySelector("#topics .nova-section p").textContent =
    "Cada grado tiene seis temas propios. Sigue el recorrido o vuelve a practicar; puedo explicarte cada paso.";
  const toolbox = document.createElement("div");
  toolbox.className = "nova-toolbox";
  toolbox.innerHTML =
    '<strong>¿Cómo te ayudo?</strong><div class="nova-tool-actions"><button id="novaUnderstand" class="soft">📖 Entender el tema</button><button id="novaOneStep" class="soft">💡 Muéstrame un paso</button><button id="novaSimpler" class="soft">🌱 Algo más sencillo</button></div><div id="novaCoach" class="nova-coach hidden" tabindex="-1" role="status" aria-live="polite"><h3 id="novaCoachTitle"></h3><p id="novaCoachText"></p><p id="novaCoachExample"></p></div>';
  $("mission").querySelector(".nova-inline").after(toolbox);
  $("back").textContent = "← Volver a temas";
  for (const grade of [4, 5, 6]) {
    $("course" + grade).querySelector(".course-picture").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' +
      COURSE_ART[grade] +
      '" aria-hidden="true"><use href="#nova-art-image"/></svg>';
  }
  for (const [id, path] of Object.entries(NAV_ICONS))
    $(id).querySelector("span").innerHTML =
      '<svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      path +
      "</svg>";
}

/* ==========================================================
   12. EVENTOS E INICIO
   Conecta botones y selectores; recupera el progreso y abre la página de inicio.
   ========================================================== */

function bindEvents() {
  $("hint").onclick = showHint;
  $("next").onclick = () => {
    if (!solved) return;
    if (index < 4) {
      index++;
      render();
      $("title").focus();
    } else {
      view("result");
      $("resultText").textContent =
        "Has completado " +
        active.name +
        " de " +
        state.grade +
        ".º y ganado " +
        sessionStars +
        " estrellas nuevas en esta sesión.";
      $("resultBadge").textContent = active.icon + " " + active.badge;
    }
  };
  $("continue").onclick = startRecommended;
  $("grade").onchange = () => {
    state.grade = Number($("grade").value);
    save();
    topicsPage();
  };
  $("back").onclick = topicsPage;
  $("navHome").onclick = home;
  $("return").onclick = topicsPage;
  $("navAchievements").onclick = achievements;
  $("novaHelp").onclick = () => {
    $("novaPanel").classList.contains("hidden") ? openNova() : closeNova();
  };
  $("novaClose").onclick = () => closeNova();
  $("tourLaunch").onclick = () => openNova(true);
  $("navGames").onclick = gameList;
  $("navProgress").onclick = progressScreen;
  $("gamesGrade").onchange = () => {
    state.grade = Number($("gamesGrade").value);
    save();
    gameList();
  };
  $("progressGrade").onchange = () => {
    state.grade = Number($("progressGrade").value);
    save();
    progressScreen();
  };
  $("gameBack").onclick = () => {
    gameEpoch++;
    gameList();
  };
  $("navTopics").onclick = topicsPage;
  $("goTopics").onclick = topicsPage;
  $("goGames").onclick = gameList;
  $("goProgress").onclick = progressScreen;
  $("homePractice").onclick = startRecommended;
  $("homeChooseGrade").onclick = () => {
    topicsPage();
    $("grade").focus();
  };
  $("achievementRecommendations").onclick = progressScreen;
  $("novaUnderstand").onclick = () => {
    const x = questions()[index];
    showNovaCoach("Nova te lo explica", novaUnderstandingText(), x.example);
    novaMessage(
      "Lo explicamos con palabras sencillas. Puedes leer la explicación, pedirme un paso o practicar algo más fácil antes de volver al ejercicio.",
    );
  };
  $("novaOneStep").onclick = () => {
    const x = questions()[index];
    if (solved) {
      showNovaCoach("Revisemos cómo lo resolviste", x.explain);
      return;
    }
    $("hint").click();
    showNovaCoach(
      hints === 1 ? "Un primer paso" : "Los pasos completos",
      hints === 1 ? x.hint : x.explain,
    );
    $("novaOneStep").textContent = hints === 1 ? "💡 Muéstrame otro paso" : "💡 Revisar los pasos";
  };
  $("novaSimpler").onclick = () => {
    support();
    novaMessage(
      "Practiquemos algo más sencillo. No pierdes estrellas. Cuando estés listo, vuelve al ejercicio principal.",
    );
    $("support").scrollIntoView({ behavior: "auto", block: "center" });
    const b = $("supportAnswers").querySelector("button:not(:disabled)");
    if (b) b.focus();
  };
  $("profileGrade").onchange = () => selectCourse(Number($("profileGrade").value));
  $("activityContinue").onclick = startRecommended;
  $("homeAchievements").onclick = achievements;
  $("sidebarGuide").onclick = () => openNova();
  for (const grade of [4, 5, 6]) $("course" + grade).onclick = () => selectCourse(grade);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("novaPanel").classList.contains("hidden")) closeNova();
  });
}

loadProgress();
prepareInterface();
bindEvents();
save();
home();
