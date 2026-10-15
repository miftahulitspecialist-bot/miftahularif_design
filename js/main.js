/* Renders the filter buttons and project artboards from PROJECTS (js/projects.js). */
(function () {
  const ALL = "All";
  const RATIO_PADDING = { "4:5": "125%", "3:4": "133%", "1:1": "100%", "16:9": "56%", "9:16": "177%" };
  const filtersEl = document.getElementById("filters");
  const boardEl = document.getElementById("board");
  let current = ALL;

  const categories = [ALL].concat(
    PROJECTS.map(p => p.category).filter((c, i, a) => a.indexOf(c) === i)
  );

  /* Placeholder compositions, used when a project has no img. */
  function placeholder(p) {
    const shapes = [
      `<i class="shape" style="width:70%;aspect-ratio:1;border-radius:50%;background:${p.accent};right:-18%;top:-10%"></i>
       <i class="shape" style="width:30%;aspect-ratio:1;background:${p.fg};opacity:.25;left:10%;top:12%"></i>`,
      `<i class="shape" style="left:0;right:0;top:0;height:42%;background:${p.accent}"></i>
       <i class="shape" style="width:34%;aspect-ratio:1;border-radius:50%;background:${p.bg};border:6px solid ${p.fg};right:10%;top:26%"></i>`,
      `<i class="shape" style="width:60%;aspect-ratio:1;background:${p.accent};transform:rotate(18deg);right:-14%;top:6%"></i>
       <i class="shape" style="width:22%;aspect-ratio:1;border-radius:50%;background:${p.fg};opacity:.3;left:10%;top:10%"></i>`
    ];
    return shapes[p.shape % shapes.length] + `<div class="t" style="color:${p.fg}">${p.title}</div>`;
  }

  function renderFilters() {
    filtersEl.innerHTML = categories
      .map(c => `<button type="button" data-category="${c}" aria-pressed="${c === current}">${c}</button>`)
      .join("");
  }

  function renderBoard() {
    boardEl.innerHTML = PROJECTS.map(p => {
      const hidden = current !== ALL && p.category !== current ? "hidden" : "";
      const art = p.img ? `<img src="${p.img}" alt="${p.title}" loading="lazy">` : placeholder(p);
      const chips = p.tools.map(t => `<span>${t}</span>`).join("");
      return `<figure class="proj" ${hidden}>
        <div class="name">${p.category} · ${p.ratio}</div>
        <div class="art" style="background:${p.bg};padding-top:${RATIO_PADDING[p.ratio]}">${art}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="chips">${chips}</div>
      </figure>`;
    }).join("");
  }

  filtersEl.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    current = btn.dataset.category;
    renderFilters();
    renderBoard();
  });

  renderFilters();
  renderBoard();
})();
