/* Renders brand filter, brand sections and project cards from BRANDS (js/projects.js). */
(function () {
  const ALL = "All brands";
  const filtersEl = document.getElementById("filters");
  const boardEl = document.getElementById("brands");
  const dialog = document.getElementById("viewer");
  const viewerImg = dialog.querySelector("img");
  const viewerCap = dialog.querySelector("figcaption");
  let current = ALL;

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderFilters() {
    const names = [ALL].concat(BRANDS.map(b => b.name));
    filtersEl.hidden = names.length < 3; /* hide when there is only one brand */
    filtersEl.innerHTML = names
      .map(n => `<button type="button" data-brand="${esc(n)}" aria-pressed="${n === current}">${esc(n)}</button>`)
      .join("");
  }

  function card(p, brand) {
    const chips = p.tools.map(t => `<span>${esc(t)}</span>`).join("");
    return `<figure class="proj">
      <button type="button" class="art" data-img="${esc(p.img)}" data-cap="${esc(brand.name)} — ${esc(p.title)}" aria-label="View ${esc(p.title)} full size">
        <img src="${esc(p.img)}" alt="${esc(brand.name)}: ${esc(p.title)}" width="${p.w}" height="${p.h}" loading="lazy">
      </button>
      <figcaption>
        <div class="name">${esc(p.category)}</div>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.description)}</p>
        <div class="chips">${chips}</div>
      </figcaption>
    </figure>`;
  }

  function renderBrands() {
    boardEl.innerHTML = BRANDS
      .filter(b => current === ALL || b.name === current)
      .map(b => {
        const sw = b.palette.map(c => `<i style="background:${esc(c)}" title="${esc(c)}"></i>`).join("");
        return `<article class="brand">
          <header class="brand-head">
            <div>
              <div class="name">${esc(b.type)} · ${esc(b.year)}</div>
              <h3>${esc(b.name)}</h3>
              <p class="tag">${esc(b.tagline)}</p>
              <p class="sum">${esc(b.summary)}</p>
            </div>
            <div class="swatches" aria-label="Brand colors">${sw}</div>
          </header>
          <div class="board">${b.projects.map(p => card(p, b)).join("")}</div>
        </article>`;
      }).join("");
  }

  filtersEl.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    current = btn.dataset.brand;
    renderFilters();
    renderBrands();
  });

  boardEl.addEventListener("click", e => {
    const btn = e.target.closest(".art");
    if (!btn) return;
    viewerImg.src = btn.dataset.img;
    viewerImg.alt = btn.dataset.cap;
    viewerCap.textContent = btn.dataset.cap;
    dialog.showModal();
  });
  dialog.addEventListener("click", () => dialog.close()); /* click anywhere to close */

  renderFilters();
  renderBrands();
})();
