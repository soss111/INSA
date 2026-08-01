(function () {
  "use strict";

  const data = window.INSA_DATA;
  if (!data) {
    console.error("INSA_DATA puudub — kontrolli data/courses.js");
    return;
  }

  const PLACEHOLDER = "PLACEHOLDER";

  function isPlaceholder(id) {
    return !id || String(id).includes(PLACEHOLDER);
  }

  function drivePreview(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  function driveOpen(fileId) {
    return `https://drive.google.com/file/d/${fileId}/view`;
  }

  function driveDownload(fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function showView(id) {
    document.querySelectorAll(".view").forEach((el) => {
      const active = el.id === id;
      el.classList.toggle("is-active", active);
      el.hidden = !active;
    });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function findModule(moduleId) {
    return data.modules.find((m) => m.id === moduleId);
  }

  function findCourse(moduleId, courseId) {
    const mod = findModule(moduleId);
    if (!mod) return null;
    const course = mod.courses.find((c) => c.id === courseId);
    return course ? { module: mod, course } : null;
  }

  function renderModuleLinks(container) {
    container.innerHTML = data.modules
      .map(
        (m) => `
      <a class="module-link" href="#/moodul/${m.id}" data-nav>
        <span class="meta">${m.courses.length} kursust</span>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.tagline)}</p>
      </a>`
      )
      .join("");
  }

  function renderTeam() {
    const list = $("#team-list");
    list.innerHTML = data.team
      .map((t) => {
        const url = t.portfolioUrl && String(t.portfolioUrl).trim();
        const portfolio = url
          ? `<a class="portfolio" href="${escapeHtml(url)}" target="_blank" rel="noopener">Õpetajaportfoolio</a>`
          : "";
        return `
      <li>
        <div class="team-info">
          <span class="name">${escapeHtml(t.name)}</span>
          ${portfolio}
        </div>
        <span class="role">${escapeHtml(t.role)}</span>
      </li>`;
      })
      .join("");
  }

  function renderModulePage(moduleId) {
    const mod = findModule(moduleId);
    if (!mod) {
      location.hash = "#/moodulid";
      return;
    }
    $("#module-breadcrumb").innerHTML = `
      <a href="#/" data-nav>Avaleht</a>
      <span aria-hidden="true">/</span>
      <a href="#/moodulid" data-nav>Moodulid</a>
      <span aria-hidden="true">/</span>
      <span>${escapeHtml(mod.title)}</span>`;
    $("#module-title").textContent = mod.title;
    $("#module-tagline").textContent = mod.tagline;
    $("#course-list").innerHTML = mod.courses
      .map(
        (c) => `
      <a class="course-link" href="#/moodul/${mod.id}/kursus/${c.id}" data-nav>
        <h3>${escapeHtml(c.title)}</h3>
        <p>${escapeHtml(c.description)}</p>
      </a>`
      )
      .join("");
    showView("view-module");
  }

  function materialPresentation(course) {
    if (isPlaceholder(course.presentationId)) {
      return `
        <div class="material-block">
          <header>
            <h2>Esitlus (PowerPoint)</h2>
          </header>
          <div class="placeholder-panel">
            <div>
              <strong>Drive’i esitlus pole veel seotud</strong>
              Asenda <code>presentationId</code> failis <code>data/courses.js</code>
            </div>
          </div>
        </div>`;
    }
    return `
      <div class="material-block">
        <header>
          <h2>Esitlus (PowerPoint)</h2>
          <div class="material-actions">
            <button type="button" class="btn btn-secondary" data-fullscreen-target="presentation-embed">Täisekraan</button>
            <a class="btn btn-outline" href="${driveOpen(course.presentationId)}" target="_blank" rel="noopener">Ava Drive’is</a>
          </div>
        </header>
        <div class="embed-wrap" id="presentation-embed">
          <button type="button" class="embed-fs-exit" data-exit-fullscreen hidden>Välju täisekraanist</button>
          <iframe
            title="Esitluse eelvaade"
            src="${drivePreview(course.presentationId)}"
            allow="autoplay; fullscreen"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>`;
  }

  function materialWorkbook(course) {
    if (isPlaceholder(course.workbookId)) {
      return `
        <div class="material-block">
          <header>
            <h2>Õpilase töövihik (.doc)</h2>
          </header>
          <div class="workbook-panel placeholder-panel">
            <div>
              <strong>Töövihiku link puudub</strong>
              Asenda <code>workbookId</code> failis <code>data/courses.js</code>
            </div>
          </div>
        </div>`;
    }
    return `
      <div class="material-block">
        <header>
          <h2>Õpilase töövihik (.doc)</h2>
          <div class="material-actions">
            <button type="button" class="btn btn-secondary" data-fullscreen-target="workbook-embed">Täisekraan</button>
            <a class="btn btn-outline" href="${driveOpen(course.workbookId)}" target="_blank" rel="noopener">Ava</a>
            <a class="btn btn-outline" href="${driveDownload(course.workbookId)}" target="_blank" rel="noopener">Laadi alla</a>
          </div>
        </header>
        <div class="workbook-panel">
          <p>Töövihik on mõeldud õpilasele täitmiseks. Ava Drive’is või laadi alla oma arvutisse.</p>
          <div class="embed-wrap" id="workbook-embed">
            <button type="button" class="embed-fs-exit" data-exit-fullscreen hidden>Välju täisekraanist</button>
            <iframe
              title="Töövihiku eelvaade"
              src="${drivePreview(course.workbookId)}"
              allow="autoplay; fullscreen"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>`;
  }

  function renderCoursePage(moduleId, courseId) {
    const found = findCourse(moduleId, courseId);
    if (!found) {
      location.hash = "#/moodulid";
      return;
    }
    const { module: mod, course } = found;
    $("#course-breadcrumb").innerHTML = `
      <a href="#/" data-nav>Avaleht</a>
      <span aria-hidden="true">/</span>
      <a href="#/moodulid" data-nav>Moodulid</a>
      <span aria-hidden="true">/</span>
      <a href="#/moodul/${mod.id}" data-nav>${escapeHtml(mod.title)}</a>
      <span aria-hidden="true">/</span>
      <span>${escapeHtml(course.title)}</span>`;
    $("#course-title").textContent = course.title;
    $("#course-description").textContent = course.description;
    $("#materials").innerHTML =
      materialPresentation(course) + materialWorkbook(course);
    showView("view-course");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getFullscreenElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      null
    );
  }

  function requestEmbedFullscreen(wrap) {
    if (wrap.requestFullscreen) return wrap.requestFullscreen();
    if (wrap.webkitRequestFullscreen) return wrap.webkitRequestFullscreen();
    return Promise.reject(new Error("Fullscreen API puudub"));
  }

  function exitEmbedFullscreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    return Promise.resolve();
  }

  function setEmbedExpanded(wrap, expanded) {
    wrap.classList.toggle("is-expanded", expanded);
    const exitBtn = wrap.querySelector("[data-exit-fullscreen]");
    if (exitBtn) exitBtn.hidden = !expanded;
    document.body.classList.toggle("embed-expanded-open", expanded);
  }

  function syncFullscreenUi() {
    const fsEl = getFullscreenElement();
    document.querySelectorAll(".embed-wrap").forEach((wrap) => {
      const isFs = fsEl === wrap;
      const isExpanded = wrap.classList.contains("is-expanded");
      const active = isFs || isExpanded;
      const exitBtn = wrap.querySelector("[data-exit-fullscreen]");
      if (exitBtn) exitBtn.hidden = !active;

      const trigger = document.querySelector(
        `[data-fullscreen-target="${wrap.id}"]`
      );
      if (trigger) {
        trigger.setAttribute("aria-pressed", active ? "true" : "false");
        trigger.textContent = active ? "Välju täisekraanist" : "Täisekraan";
      }
    });
    const anyExpanded = !!document.querySelector(".embed-wrap.is-expanded");
    document.body.classList.toggle("embed-expanded-open", anyExpanded);
  }

  async function enterFullscreen(wrap) {
    document.querySelectorAll(".embed-wrap.is-expanded").forEach((other) => {
      if (other !== wrap) setEmbedExpanded(other, false);
    });

    try {
      await requestEmbedFullscreen(wrap);
    } catch {
      setEmbedExpanded(wrap, true);
    }
    syncFullscreenUi();
  }

  async function leaveFullscreen(wrap) {
    if (getFullscreenElement() === wrap) {
      try {
        await exitEmbedFullscreen();
      } catch {
        /* ignore */
      }
    }
    if (wrap.classList.contains("is-expanded")) {
      setEmbedExpanded(wrap, false);
    }
    syncFullscreenUi();
  }

  function leaveAllFullscreen() {
    document.querySelectorAll(".embed-wrap.is-expanded").forEach((wrap) => {
      setEmbedExpanded(wrap, false);
    });
    const fsEl = getFullscreenElement();
    if (fsEl && fsEl.classList && fsEl.classList.contains("embed-wrap")) {
      exitEmbedFullscreen().catch(() => {});
    }
    document.body.classList.remove("embed-expanded-open");
  }

  function bindFullscreenControls() {
    document.addEventListener("click", (event) => {
      const enterBtn = event.target.closest("[data-fullscreen-target]");
      if (enterBtn) {
        const wrap = document.getElementById(
          enterBtn.getAttribute("data-fullscreen-target")
        );
        if (!wrap) return;
        const active =
          getFullscreenElement() === wrap ||
          wrap.classList.contains("is-expanded");
        if (active) leaveFullscreen(wrap);
        else enterFullscreen(wrap);
        return;
      }

      const exitBtn = event.target.closest("[data-exit-fullscreen]");
      if (exitBtn) {
        const wrap = exitBtn.closest(".embed-wrap");
        if (wrap) leaveFullscreen(wrap);
      }
    });

    document.addEventListener("fullscreenchange", syncFullscreenUi);
    document.addEventListener("webkitfullscreenchange", syncFullscreenUi);

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const expanded = document.querySelector(".embed-wrap.is-expanded");
      if (expanded) leaveFullscreen(expanded);
    });
  }

  function updateNavCurrent(path) {
    document.querySelectorAll(".nav a[data-nav]").forEach((link) => {
      const target = (link.getAttribute("href") || "").replace(/^#/, "") || "/";
      let current = false;
      if (target === "/moodulid") {
        current = path === "/moodulid" || path.startsWith("/moodul/");
      } else if (target === "/meeskond") {
        current = path === "/meeskond";
      }
      if (current) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function route() {
    const hash = location.hash || "#/";
    const path = hash.replace(/^#/, "") || "/";
    leaveAllFullscreen();
    updateNavCurrent(path);

    if (path === "/" || path === "") {
      showView("view-home");
      return;
    }

    if (path === "/moodulid") {
      showView("view-modules");
      return;
    }

    if (path === "/tutvustus" || path === "/meeskond") {
      showView("view-home");
      requestAnimationFrame(() => {
        const el = document.getElementById(path.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    const courseMatch = path.match(/^\/moodul\/([^/]+)\/kursus\/([^/]+)\/?$/);
    if (courseMatch) {
      renderCoursePage(courseMatch[1], courseMatch[2]);
      return;
    }

    const moduleMatch = path.match(/^\/moodul\/([^/]+)\/?$/);
    if (moduleMatch) {
      renderModulePage(moduleMatch[1]);
      return;
    }

    showView("view-home");
  }

  function init() {
    renderModuleLinks($("#home-modules"));
    renderModuleLinks($("#modules-list"));
    renderTeam();
    bindFullscreenControls();
    window.addEventListener("hashchange", route);
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
