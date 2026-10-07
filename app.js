const $ = (sel, el = document) => el.querySelector(sel);
const app = $("#app");
const D = window.IFSI_DATA;
const statsKey = "ifsi-stats";

function loadStats() {
  try {
    const s = JSON.parse(localStorage.getItem(statsKey) || "{}");
    return { seen: {}, mastered: {}, notes: {}, q: {}, sem: {}, ...s };
  } catch (e) {
    return { seen: {}, mastered: {}, notes: {}, q: {}, sem: {} };
  }
}
const stats = loadStats();
function saveStats() {
  try { localStorage.setItem(statsKey, JSON.stringify(stats)); } catch (e) { /* stockage indisponible */ }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ueById = (id) => D.ues.find((u) => u.id === id);
const fichesOf = (ueId) => D.fiches.filter((f) => f.ue === ueId);
const ficheById = (id) => D.fiches.find((f) => f.id === id);
const masteredCount = (ueId) => fichesOf(ueId).filter((f) => stats.mastered[f.id]).length;

// Le référentiel national ne fixe pas la répartition par semestre : chaque étudiante
// range elle-même ses UE en S1 / S2 selon le planning de son IFSI (stocké sur l'appareil).
const SEM_FILTERS = [
  { id: "all", label: "Toutes les UE", test: () => true },
  { id: "S1", label: "Mon S1", test: (u) => stats.sem[u.id] === "S1" },
  { id: "S2", label: "Mon S2", test: (u) => stats.sem[u.id] === "S2" }
];
const semFilter = () => SEM_FILTERS.find((f) => f.id === state.semFilter) || SEM_FILTERS[0];
const visibleUes = () => D.ues.filter(semFilter().test);

let state = { view: "home", annee: 1, semFilter: "all", ueId: null, ficheId: null, search: "", qUe: "all", qList: null, qIndex: 0, qScore: 0, answered: false };

document.querySelectorAll(".nav button").forEach((btn) => {
  btn.addEventListener("click", () => go(btn.dataset.view));
});

function render() {
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
  const views = { home, cours, qcm, calculs, lexique };
  (views[state.view] || home)();
  window.scrollTo(0, 0);
}

function go(view, extra = {}) {
  state = { ...state, view, ueId: null, ficheId: null, qList: null, qIndex: 0, qScore: 0, answered: false, ...extra };
  render();
}

// ───────────── Accueil ─────────────
function home() {
  const ues = visibleUes();
  const total = D.fiches.length;
  const mastered = Object.keys(stats.mastered).filter((k) => stats.mastered[k]).length;
  const qAll = Object.values(stats.q).reduce((a, s) => ({ c: a.c + s.c, t: a.t + s.t }), { c: 0, t: 0 });
  const acc = qAll.t ? Math.round((100 * qAll.c) / qAll.t) : 0;
  app.innerHTML = `
    <section class="hero">
      <p class="kicker">Étudiante en soins infirmiers</p>
      <span class="level-badge">Référentiel 2026 · ${D.annees.find((a) => a.n === state.annee).label}</span>
      <h1>Mon IFSI</h1>
      <p>Tes cours en fiches simples, des QCM corrigés et tes fiches en PDF.</p>
      <div class="stats">
        <div class="stat"><b>${total}</b><span>fiches</span></div>
        <div class="stat"><b>${mastered}</b><span>maîtrisées</span></div>
        <div class="stat"><b>${acc}%</b><span>QCM</span></div>
      </div>
    </section>
    <input class="search" id="qsearch" value="${esc(state.search)}" placeholder="Rechercher une notion (ex. Henderson, mitrale, FHA…)" />
    <div id="results"></div>
    <div class="sem-row">
      ${D.annees.map((a) => `<button class="sem ${a.n === state.annee ? "active" : ""} ${a.dispo ? "" : "soon"}" data-annee="${a.n}" ${a.dispo ? "" : "disabled"}>${a.label}</button>`).join("")}
    </div>
    ${semTabs()}
    <h2>Unités d’enseignement</h2>
    ${ues.length ? "" : `<p class="meta">Aucune UE rangée ici pour l’instant. Ouvre une UE et choisis « S1 » ou « S2 » d’après le planning de ton IFSI.</p>`}
    <div class="menu">
      ${ues.map((u) => ueTile(u)).join("")}
    </div>
    <p class="disclaimer">Fiches rédigées pour t’aider à réviser, d’après le référentiel de formation infirmière 2026 (arrêté du 20 février 2026, annexe III). Le référentiel fixe les 15 UE et leur programme sur les 3 ans ; c’est ton IFSI qui les répartit par semestre. Les fiches ne remplacent ni tes cours ni les consignes de ton IFSI et de tes lieux de stage : en cas de différence, ce sont eux qui font foi.</p>
  `;
  app.querySelectorAll("[data-ue]").forEach((el) => el.onclick = () => go("cours", { ueId: el.dataset.ue }));
  bindSemTabs(home);
  const input = $("#qsearch");
  input.oninput = (e) => { state.search = e.target.value; showResults(); };
  showResults();
}

function semTabs() {
  return `<div class="tabs">${SEM_FILTERS.map((f) => `<button class="tab ${f.id === semFilter().id ? "active" : ""}" data-semf="${f.id}">${f.label}</button>`).join("")}</div>`;
}
function bindSemTabs(view) {
  app.querySelectorAll("[data-semf]").forEach((el) => el.onclick = () => { state.semFilter = el.dataset.semf; view(); });
}

function ueTile(u) {
  const n = fichesOf(u.id).length;
  const m = masteredCount(u.id);
  const pct = n ? Math.round((100 * m) / n) : 0;
  return `
    <button class="tile" data-ue="${u.id}">
      <div class="icon ${u.tone}">${u.icon}</div>
      <div class="tile-body">
        <h3><span class="code">${u.code}</span> ${u.titre}</h3>
        <p>${stats.sem[u.id] ? `<span class="pill">${stats.sem[u.id]}</span> ` : ""}${n} fiche${n > 1 ? "s" : ""} · ${m} maîtrisée${m > 1 ? "s" : ""} · ${u.ects} ECTS</p>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div>
      <div class="chev">›</div>
    </button>`;
}

function showResults() {
  const box = $("#results");
  const t = state.search.trim().toLowerCase();
  if (t.length < 2) { box.innerHTML = ""; return; }
  const hits = D.fiches.filter((f) => [f.titre, f.resume, f.simple, f.points.join(" "), f.mots.map((m) => m.mot).join(" ")].join(" ").toLowerCase().includes(t));
  box.innerHTML = `<div class="list">${hits.map((f) => ficheRow(f, true)).join("") || "<p class='meta'>Aucune fiche trouvée.</p>"}</div>`;
  box.querySelectorAll("[data-fiche]").forEach((el) => el.onclick = () => go("cours", { ueId: ficheById(el.dataset.fiche).ue, ficheId: el.dataset.fiche }));
}

function ficheRow(f, showUe = false) {
  const u = ueById(f.ue);
  return `
    <div class="row" data-fiche="${f.id}">
      <div><strong>${stats.mastered[f.id] ? "✅ " : ""}${f.titre}</strong><br><small>${showUe ? u.code + " · " : ""}${f.resume}</small></div>
      <span class="chev">›</span>
    </div>`;
}

// ───────────── Cours ─────────────
function cours() {
  if (state.ficheId) return ficheView(state.ficheId);
  if (state.ueId) return ueView(state.ueId);
  const ues = visibleUes();
  const byDom = {};
  ues.forEach((u) => (byDom[u.domaine] = byDom[u.domaine] || []).push(u));
  app.innerHTML = `
    <h2>Cours · ${D.annees.find((a) => a.n === state.annee).label}</h2>
    ${semTabs()}
    ${ues.length ? "" : `<p class="meta">Aucune UE rangée ici pour l’instant.</p>`}
    ${Object.keys(byDom).sort().map((d) => `
      <p class="domaine">Domaine ${d} — ${D.domaines[d]}</p>
      <div class="menu">${byDom[d].map(ueTile).join("")}</div>`).join("")}
  `;
  app.querySelectorAll("[data-ue]").forEach((el) => el.onclick = () => { state.ueId = el.dataset.ue; render(); });
  bindSemTabs(cours);
}

function ueView(ueId) {
  const u = ueById(ueId);
  const fs = fichesOf(ueId);
  const nq = D.questions.filter((q) => q.ue === ueId).length;
  app.innerHTML = `
    <button class="btn ghost" id="back">← Toutes les UE</button>
    <span class="badge ${u.tone}">${u.icon} ${u.code} · Domaine ${u.domaine}</span>
    <h2>${u.titre}</h2>
    <p class="meta">${D.domaines[u.domaine]} · ${u.ects} ECTS sur les 3 ans</p>
    <div class="an1"><b>🎯 En 1re année, le référentiel attend que tu saches :</b><p>${u.an1}</p></div>
    <div class="sem-pick">
      <span>Dans mon IFSI, cette UE est en :</span>
      ${["S1", "S2"].map((s) => `<button class="tab ${stats.sem[u.id] === s ? "active" : ""}" data-sem="${s}">${s}</button>`).join("")}
    </div>
    <div class="actions">
      ${fs.length ? `<button class="btn primary" id="pdf-ue">📄 Toute l’UE en PDF</button>` : ""}
      ${nq ? `<button class="btn" id="qcm-ue">📝 ${nq} QCM</button>` : ""}
    </div>
    <h3 class="prog-title">Programme officiel</h3>
    ${u.programme.map((t) => {
      const tf = fs.filter((f) => f.theme === t.id);
      return `<section class="theme">
        <h4>${t.t}</h4>
        <details><summary>Contenu officiel</summary><p class="items">${t.items}</p></details>
        <div class="list">${tf.map((f) => ficheRow(f)).join("") || `<p class="soon-fiche">Fiche à venir</p>`}</div>
      </section>`;
    }).join("")}
  `;
  $("#back").onclick = () => { state.ueId = null; render(); };
  app.querySelectorAll("[data-sem]").forEach((el) => el.onclick = () => {
    const s = el.dataset.sem;
    if (stats.sem[u.id] === s) delete stats.sem[u.id]; else stats.sem[u.id] = s;
    saveStats(); ueView(ueId);
  });
  const pdf = $("#pdf-ue");
  if (pdf) pdf.onclick = () => printFiches(fs, `${u.code} — ${u.titre}`);
  const q = $("#qcm-ue");
  if (q) q.onclick = () => go("qcm", { qUe: ueId });
  app.querySelectorAll("[data-fiche]").forEach((el) => el.onclick = () => { state.ficheId = el.dataset.fiche; render(); });
}

function ficheBody(f, forPrint = false) {
  const note = stats.notes[f.id];
  return `
    <div class="section simple"><h3>💡 En simple</h3><p>${f.simple}</p></div>
    <div class="section"><h3>📌 À retenir</h3><ul class="clean">${f.points.map((p) => `<li>${p}</li>`).join("")}</ul></div>
    <div class="section exemple"><h3>🏥 En stage</h3><p>${f.exemple}</p></div>
    <div class="piege"><b>⚠️ Piège fréquent</b><p>${f.piege}</p></div>
    <div class="memo"><b>🧠 Astuce mémo</b><p>${f.memo}</p></div>
    ${f.mots.length ? `<div class="section"><h3>📖 Vocabulaire</h3><dl class="mots">${f.mots.map((m) => `<dt>${m.mot}</dt><dd>${m.def}</dd>`).join("")}</dl></div>` : ""}
    ${forPrint
      ? (note ? `<div class="section"><h3>✏️ Mes notes</h3><p class="notes-print">${esc(note)}</p></div>` : "")
      : `<div class="section"><h3>✏️ Mes notes</h3><textarea id="notes" placeholder="Ajoute ici ce que ta formatrice a précisé en cours…">${esc(note || "")}</textarea><small class="meta">Enregistré automatiquement sur cet appareil.</small></div>`}
  `;
}

function ficheView(id) {
  const f = ficheById(id);
  const u = ueById(f.ue);
  const fs = fichesOf(f.ue);
  const i = fs.indexOf(f);
  stats.seen[id] = true; saveStats();
  app.innerHTML = `
    <button class="btn ghost" id="back">← ${u.code}</button>
    <span class="badge ${u.tone}">${u.icon} ${u.code}</span>
    <h2>${f.titre}</h2>
    <p class="meta">${f.resume}</p>
    ${ficheBody(f)}
    <div class="actions">
      <button class="btn ${stats.mastered[id] ? "done" : "primary"}" id="master">${stats.mastered[id] ? "✅ Maîtrisée" : "Je maîtrise cette fiche"}</button>
      <button class="btn" id="pdf">📄 Fiche PDF</button>
    </div>
    <div class="pager">
      ${i > 0 ? `<button class="btn ghost" data-go="${fs[i - 1].id}">‹ ${fs[i - 1].titre}</button>` : "<span></span>"}
      ${i < fs.length - 1 ? `<button class="btn ghost" data-go="${fs[i + 1].id}">${fs[i + 1].titre} ›</button>` : ""}
    </div>
  `;
  $("#back").onclick = () => { state.ficheId = null; render(); };
  $("#master").onclick = () => { stats.mastered[id] = !stats.mastered[id]; saveStats(); ficheView(id); };
  $("#pdf").onclick = () => printFiches([f], `${u.code} — ${f.titre}`);
  $("#notes").oninput = (e) => { stats.notes[id] = e.target.value; saveStats(); };
  app.querySelectorAll("[data-go]").forEach((el) => el.onclick = () => { state.ficheId = el.dataset.go; render(); });
}

// PDF : on remplit une zone dédiée à l'impression puis on ouvre la boîte
// d'impression du navigateur (« Enregistrer en PDF » / iPhone : Partager → Imprimer).
function printFiches(list, title) {
  const zone = $("#print");
  zone.innerHTML = `
    <header class="print-head"><b>Mon IFSI</b> · ${esc(title)}</header>
    ${list.map((f) => {
      const u = ueById(f.ue);
      return `<article class="print-fiche">
        <p class="print-ue">${u.code} — ${u.titre} · ${u.programme.find((t) => t.id === f.theme).t}</p>
        <h1>${f.titre}</h1>
        <p class="meta">${f.resume}</p>
        ${ficheBody(f, true)}
      </article>`;
    }).join("")}
    <footer class="print-foot">Fiche de révision — référentiel infirmier 2026. À compléter avec tes cours.</footer>
  `;
  const prev = document.title;
  document.title = title.replace(/[\\/:*?"<>|]/g, "-");
  setTimeout(() => {
    window.print();
    document.title = prev;
  }, 50);
}

// ───────────── QCM ─────────────
function shuffle(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

function qcm() {
  const ues = D.ues.filter((u) => D.questions.some((q) => q.ue === u.id));
  const groups = [
    { id: "all", label: "Tout", test: () => true },
    ...["S1", "S2"].filter((s) => Object.values(stats.sem).includes(s)).map((s) => ({ id: s, label: "Mon " + s, test: (q) => stats.sem[q.ue] === s })),
    ...ues.map((u) => ({ id: u.id, label: u.code, test: (q) => q.ue === u.id }))
  ];
  const group = groups.find((g) => g.id === state.qUe) || groups[0];
  if (!state.qList) {
    const pool = D.questions.filter(group.test);
    // On mélange aussi les réponses pour que la bonne ne soit pas toujours au même endroit.
    state.qList = shuffle(pool).map((q) => {
      const order = shuffle(q.choices.map((_, i) => i));
      return { ...q, choices: order.map((i) => q.choices[i]), a: order.indexOf(q.a) };
    });
    state.qIndex = 0; state.qScore = 0; state.answered = false;
  }
  const qs = state.qList;
  const tabs = `<div class="tabs">
    ${groups.map((g) => `<button class="tab ${g.id === group.id ? "active" : ""}" data-f="${g.id}">${g.label}</button>`).join("")}
  </div>`;
  if (!qs.length) {
    app.innerHTML = `<h2>QCM</h2>${tabs}<p class="meta">Pas encore de question pour cette UE.</p>`;
  } else if (state.qIndex >= qs.length) {
    const pct = Math.round((100 * state.qScore) / qs.length);
    app.innerHTML = `<h2>QCM</h2>${tabs}
      <div class="card end">
        <h2>Série terminée</h2>
        <p class="big">${state.qScore} / ${qs.length}</p>
        <p>${pct >= 80 ? "Bravo, c’est solide ! 🎉" : pct >= 50 ? "Pas mal ! Relis les fiches où tu as hésité." : "Courage : relis les fiches puis refais la série."}</p>
        <button class="btn primary" id="restart">Nouvelle série</button>
      </div>`;
    $("#restart").onclick = () => { state.qList = null; render(); };
  } else {
    const q = qs[state.qIndex];
    const u = ueById(q.ue);
    app.innerHTML = `
      <h2>QCM</h2>
      ${tabs}
      <p class="meta">${u.code} · question ${state.qIndex + 1} / ${qs.length} · score ${state.qScore}</p>
      <div class="card">
        <p class="question">${q.q}</p>
        <div class="choices">${q.choices.map((c, i) => `<button class="choice" data-i="${i}">${c}</button>`).join("")}</div>
        <div class="feedback" id="fb"></div>
        <div class="actions"><button class="btn primary hidden" id="next">${state.qIndex + 1 < qs.length ? "Question suivante" : "Voir mon score"}</button></div>
      </div>`;
    app.querySelectorAll(".choice").forEach((btn) => btn.onclick = () => {
      if (state.answered) return;
      state.answered = true;
      const i = +btn.dataset.i;
      const ok = i === q.a;
      if (ok) state.qScore++;
      const s = stats.q[q.ue] || { c: 0, t: 0 };
      s.t++; if (ok) s.c++;
      stats.q[q.ue] = s; saveStats();
      app.querySelectorAll(".choice").forEach((b) => {
        const j = +b.dataset.i;
        if (j === q.a) b.classList.add("ok");
        if (j === i && !ok) b.classList.add("ko");
      });
      $("#fb").innerHTML = `<b>${ok ? "✅ Bonne réponse" : "❌ Raté"}</b> — ${q.exp}`;
      $("#next").classList.remove("hidden");
    });
    $("#next").onclick = () => { state.qIndex++; state.answered = false; render(); };
  }
  app.querySelectorAll(".tab").forEach((el) => el.onclick = () => { state.qUe = el.dataset.f; state.qList = null; render(); });
}

// ───────────── Calculs ─────────────
function calculs() {
  app.innerHTML = `
    <h2>Calculs de doses</h2>
    <p class="meta">Fais d’abord le calcul à la main, puis vérifie ici. En stage, un calcul se vérifie toujours avec l’infirmier.</p>
    <div class="card calc-grid">
      <h3>Volume à prélever</h3>
      <label>Dose prescrite (mg)<input type="number" inputmode="decimal" id="dp" value="250"></label>
      <label>Dose dans le flacon (mg)<input type="number" inputmode="decimal" id="df" value="1000"></label>
      <label>Volume du flacon (mL)<input type="number" inputmode="decimal" id="vf" value="10"></label>
      <div class="result" id="r1">—</div>
    </div>
    <div class="card calc-grid">
      <h3>Dose selon le poids</h3>
      <label>Dose (mg/kg)<input type="number" inputmode="decimal" id="mk" value="15"></label>
      <label>Poids (kg)<input type="number" inputmode="decimal" id="kg" value="20"></label>
      <label>Prises par jour<input type="number" inputmode="decimal" id="pp" value="4"></label>
      <div class="result" id="r2">—</div>
    </div>
    <div class="card calc-grid">
      <h3>Débit de perfusion</h3>
      <label>Volume (mL)<input type="number" inputmode="decimal" id="vol" value="500"></label>
      <label>Durée (heures)<input type="number" inputmode="decimal" id="hrs" value="4"></label>
      <label>Gouttes par mL<input type="number" inputmode="decimal" id="gtt" value="20"></label>
      <div class="result" id="r3">—</div>
    </div>
    <div class="card calc-grid">
      <h3>Pourcentage → quantité</h3>
      <label>Concentration (%)<input type="number" inputmode="decimal" id="pc" value="5"></label>
      <label>Volume (mL)<input type="number" inputmode="decimal" id="pv" value="500"></label>
      <div class="result" id="r4">—</div>
    </div>
    <div class="card">
      <h3>Rappels</h3>
      <ul class="clean">
        <li>1 g = 1 000 mg · 1 mg = 1 000 µg · 1 L = 1 000 mL</li>
        <li>x % = x g pour 100 mL</li>
        <li>Volume = dose prescrite × volume ÷ dose disponible</li>
        <li>mL/h = volume ÷ heures · gouttes/min = volume × 20 ÷ minutes</li>
      </ul>
    </div>`;
  const v = (id) => parseFloat($(id).value);
  const fmt = (n, d = 1) => Number.isFinite(n) ? n.toLocaleString("fr-FR", { maximumFractionDigits: d }) : null;
  const upd = () => {
    const vol = v("#dp") * v("#vf") / v("#df");
    $("#r1").textContent = fmt(vol, 2) ? `Prélever ${fmt(vol, 2)} mL` : "—";
    const day = v("#mk") * v("#kg");
    const per = day / v("#pp");
    $("#r2").textContent = fmt(per) ? `${fmt(day)} mg/jour · ${fmt(per)} mg par prise` : "—";
    const mlh = v("#vol") / v("#hrs");
    const gpm = v("#vol") * v("#gtt") / (v("#hrs") * 60);
    $("#r3").textContent = fmt(mlh) ? `${fmt(mlh)} mL/h · ≈ ${fmt(Math.round(gpm), 0)} gouttes/min` : "—";
    const g = v("#pc") * v("#pv") / 100;
    $("#r4").textContent = fmt(g, 2) ? `${fmt(g, 2)} g (soit ${fmt(g * 1000, 0)} mg)` : "—";
  };
  app.querySelectorAll("input").forEach((i) => i.oninput = upd);
  upd();
}

// ───────────── Lexique ─────────────
function lexique() {
  app.innerHTML = `
    <h2>Vocabulaire médical</h2>
    <p class="meta">Décode un mot en le découpant : brady-cardie = cœur lent, hémat-urie = sang dans l’urine.</p>
    <input class="search" id="lsearch" placeholder="Filtrer (ex. -ite, cœur…)" />
    <div class="list" id="lex"></div>`;
  const draw = (t = "") => {
    const f = t.toLowerCase();
    $("#lex").innerHTML = D.lexique
      .filter((l) => !f || [l.part, l.sens, l.ex].join(" ").toLowerCase().includes(f))
      .map((l) => `<div class="row lex"><div><strong>${l.part}</strong> = ${l.sens}<br><small>ex. ${l.ex}</small></div></div>`)
      .join("") || "<p class='meta'>Rien trouvé.</p>";
  };
  $("#lsearch").oninput = (e) => draw(e.target.value);
  draw();
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
