const $ = (sel, el = document) => el.querySelector(sel);
const app = $("#app");
const statsKey = "pharmaetudes-stats";

const stats = JSON.parse(localStorage.getItem(statsKey) || '{"seen":{},"qCorrect":0,"qTotal":0}');
function saveStats() { localStorage.setItem(statsKey, JSON.stringify(stats)); }

let state = { view: "home", drugId: null, qIndex: 0, answered: false, pick: null, caseId: null };

document.querySelectorAll(".nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state = { ...state, view: btn.dataset.view, drugId: null, caseId: null, answered: false };
    render();
  });
});

function render() {
  const views = { home, fiches, qcm, calculs, stage, suffixes: fiches };
  (views[state.view] || home)();
}

function go(view) {
  document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  state = { ...state, view, drugId: null, caseId: null, answered: false };
  render();
}

function home() {
  const n = PHARMA_DATA.drugs.length;
  const acc = stats.qTotal ? Math.round(100 * stats.qCorrect / stats.qTotal) : 0;
  const seen = Object.keys(stats.seen || {}).length;
  app.innerHTML = `
    <section class="hero">
      <p class="kicker">Étudiant pharmacie</p>
      <h1>PharmAppli</h1>
      <p>Réviser une DCI, un calcul ou un cas de comptoir en 30 secondes.</p>
      <div class="stats">
        <div class="stat"><b>${n}</b><span>fiches</span></div>
        <div class="stat"><b>${acc}%</b><span>QCM</span></div>
        <div class="stat"><b>${seen}</b><span>vues</span></div>
      </div>
    </section>
    <input class="search" id="qsearch" placeholder="Rechercher une molécule…" />
    <div class="menu">
      <button class="tile" data-go="fiches">
        <div class="icon t-green">💊</div>
        <div><h3>Fiches médicaments</h3><p>MOA, CI, EI, conseil</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="qcm">
        <div class="icon t-blue">📝</div>
        <div><h3>QCM express</h3><p>Questions + correction</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="calculs">
        <div class="icon t-amber">➗</div>
        <div><h3>Calculs</h3><p>Délivrance, dose, débit</p></div>
        <div class="chev">›</div>
      </button>
      <button class="tile" data-go="stage">
        <div class="icon t-rose">🩺</div>
        <div><h3>Cas de stage</h3><p>Situations de comptoir</p></div>
        <div class="chev">›</div>
      </button>
    </div>
    <h2>Suffixes</h2>
    <div class="chips">
      ${PHARMA_DATA.suffixes.map(s => `<div class="chip"><b>${s.stem}</b> ${s.classe}</div>`).join("")}
    </div>
  `;
  app.querySelectorAll("[data-go]").forEach(el => el.onclick = () => go(el.dataset.go));
  $("#qsearch").addEventListener("input", e => {
    const t = e.target.value.trim();
    if (t.length > 1) { state.filter = t; go("fiches"); }
  });
}

function fiches() {
  if (state.drugId) return fiche(state.drugId);
  const f = (state.filter || "").toLowerCase();
  const list = PHARMA_DATA.drugs.filter(d =>
    !f || [d.dci, d.princeps, d.classe, d.tags.join(" ")].join(" ").toLowerCase().includes(f)
  );
  app.innerHTML = `
    <h2>Fiches médicaments</h2>
    <input class="search" id="qsearch" value="${state.filter || ""}" placeholder="Filtrer…" />
    <div class="list">
      ${list.map(d => `
        <div class="row" data-id="${d.id}">
          <div><strong>${d.dci}</strong><br><small>${d.princeps} • ${d.classe}</small></div>
          <span class="badge">${d.atc}</span>
        </div>`).join("") || "<p>Aucun résultat.</p>"}
    </div>`;
  $("#qsearch").oninput = e => { state.filter = e.target.value; fiches(); };
  app.querySelectorAll("[data-id]").forEach(el => el.onclick = () => { state.drugId = el.dataset.id; render(); });
}

function fiche(id) {
  const d = PHARMA_DATA.drugs.find(x => x.id === id);
  stats.seen[id] = true; saveStats();
  app.innerHTML = `
    <button class="btn ghost" id="back">← Toutes les fiches</button>
    <h2>${d.dci}</h2>
    <div class="meta">${d.princeps} • ${d.classe} • ${d.atc}</div>
    ${block("Mécanisme", d.moa)}
    ${block("Indications", d.indications)}
    ${block("Posologie type", d.posologie)}
    ${block("Contre-indications", d.ci)}
    ${block("Effets indésirables", d.ei)}
    ${block("Interactions", d.interactions)}
    ${block("Surveillance", d.surveillance)}
    ${block("Conseil officinal", d.conseil)}
  `;
  $("#back").onclick = () => { state.drugId = null; render(); };
}
const block = (t, c) => `<div class="section"><h3>${t}</h3><div>${c}</div></div>`;

function qcm() {
  const qs = PHARMA_DATA.questions;
  if (state.qIndex >= qs.length) {
    app.innerHTML = `<div class="card"><h2>Série terminée</h2><p>Score : ${stats.qCorrect} / ${stats.qTotal}</p>
      <button class="btn primary" id="restart">Recommencer</button></div>`;
    $("#restart").onclick = () => { state.qIndex = 0; state.answered = false; render(); };
    return;
  }
  const q = qs[state.qIndex];
  app.innerHTML = `
    <h2>QCM • ${q.theme}</h2>
    <p>${state.qIndex + 1} / ${qs.length}</p>
    <div class="card">
      <p style="font-size:1.05rem">${q.q}</p>
      <div class="choices">
        ${q.choices.map((c, i) => `<button class="choice" data-i="${i}">${c}</button>`).join("")}
      </div>
      <div class="feedback" id="fb"></div>
      <div style="margin-top:12px"><button class="btn primary hidden" id="next">Question suivante</button></div>
    </div>`;
  app.querySelectorAll(".choice").forEach(btn => btn.onclick = () => {
    if (state.answered) return;
    state.answered = true;
    const i = +btn.dataset.i;
    stats.qTotal++; if (i === q.a) stats.qCorrect++; saveStats();
    app.querySelectorAll(".choice").forEach(b => {
      const j = +b.dataset.i;
      if (j === q.a) b.classList.add("ok");
      if (j === i && i !== q.a) b.classList.add("ko");
    });
    $("#fb").textContent = q.exp;
    $("#next").classList.remove("hidden");
  });
  $("#next").onclick = () => { state.qIndex++; state.answered = false; render(); };
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
  app.querySelectorAll("input").forEach(i => i.oninput = upd);
  upd();
}

function stage() {
  if (state.caseId) return cas(state.caseId);
  app.innerHTML = `
    <h2>Mode stage — cas comptoir</h2>
    <p class="meta">Essaie de répondre à voix haute, puis révèle les points clés.</p>
    <div class="list">
      ${PHARMA_DATA.cases.map(c => `
        <div class="row" data-id="${c.id}">
          <div><strong>${c.titre}</strong><br><small>${c.enonce.slice(0, 90)}…</small></div>
        </div>`).join("")}
    </div>`;
  app.querySelectorAll("[data-id]").forEach(el => el.onclick = () => { state.caseId = el.dataset.id; render(); });
}

function cas(id) {
  const c = PHARMA_DATA.cases.find(x => x.id === id);
  app.innerHTML = `
    <button class="btn ghost" id="back">← Tous les cas</button>
    <h2>${c.titre}</h2>
    <div class="card"><p>${c.enonce}</p><p><strong>${c.question}</strong></p>
      <button class="btn primary" id="rev">Révéler les points clés</button>
      <ul class="clean hidden" id="pts">${c.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>`;
  $("#back").onclick = () => { state.caseId = null; render(); };
  $("#rev").onclick = () => $("#pts").classList.toggle("hidden");
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
render();
