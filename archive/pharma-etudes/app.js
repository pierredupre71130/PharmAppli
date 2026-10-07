const $ = (sel, el = document) => el.querySelector(sel);
const app = $("#app");
const statsKey = "pharmaetudes-stats";

const stats = JSON.parse(localStorage.getItem(statsKey) || '{"seen":{},"qCorrect":0,"qTotal":0}');
function saveStats() { localStorage.setItem(statsKey, JSON.stringify(stats)); }

const CATEGORIES = [
  { id: "pharmaco", label: "Pharmaco générale", short: "Pharmaco", icon: "🧪", tone: "t-blue", get: () => PHARMA_DATA.pharmacoGenerale, kind: "concept" },
  { id: "physio", label: "Physiologie", short: "Physio", icon: "🫀", tone: "t-rose", get: () => PHARMA_DATA.physiologie, kind: "concept" },
  { id: "biochimie", label: "Biochimie", short: "Biochimie", icon: "🧬", tone: "t-violet", get: () => PHARMA_DATA.biochimie, kind: "concept" },
  { id: "medicaments", label: "Médicaments (DCI)", short: "Médicaments", icon: "💊", tone: "t-green", get: () => PHARMA_DATA.drugs, kind: "drug" }
];
const catById = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];

const Q_FILTERS = [
  { id: "fond", label: "Fondamentaux", test: (q) => q.module !== "dci" },
  { id: "dci", label: "Médicaments", test: (q) => q.module === "dci" },
  { id: "all", label: "Tout", test: () => true }
];

let state = {
  view: "home",
  coursCategory: "pharmaco",
  itemId: null,
  filter: "",
  qFilter: "fond",
  qIndex: 0,
  answered: false,
  caseId: null
};

document.querySelectorAll(".nav button").forEach((btn) => {
  btn.addEventListener("click", () => go(btn.dataset.view));
});

function render() {
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
  const views = { home, cours, qcm, calculs, stage };
  (views[state.view] || home)();
  app.scrollTop = 0;
}

function go(view, extra = {}) {
  state = { ...state, view, itemId: null, caseId: null, answered: false, filter: "", ...extra };
  render();
}

function totalCoursCount() {
  return CATEGORIES.reduce((n, c) => n + c.get().length, 0);
}

function home() {
  const acc = stats.qTotal ? Math.round((100 * stats.qCorrect) / stats.qTotal) : 0;
  const seen = Object.keys(stats.seen || {}).length;
  app.innerHTML = `
    <section class="hero">
      <p class="kicker">Étudiant pharmacie</p>
      <span class="level-badge">DFGSP2 · Fondamentaux</span>
      <h1>PharmAppli</h1>
      <p>Réviser un concept, une DCI ou un calcul en 30 secondes.</p>
      <div class="stats">
        <div class="stat"><b>${totalCoursCount()}</b><span>fiches</span></div>
        <div class="stat"><b>${acc}%</b><span>QCM</span></div>
        <div class="stat"><b>${seen}</b><span>vues</span></div>
      </div>
    </section>
    <input class="search" id="qsearch" placeholder="Rechercher une molécule…" />
    <div class="menu">
      <button class="tile" data-go="cours" data-cat="pharmaco">
        <div class="icon t-blue">🧪</div>
        <div><h3>Cours &amp; fondamentaux</h3><p>Pharmaco, physio, biochimie, médicaments</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="qcm">
        <div class="icon t-green">📝</div>
        <div><h3>QCM express</h3><p>Questions + correction, par thème</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="calculs">
        <div class="icon t-amber">➗</div>
        <div><h3>Calculs</h3><p>Délivrance, dose, débit</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="stage">
        <div class="icon t-rose">🩺</div>
        <div><h3>Cas de stage</h3><p>Bonus — situations de comptoir</p></div>
        <div class="chev">›</div>
      </button>
    </div>
    <h2>Suffixes</h2>
    <div class="chips">
      ${PHARMA_DATA.suffixes.map((s) => `<div class="chip"><b>${s.stem}</b> ${s.classe}</div>`).join("")}
    </div>
    <p class="disclaimer">Contenu pédagogique indépendant, à visée d'entraînement uniquement — ne remplace pas le RCP officiel ni un avis professionnel. Les noms de marque cités sont des marques déposées de leurs titulaires respectifs ; cet outil n'est affilié à aucun laboratoire.</p>
  `;
  app.querySelectorAll("[data-go]").forEach((el) => el.onclick = () => go(el.dataset.go, el.dataset.cat ? { coursCategory: el.dataset.cat } : {}));
  $("#qsearch").addEventListener("input", (e) => {
    const t = e.target.value.trim();
    if (t.length > 1) go("cours", { coursCategory: "medicaments", filter: t });
  });
}

function cours() {
  if (state.itemId) return coursDetail(state.itemId);
  const cat = catById(state.coursCategory);
  const f = state.filter.toLowerCase();
  const items = cat.get().filter((it) => {
    if (!f) return true;
    const haystack = cat.kind === "drug"
      ? [it.dci, it.princeps, it.classe, it.tags.join(" ")].join(" ")
      : [it.titre, it.resume].join(" ");
    return haystack.toLowerCase().includes(f);
  });
  app.innerHTML = `
    <h2>Cours</h2>
    <div class="tabs">
      ${CATEGORIES.map((c) => `<button class="tab ${c.id === cat.id ? "active" : ""}" data-cat="${c.id}">${c.icon} ${c.short}</button>`).join("")}
    </div>
    <input class="search" id="qsearch" value="${state.filter}" placeholder="Filtrer dans « ${cat.label} »…" />
    <div class="list">
      ${items.map((it) => cat.kind === "drug" ? `
        <div class="row" data-id="${it.id}">
          <div><strong>${it.dci}</strong><br><small>${it.princeps} • ${it.classe}</small></div>
          <span class="badge">${it.atc}</span>
        </div>` : `
        <div class="row" data-id="${it.id}">
          <div><strong>${it.titre}</strong><br><small>${it.resume}</small></div>
          <span class="chev">›</span>
        </div>`).join("") || "<p>Aucun résultat.</p>"}
    </div>`;
  app.querySelectorAll(".tab").forEach((el) => el.onclick = () => go("cours", { coursCategory: el.dataset.cat }));
  $("#qsearch").oninput = (e) => { state.filter = e.target.value; cours(); };
  app.querySelectorAll("[data-id]").forEach((el) => el.onclick = () => { state.itemId = el.dataset.id; render(); });
}

function coursDetail(id) {
  const cat = catById(state.coursCategory);
  const it = cat.get().find((x) => x.id === id);
  stats.seen[id] = true; saveStats();
  if (cat.kind === "drug") {
    app.innerHTML = `
      <button class="btn ghost" id="back">← Retour</button>
      <h2>${it.dci}</h2>
      <div class="meta">${it.princeps} • ${it.classe} • ${it.atc}</div>
      ${block("Mécanisme", it.moa)}
      ${block("Indications", it.indications)}
      ${block("Posologie type", it.posologie)}
      ${block("Contre-indications", it.ci)}
      ${block("Effets indésirables", it.ei)}
      ${block("Interactions", it.interactions)}
      ${block("Surveillance", it.surveillance)}
      ${block("Conseil officinal", it.conseil)}
    `;
  } else {
    app.innerHTML = `
      <button class="btn ghost" id="back">← Retour</button>
      <span class="badge cat-badge ${cat.tone}">${cat.icon} ${cat.short}</span>
      <h2>${it.titre}</h2>
      <p class="meta">${it.resume}</p>
      <div class="section">
        <h3>À retenir</h3>
        <ul class="clean">${it.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
      <div class="piege"><b>⚠️ Piège fréquent</b><p>${it.piege}</p></div>
    `;
  }
  $("#back").onclick = () => { state.itemId = null; render(); };
}
const block = (t, c) => `<div class="section"><h3>${t}</h3><div>${c}</div></div>`;

function qcm() {
  const filt = Q_FILTERS.find((f) => f.id === state.qFilter) || Q_FILTERS[0];
  const qs = PHARMA_DATA.questions.filter(filt.test);
  app.innerHTML = qcmShell(qs);
  app.querySelectorAll(".tab").forEach((el) => el.onclick = () => {
    state.qFilter = el.dataset.f; state.qIndex = 0; state.answered = false; render();
  });
  if (state.qIndex >= qs.length) {
    const restart = $("#restart");
    if (restart) restart.onclick = () => { state.qIndex = 0; state.answered = false; render(); };
    return;
  }
  const q = qs[state.qIndex];
  app.querySelectorAll(".choice").forEach((btn) => btn.onclick = () => {
    if (state.answered) return;
    state.answered = true;
    const i = +btn.dataset.i;
    stats.qTotal++; if (i === q.a) stats.qCorrect++; saveStats();
    app.querySelectorAll(".choice").forEach((b) => {
      const j = +b.dataset.i;
      if (j === q.a) b.classList.add("ok");
      if (j === i && i !== q.a) b.classList.add("ko");
    });
    $("#fb").textContent = q.exp;
    $("#next").classList.remove("hidden");
  });
  const next = $("#next");
  if (next) next.onclick = () => { state.qIndex++; state.answered = false; render(); };
}

function qcmShell(qs) {
  const tabs = `<div class="tabs">${Q_FILTERS.map((f) => `<button class="tab ${f.id === state.qFilter ? "active" : ""}" data-f="${f.id}">${f.label}</button>`).join("")}</div>`;
  if (!qs.length) return `<h2>QCM</h2>${tabs}<p>Aucune question dans cette catégorie.</p>`;
  if (state.qIndex >= qs.length) {
    return `<h2>QCM</h2>${tabs}<div class="card"><h2>Série terminée</h2><p>Score global : ${stats.qCorrect} / ${stats.qTotal}</p>
      <button class="btn primary" id="restart">Recommencer cette série</button></div>`;
  }
  const q = qs[state.qIndex];
  return `
    <h2>QCM</h2>
    ${tabs}
    <p class="meta">${q.theme} • ${state.qIndex + 1} / ${qs.length}</p>
    <div class="card">
      <p style="font-size:1.05rem">${q.q}</p>
      <div class="choices">
        ${q.choices.map((c, i) => `<button class="choice" data-i="${i}">${c}</button>`).join("")}
      </div>
      <div class="feedback" id="fb"></div>
      <div style="margin-top:12px"><button class="btn primary hidden" id="next">Question suivante</button></div>
    </div>`;
}

function calculs() {
  app.innerHTML = `
    <h2>Calculs officinaux</h2>
    <div class="card calc-grid">
      <h3>Délivrance</h3>
      <label>Dose unitaire (mg)<input type="number" id="du" value="500"></label>
      <label>Dose par prise (mg)<input type="number" id="dp" value="1000"></label>
      <label>Prises / jour<input type="number" id="pj" value="3"></label>
      <label>Durée (jours)<input type="number" id="dj" value="7"></label>
      <div class="result" id="r1">—</div>
    </div>
    <div class="card calc-grid" style="margin-top:12px">
      <h3>Dose / poids</h3>
      <label>Dose (mg/kg)<input type="number" id="mk" value="15"></label>
      <label>Poids (kg)<input type="number" id="kg" value="12"></label>
      <label>Prises / jour<input type="number" id="pp" value="3"></label>
      <div class="result" id="r2">—</div>
    </div>
    <div class="card calc-grid" style="margin-top:12px">
      <h3>Débit de perfusion</h3>
      <label>Volume (mL)<input type="number" id="vol" value="500"></label>
      <label>Durée (heures)<input type="number" id="hrs" value="8"></label>
      <div class="result" id="r3">—</div>
    </div>`;
  const upd = () => {
    const units = (+$("#dp").value / +$("#du").value) * +$("#pj").value * +$("#dj").value;
    $("#r1").textContent = Number.isFinite(units) ? `${Math.ceil(units)} unités à délivrer` : "—";
    const day = +$("#mk").value * +$("#kg").value;
    const per = day / +$("#pp").value;
    $("#r2").textContent = Number.isFinite(per) ? `${day} mg/j • ${per.toFixed(1)} mg / prise` : "—";
    const mlh = +$("#vol").value / +$("#hrs").value;
    $("#r3").textContent = Number.isFinite(mlh) ? `${mlh.toFixed(1)} mL/h` : "—";
  };
  app.querySelectorAll("input").forEach((i) => i.oninput = upd);
  upd();
}

function stage() {
  if (state.caseId) return cas(state.caseId);
  app.innerHTML = `
    <h2>Mode stage — cas comptoir</h2>
    <p class="meta">Bonus DFASP : essaie de répondre à voix haute, puis révèle les points clés.</p>
    <div class="list">
      ${PHARMA_DATA.cases.map((c) => `
        <div class="row" data-id="${c.id}">
          <div><strong>${c.titre}</strong><br><small>${c.enonce.slice(0, 90)}…</small></div>
        </div>`).join("")}
    </div>`;
  app.querySelectorAll("[data-id]").forEach((el) => el.onclick = () => { state.caseId = el.dataset.id; render(); });
}

function cas(id) {
  const c = PHARMA_DATA.cases.find((x) => x.id === id);
  app.innerHTML = `
    <button class="btn ghost" id="back">← Tous les cas</button>
    <h2>${c.titre}</h2>
    <div class="card"><p>${c.enonce}</p><p><strong>${c.question}</strong></p>
      <button class="btn primary" id="rev">Révéler les points clés</button>
      <ul class="clean hidden" id="pts">${c.points.map((p) => `<li>${p}</li>`).join("")}</ul>
    </div>`;
  $("#back").onclick = () => { state.caseId = null; render(); };
  $("#rev").onclick = () => $("#pts").classList.toggle("hidden");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
  let refreshed = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshed) return;
    refreshed = true;
    window.location.reload();
  });
}
render();
