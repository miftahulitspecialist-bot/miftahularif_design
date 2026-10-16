/* Renders brand cards from BRANDS (js/projects.js). Clicking a card opens a dialog
   with every project (photos and videos) of that brand. */
(function () {
  const gridEl = document.getElementById("brands");
  const brandDlg = document.getElementById("brand");
  const brandBody = document.getElementById("brand-body");
  const viewer = document.getElementById("viewer");
  const viewerImg = viewer.querySelector("img");
  const viewerCap = viewer.querySelector("figcaption");
  const player = document.getElementById("player");
  const stage = player.querySelector(".stage");
  const playerCap = player.querySelector(".cap");

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const url = u => esc(encodeURI(String(u))); /* safe for file names with spaces */
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

  /* ---- helpers ------------------------------------------------------------ */
  function videoCount(b) {
    return (b.videos ? b.videos.length : 0) + b.projects.filter(p => p.video).length;
  }

  function media(v, autoplay) {
    const ratio = (v.ratio || "16:9").replace(":", " / ");
    const inner = v.youtube
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}${autoplay ? "?autoplay=1" : ""}" title="${esc(v.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
      : `<video controls playsinline preload="metadata"${autoplay ? " autoplay" : ""}${v.poster ? ` poster="${url(v.poster)}"` : ""} src="${url(v.src)}"></video>`;
    return `<div class="vid" style="aspect-ratio:${ratio}">${inner}</div>`;
  }

  /* ---- brand cards (the compact grid) -------------------------------------- */
  function brandCard(b, i) {
    const cover = b.cover || (b.projects[0] && b.projects[0].img) || "";
    const sw = b.palette.map(c => `<i style="background:${esc(c)}"></i>`).join("");
    const v = videoCount(b);
    return `<button type="button" class="bcard" data-brand="${i}" aria-label="Open ${esc(b.name)} portfolio">
      <span class="bcover">${cover ? `<img src="${url(cover)}" alt="" loading="lazy">` : ""}<span class="bsw">${sw}</span></span>
      <span class="binfo">
        <span class="name">${esc(b.type)} · ${esc(b.year)}</span>
        <span class="bt">${esc(b.name)}</span>
        <span class="btag">${esc(b.tagline)}</span>
        <span class="bmeta">${plural(b.projects.length, "project")}${v ? ` · ${plural(v, "video")}` : ""} <b>View &rarr;</b></span>
      </span>
    </button>`;
  }

  /* ---- everything inside the opened brand ------------------------------------ */
  function projectCard(p, bi, pi) {
    const chips = p.tools.map(t => `<span>${esc(t)}</span>`).join("");
    return `<figure class="proj${p.w / p.h >= 1.4 ? " wide" : ""}">
      <button type="button" class="art" data-img="${url(p.img)}" data-cap="${esc(BRANDS[bi].name)} — ${esc(p.title)}" aria-label="View ${esc(p.title)} full size">
        <img src="${url(p.img)}" alt="${esc(BRANDS[bi].name)}: ${esc(p.title)}" width="${p.w}" height="${p.h}" loading="lazy">
      </button>
      <figcaption>
        <div class="name">${esc(p.category)}</div>
        <h4>${esc(p.title)}</h4>
        <p>${esc(p.description)}</p>
        <div class="chips">${chips}</div>
        ${p.video ? `<button type="button" class="watch" data-b="${bi}" data-p="${pi}">&#9654; Watch video</button>` : ""}
      </figcaption>
    </figure>`;
  }

  /* Brand videos sit in the same masonry columns as the images, so they fill the gaps. */
  function videoCard(v) {
    const wide = (v.ratio || "16:9") === "16:9";
    const [rw, rh] = (v.ratio || "16:9").split(":").map(Number);
    return `<figure class="proj vcard${wide ? " wide" : ""}" style="--vr:${(rw / rh).toFixed(3)}">${media(v)}<figcaption><div class="name">Video</div><h4>${esc(v.title)}</h4>${v.description ? `<p>${esc(v.description)}</p>` : ""}</figcaption></figure>`;
  }

  /* Images first, then videos. A video can set `after: N` to sit right after the N-th item. */
  function boardItems(b, i) {
    const items = b.projects.map((p, pi) => projectCard(p, i, pi));
    (b.videos || []).forEach(v => {
      const html = videoCard(v);
      if (typeof v.after === "number") items.splice(Math.min(v.after, items.length), 0, html);
      else items.push(html);
    });
    return items.join("");
  }

  /* Stretch the last tile so the final row has no empty slots, whatever the screen width. */
  function fillLastRow() {
    const board = brandBody.querySelector(".board");
    if (!board) return;
    const items = [...board.children];
    items.forEach(el => { el.style.gridColumn = ""; el.classList.remove("fill"); });
    const cols = getComputedStyle(board).gridTemplateColumns.split(" ").length;
    if (cols < 2) return;
    const span = el => (el.classList.contains("wide") ? 2 : 1);
    const rest = items.reduce((n, el) => n + span(el), 0) % cols;
    if (!rest) return;
    const last = items[items.length - 1];
    last.style.gridColumn = `span ${Math.min(cols, span(last) + cols - rest)}`;
    last.classList.add("fill");
  }
  window.addEventListener("resize", () => { if (brandDlg.open) fillLastRow(); });

  function openBrand(i) {
    const b = BRANDS[i];
    const sw = b.palette.map(c => `<i style="background:${esc(c)}" title="${esc(c)}"></i>`).join("");
    brandBody.innerHTML = `
      <header class="brand-head">
        <div>
          <div class="name">${esc(b.type)} · ${esc(b.year)}</div>
          <h3>${esc(b.name)}</h3>
          <p class="tag">${esc(b.tagline)}</p>
          <p class="sum">${esc(b.summary)}</p>
        </div>
        <div class="swatches" aria-label="Brand colors">${sw}</div>
      </header>
      <h4 class="sub">Projects</h4>
      <div class="board">${boardItems(b, i)}</div>`;
    brandDlg.showModal();
    brandDlg.querySelector(".bd").scrollTop = 0;
    fillLastRow();
  }

  /* ---- events ----------------------------------------------------------------- */
  gridEl.addEventListener("click", e => {
    const c = e.target.closest(".bcard");
    if (c) openBrand(+c.dataset.brand);
  });

  brandDlg.addEventListener("click", e => { if (e.target === brandDlg || e.target.closest(".bd > .x")) brandDlg.close(); });
  brandDlg.addEventListener("close", () => { brandBody.innerHTML = ""; }); /* stops any playing video */

  brandBody.addEventListener("click", e => {
    const watch = e.target.closest(".watch");
    if (watch) {
      const b = BRANDS[+watch.dataset.b], pr = b.projects[+watch.dataset.p];
      stage.innerHTML = media(pr.video, true);
      playerCap.textContent = `${b.name} — ${pr.title}`;
      player.showModal();
      return;
    }
    const art = e.target.closest(".art");
    if (art) {
      viewerImg.src = art.dataset.img;
      viewerImg.alt = art.dataset.cap;
      viewerCap.textContent = art.dataset.cap;
      viewer.showModal();
    }
  });

  player.addEventListener("close", () => { stage.innerHTML = ""; });
  player.addEventListener("click", e => { if (e.target === player || e.target.closest(".x")) player.close(); });
  viewer.addEventListener("click", () => viewer.close());

  gridEl.innerHTML = BRANDS.map(brandCard).join("");
})();
