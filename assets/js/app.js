/* =====================================================================
   App renderer · builds the header, footer, sidebar and every data-driven
   section from the files in /data. You should not need to edit this file
   to update content. Edit the files in /data instead.
   ===================================================================== */
(function () {
  "use strict";

  var S = window.SITE || {};
  var NEWS = window.NEWS || [];
  var PUBS = window.PUBLICATIONS || { underReview: [], published: [] };
  var R = window.RESEARCH || { themes: [], tools: [], collaborations: [], vision: [] };
  var PEOPLE = window.PEOPLE || { current: [], mentored: [], undergrad: [] };
  var T = window.TEACHING || { courses: [], curriculum: [], pillars: [], philosophy: [], training: [] };
  var H = window.HONOURS || { grants: [], awards: [], scholarships: [] };
  var SV = window.SERVICE || { committees: [], journals: [], leadership: [], talks: [], subReviewer: [], career: [] };

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var page = document.body.getAttribute("data-page") || "";

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initials(name) {
    return name.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
  }
  function parseDate(d) {
    var p = String(d).split("-").map(Number);
    return new Date(p[0], (p[1] || 1) - 1, p[2] || 1);
  }
  function sortKey(d) {
    var p = String(d).split("-");
    return (p[0] || "0000") + (p[1] || "00") + (p[2] || "00");
  }
  function fmtDate(d) {
    var p = String(d).split("-").map(Number);
    if (p.length === 1) return String(p[0]);
    if (p.length === 2) return MONTHS[p[1] - 1] + " " + p[0];
    return MONTHS[p[1] - 1] + " " + p[2] + ", " + p[0];
  }
  function isNew(d) {
    var days = (Date.now() - parseDate(d).getTime()) / 864e5;
    return days >= 0 && days <= (S.newBadgeDays || 60);
  }
  function icon(cls) { return '<i class="' + esc(cls) + '" aria-hidden="true"></i>'; }
  function ext(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
  function sortedNews() {
    return NEWS.slice().sort(function (a, b) { return sortKey(b.date).localeCompare(sortKey(a.date)); });
  }
  function toast(msg) {
    var t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { toast("Citation copied"); });
    }
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast("Citation copied"); } catch (e) { toast("Copy failed"); }
    document.body.removeChild(ta);
  }

  /* ---------- theme ---------- */
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    $$(".theme-toggle i").forEach(function (i) { i.className = next === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"; });
  }

  /* ---------- header, drawer, footer ---------- */
  function renderChrome() {
    var navLinks = (S.nav || []).map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a>";
    }).join("");
    var themeIcon = currentTheme() === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";

    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="' + esc(S.name) + ', home">' +
          '<span class="brand-mark">' + esc(initials(S.name || "S M")) + "</span>" +
          '<span class="brand-text"><span class="brand-name">' + esc(S.name) + "</span>" +
          '<span class="brand-sub">' + esc(S.title) + " · " + esc(S.university) + "</span></span>" +
        "</a>" +
        '<nav class="nav" aria-label="Main">' + navLinks + "</nav>" +
        '<div class="header-actions">' +
          '<button class="icon-btn theme-toggle" type="button" aria-label="Toggle dark mode">' + icon(themeIcon) + "</button>" +
          '<button class="icon-btn menu-btn" type="button" aria-label="Open menu" aria-expanded="false">' + icon("fa-solid fa-bars") + "</button>" +
        "</div>" +
      "</div>";
    document.body.insertBefore(header, document.body.firstChild);

    var skip = document.createElement("a");
    skip.className = "skip-link"; skip.href = "#main"; skip.textContent = "Skip to content";
    document.body.insertBefore(skip, document.body.firstChild);

    var drawerLinks = (S.nav || []).map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + icon("fa-solid fa-arrow-right") + "</a>";
    }).join("");
    var drawer = document.createElement("div");
    drawer.innerHTML =
      '<div class="drawer-backdrop"></div>' +
      '<aside class="drawer" aria-label="Menu" aria-hidden="true">' +
        '<div class="drawer-head"><span class="brand-name">' + esc(S.name) + '</span>' +
        '<button class="icon-btn drawer-close" type="button" aria-label="Close menu">' + icon("fa-solid fa-xmark") + "</button></div>" +
        drawerLinks +
        '<div class="drawer-foot"><a class="btn btn-primary" href="' + esc(S.cv) + '"' + ext(S.cv) + ">" + icon("fa-solid fa-file-pdf") + " Download CV</a></div>" +
      "</aside>";
    document.body.appendChild(drawer);

    function setDrawer(open) {
      document.body.classList.toggle("drawer-open", open);
      $(".menu-btn").setAttribute("aria-expanded", open ? "true" : "false");
      $(".drawer").setAttribute("aria-hidden", open ? "false" : "true");
    }
    $(".menu-btn").addEventListener("click", function () { setDrawer(true); });
    $(".drawer-close").addEventListener("click", function () { setDrawer(false); });
    $(".drawer-backdrop").addEventListener("click", function () { setDrawer(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setDrawer(false); });
    $$(".theme-toggle").forEach(function (b) { b.addEventListener("click", toggleTheme); });

    // footer
    var c = S.contact || {};
    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<div class="footer-name">' + esc(S.name) + (S.honorific ? ", " + esc(S.honorific) : "") + "</div>" +
            '<p style="margin:0 0 16px">' + esc(S.title) + ", " + esc(S.department) + "<br>" + esc(S.university) + ", " + esc(S.location) + "</p>" +
            profilesHTML() +
          "</div>" +
          "<div><h4>Explore</h4><ul class=\"footer-links\">" +
            (S.nav || []).map(function (n) { return '<li><a href="' + n.href + '">' + esc(n.label) + "</a></li>"; }).join("") +
            '<li><a href="' + esc(S.cv) + '"' + ext(S.cv) + ">CV (PDF)</a></li>" +
          "</ul></div>" +
          "<div><h4>Contact</h4>" +
            '<p style="margin:0 0 6px"><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></p>" +
            '<p style="margin:0">' + esc(c.office) + "<br>" + (c.address || []).map(esc).join("<br>") + "</p>" +
          "</div>" +
        "</div>" +
        (S.landAcknowledgement ? '<div class="land">' + icon("fa-solid fa-feather") + "<p style=\"margin:0\">" + esc(S.landAcknowledgement) + "</p></div>" : "") +
        '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + esc(S.name) + "</span>" +
          "<span>Last updated " + esc(fmtDate(S.lastUpdated || "")) + "</span></div>" +
      "</div>";
    document.body.appendChild(footer);

    var top = document.createElement("button");
    top.className = "icon-btn to-top"; top.type = "button"; top.setAttribute("aria-label", "Back to top");
    top.innerHTML = icon("fa-solid fa-arrow-up");
    top.addEventListener("click", function () { window.scrollTo({ top: 0 }); });
    document.body.appendChild(top);

    var onScroll = function () {
      var y = window.scrollY || 0;
      header.classList.toggle("scrolled", y > 8);
      top.classList.toggle("show", y > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function profilesHTML() {
    return '<div class="profiles">' + (S.profiles || []).map(function (p) {
      return '<a href="' + esc(p.url) + '" target="_blank" rel="noopener" aria-label="' + esc(p.label) + '" title="' + esc(p.label) + '">' + icon(p.icon) + "</a>";
    }).join("") + "</div>";
  }

  /* ---------- news ---------- */
  function newsItemHTML(n) {
    return '<li class="news-item">' +
      '<div class="news-meta"><time class="news-date" datetime="' + esc(n.date) + '">' + esc(fmtDate(n.date)) + "</time>" +
        (n.tag ? '<span class="news-tag" data-tag="' + esc(n.tag) + '">' + esc(n.tag) + "</span>" : "") +
        (isNew(n.date) ? '<span class="news-new">New</span>' : "") +
      "</div>" +
      '<p class="news-text">' + n.text + "</p>" +
      (n.link ? '<a class="news-link" href="' + esc(n.link.url) + '"' + ext(n.link.url) + ">" + esc(n.link.label) + " " + icon("fa-solid fa-arrow-right") + "</a>" : "") +
    "</li>";
  }

  var R_ = {}; // renderers by name

  R_.sidebar = function (el) {
    var count = +el.getAttribute("data-news") || S.newsInSidebar || 6;
    var extras = (el.getAttribute("data-extras") || "recruit").split(",").map(function (s) { return s.trim(); });
    var html = '<div class="sidebar-sticky">';
    if (extras.indexOf("nonews") === -1) {
      html += '<section class="card news-card" aria-labelledby="news-h">' +
        '<div class="news-card-head"><h2 id="news-h">' + icon("fa-solid fa-newspaper") + "Latest News</h2>" +
        '<a href="news.html">All news</a></div>' +
        '<ul class="news-list">' + sortedNews().slice(0, count).map(newsItemHTML).join("") + "</ul>" +
      "</section>";
    }
    if (extras.indexOf("recruit") > -1 && S.recruiting && S.recruiting.open) {
      html += '<section class="card side-card recruit-card">' +
        "<h3>" + icon("fa-solid fa-user-graduate") + "Prospective students</h3>" +
        "<p>" + esc(S.recruiting.headline) + ". Interested in trustworthy AI for software engineering? Let's talk.</p>" +
        '<a class="btn btn-sm" href="group.html#join">How to apply ' + icon("fa-solid fa-arrow-right") + "</a>" +
      "</section>";
    }
    if (extras.indexOf("contact") > -1) {
      var c = S.contact || {};
      html += '<section class="card side-card">' +
        "<h3>" + icon("fa-solid fa-location-dot") + "Find me</h3>" +
        '<ul class="contact-mini">' +
          "<li>" + icon("fa-solid fa-envelope") + '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></li>" +
          "<li>" + icon("fa-solid fa-building-columns") + "<span>" + esc(c.office) + ", " + esc(S.department) + "<br>" + esc(S.university) + "</span></li>" +
          (c.showPhone ? "<li>" + icon("fa-solid fa-phone") + '<a href="tel:' + esc(c.phone.replace(/[^\d+]/g, "")) + '">' + esc(c.phone) + "</a></li>" : "") +
        "</ul>" +
      "</section>";
    }
    el.innerHTML = html + "</div>";
  };

  R_.newsArchive = function (el) {
    var items = sortedNews();
    var tags = [];
    items.forEach(function (n) { if (n.tag && tags.indexOf(n.tag) === -1) tags.push(n.tag); });
    var active = "All";
    el.innerHTML =
      '<div class="filters" role="group" aria-label="Filter news" style="margin-bottom:22px">' +
        ["All"].concat(tags).map(function (t) {
          var n = t === "All" ? items.length : items.filter(function (x) { return x.tag === t; }).length;
          return '<button class="filter-btn" type="button" data-tag="' + esc(t) + '" aria-pressed="' + (t === active) + '">' + esc(t) + ' <span class="n">' + n + "</span></button>";
        }).join("") +
      "</div><div class=\"news-archive\"></div>";
    function draw() {
      var list = items.filter(function (n) { return active === "All" || n.tag === active; });
      var byYear = {};
      list.forEach(function (n) { var y = String(n.date).slice(0, 4); (byYear[y] = byYear[y] || []).push(n); });
      var years = Object.keys(byYear).sort().reverse();
      $(".news-archive", el).innerHTML = years.map(function (y) {
        return '<div class="pub-year"><h3>' + y + '</h3><span class="line"></span><span class="n">' + byYear[y].length + "</span></div>" +
          '<div class="card"><ul class="news-list" style="padding:6px 20px 10px">' + byYear[y].map(newsItemHTML).join("") + "</ul></div>";
      }).join("") || '<p class="empty">No news yet.</p>';
    }
    $$(".filter-btn", el).forEach(function (b) {
      b.addEventListener("click", function () {
        active = b.getAttribute("data-tag");
        $$(".filter-btn", el).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        draw();
      });
    });
    draw();
  };

  /* ---------- home ---------- */
  R_.hero = function (el) {
    var c = S.contact || {};
    el.innerHTML =
      '<div class="container"><div class="hero-grid">' +
        "<div>" +
          '<div class="eyebrow">' + esc(S.department) + "</div>" +
          "<h1>" + esc(S.name) + (S.honorific ? '<span class="honorific">' + esc(S.honorific) + "</span>" : "") + "</h1>" +
          '<p class="hero-role">' + esc(S.title) + ' at <a href="' + esc(S.universityUrl) + '" target="_blank" rel="noopener">' + esc(S.university) + "</a>, " + esc(S.location) + "</p>" +
          '<p class="hero-tagline">' + esc(S.tagline) + "</p>" +
          '<div class="hero-actions">' +
            '<a class="btn btn-primary" href="' + esc(S.cv) + '"' + ext(S.cv) + ">" + icon("fa-solid fa-file-pdf") + " Download CV</a>" +
            '<a class="btn btn-ghost" href="publications.html">' + icon("fa-solid fa-book-open") + " Publications</a>" +
            '<a class="btn btn-ghost" href="mailto:' + esc(c.email) + '">' + icon("fa-solid fa-envelope") + " Email</a>" +
          "</div>" +
          profilesHTML() +
        "</div>" +
        '<div class="portrait">' +
          '<div class="portrait-frame"><span class="fallback">' + esc(initials(S.name)) + '</span>' +
            '<img src="' + esc(S.photo) + '" alt="Portrait of ' + esc(S.name) + '" width="270" height="270" onerror="this.remove()"></div>' +
        "</div>" +
      "</div>" +
      '<div data-render="stats"></div>' +
      "</div>";
  };

  R_.stats = function (el) {
    var year = new Date().getFullYear();
    var stats = [
      { n: PUBS.published.length, label: "Peer-reviewed publications" },
      { n: H.awards.length, label: "Awards and honours" },
      { n: PEOPLE.mentored.length, label: "Graduate students mentored" },
      { n: year - 2012, label: "Years of university teaching", plus: true }
    ];
    el.innerHTML = '<div class="stats">' + stats.map(function (s) {
      return '<div class="stat"><div class="stat-num"><span class="count" data-to="' + s.n + '">' + s.n + "</span>" + (s.plus ? '<span class="plus">+</span>' : "") + "</div>" +
        '<div class="stat-label">' + esc(s.label) + "</div></div>";
    }).join("") + "</div>";
    animateCounts(el);
  };

  function animateCounts(root) {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var to = +en.target.getAttribute("data-to"), t0 = performance.now(), d = 1100;
        (function step(t) {
          var p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3);
          en.target.textContent = Math.round(to * e);
          if (p < 1) requestAnimationFrame(step);
        })(t0);
      });
    }, { threshold: .4 });
    $$(".count", root).forEach(function (c) { c.textContent = "0"; io.observe(c); });
  }

  function themeCount(id) {
    return PUBS.published.concat(PUBS.underReview).filter(function (p) { return (p.themes || []).indexOf(id) > -1; }).length;
  }

  R_.themes = function (el) {
    var link = el.getAttribute("data-link") !== "false";
    el.innerHTML = '<div class="grid-3">' + R.themes.map(function (t) {
      var inner = '<span class="theme-icon">' + icon(t.icon) + "</span><h3>" + esc(t.title) + "</h3><p>" + esc(t.summary) + "</p>" +
        '<span class="count">' + themeCount(t.id) + " papers " + icon("fa-solid fa-arrow-right") + "</span>";
      return link
        ? '<a class="card card-pad card-hover theme-card" href="research.html#theme-' + esc(t.id) + '">' + inner + "</a>"
        : '<div class="card card-pad theme-card">' + inner + "</div>";
    }).join("") + "</div>";
  };

  function authorsHTML(list) {
    return list.map(function (a) {
      return a === S.name ? '<span class="me">' + esc(a) + "</span>" : esc(a);
    }).join(", ");
  }

  R_.selectedPubs = function (el) {
    var list = PUBS.published.filter(function (p) { return p.selected; }).slice(0, +el.getAttribute("data-limit") || 6);
    el.innerHTML = '<div class="card card-pad"><div class="pub-compact">' + list.map(function (p) {
      var url = p.links && (p.links.doi || p.links.pdf || p.links.preprint);
      return '<div class="pc" data-type="' + p.type + '"><div><span class="pub-venue">' + esc(p.short) + "</span></div><div>" +
        '<p class="pub-title">' + (url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>" : esc(p.title)) + "</p>" +
        '<p class="pub-authors">' + authorsHTML(p.authors) + "</p>" +
        ((p.awards || []).length ? '<div class="pub-tags">' + p.awards.map(function (a) { return '<span class="chip chip-gold">' + icon("fa-solid fa-award") + esc(a) + "</span>"; }).join("") + "</div>" : "") +
      "</div></div>";
    }).join("") + "</div></div>";
  };

  R_.honourHighlights = function (el) {
    var list = H.awards.filter(function (a) { return a.highlight; });
    el.innerHTML = '<div class="honour-grid">' + list.map(function (a) {
      return '<div class="card honour"><span class="medal">' + icon("fa-solid fa-award") + "</span><div>" +
        '<span class="y">' + a.year + "</span><h3>" + esc(a.name) + "</h3><p>" + esc(a.by) + "</p></div></div>";
    }).join("") + "</div>";
  };

  R_.career = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl now">' + SV.career.map(function (c) {
      return '<li><span class="when">' + esc(c.years) + '</span><div><div class="what">' + esc(c.role) + '</div><div class="where">' + esc(c.org) + "</div></div></li>";
    }).join("") + "</ul></div>";
  };

  R_.tribute = function (el) {
    if (!S.showTribute) { el.remove(); return; }
    el.innerHTML = '<div class="card tribute">' +
      '<img src="img/father.jpg" alt="Tarak Chandra Mondal" loading="lazy" onerror="this.remove()">' +
      "<div><div class=\"eyebrow\" style=\"margin-bottom:8px\">In loving memory</div>" +
      "<blockquote>“I will not introduce you to others. However, I hope your works be such that we can get acquainted with others through your works with respect.”</blockquote>" +
      "<cite>Tarak Chandra Mondal (1953–2013), my father</cite></div></div>";
  };

  /* ---------- research ---------- */
  R_.vision = function (el) {
    el.innerHTML = '<div class="prose">' + R.vision.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>";
  };

  R_.themeDetails = function (el) {
    var all = PUBS.published.map(function (p, i) { p._n = PUBS.published.length - i; return p; });
    el.innerHTML = R.themes.map(function (t) {
      var pubs = PUBS.underReview.concat(all).filter(function (p) { return (p.themes || []).indexOf(t.id) > -1; });
      return '<section class="section" id="theme-' + esc(t.id) + '">' +
        '<div class="card card-pad">' +
          '<div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:14px">' +
            '<span class="theme-icon">' + icon(t.icon) + "</span>" +
            '<div><h2 style="font-size:1.45rem;margin-bottom:4px">' + esc(t.title) + '</h2><p class="muted" style="margin:0">' + esc(t.summary) + "</p></div>" +
          "</div>" +
          '<div class="pub-compact" style="margin-top:6px">' + pubs.map(function (p) {
            var anchor = p.id ? "" : "publications.html#" + p.key;
            return '<div class="pc" data-type="' + p.type + '"><div><span class="pub-venue">' + esc(p.short) + "</span></div><div>" +
              '<p class="pub-title" style="font-size:1rem">' + (anchor ? '<a href="' + anchor + '">' + esc(p.title) + "</a>" : esc(p.title)) +
              (p.status ? ' <span class="pub-status">' + esc(p.status) + "</span>" : "") + "</p>" +
              '<p class="pub-authors small" style="margin:0">' + authorsHTML(p.authors) + "</p></div></div>";
          }).join("") + "</div>" +
        "</div></section>";
    }).join("");
  };

  R_.tools = function (el) {
    el.innerHTML = '<div class="grid-2">' + R.tools.map(function (t) {
      return '<div class="card card-pad card-hover"><h3 style="font-family:var(--mono);font-size:1rem;letter-spacing:.02em">' + esc(t.name) + "</h3>" +
        '<p class="small" style="margin-bottom:10px">' + esc(t.summary) + '</p><span class="chip">' + esc(t.pubs) + "</span></div>";
    }).join("") + "</div>";
  };

  R_.collaborations = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl">' + R.collaborations.map(function (c) {
      return '<li><span class="when">' + esc(c.since) + '–</span><div><div class="what">' + esc(c.who) + '</div><div class="where">' + esc(c.where) + '</div><div class="desc muted">' + esc(c.outcome) + "</div></div></li>";
    }).join("") + "</ul></div>";
  };

  /* ---------- publications ---------- */
  var TYPE_LABEL = { journal: "Journal", conference: "Conference", workshop: "Workshop", short: "Short & Track", review: "Under Review" };

  function citation(p) {
    return p.authors.join(", ") + ". " + p.title + ". " + p.venue + (p.details ? ", " + p.details.split(" · ")[0] : "") + ", " + p.year + ".";
  }

  function pubHTML(p) {
    var links = p.links || {};
    var linkDefs = [["pdf", "fa-solid fa-file-pdf", "PDF"], ["doi", "fa-solid fa-arrow-up-right-from-square", "DOI"], ["preprint", "fa-solid fa-file-lines", "Preprint"],
      ["artifact", "fa-solid fa-box-archive", "Artifact"], ["code", "fa-brands fa-github", "Code"], ["slides", "fa-solid fa-person-chalkboard", "Slides"], ["video", "fa-solid fa-circle-play", "Video"]];
    var mainUrl = links.doi || links.pdf || links.preprint;
    return '<li class="pub" id="' + esc(p.key) + '" data-type="' + p.type + '">' +
      '<div class="pub-badge-col"><span class="pub-venue">' + esc(p.short) + "</span>" +
        '<span class="pub-num">' + (p.id ? "[" + esc(p.id) + "]" : "[" + p._n + "]") + "</span></div>" +
      "<div>" +
        '<h4 class="pub-title">' + (mainUrl ? '<a href="' + esc(mainUrl) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>" : esc(p.title)) + "</h4>" +
        '<p class="pub-authors">' + authorsHTML(p.authors) + "</p>" +
        '<p class="pub-venue-full">' + esc(p.venue) + "</p>" +
        (p.details ? '<p class="pub-details">' + esc(p.details) + "</p>" : "") +
        (((p.awards || []).length || (p.notes || []).length || p.status) ? '<div class="pub-tags">' +
          (p.status ? '<span class="pub-status">' + esc(p.status) + "</span>" : "") +
          (p.awards || []).map(function (a) { return '<span class="chip chip-gold">' + icon("fa-solid fa-award") + esc(a) + "</span>"; }).join("") +
          (p.notes || []).map(function (a) { return '<span class="chip">' + esc(a) + "</span>"; }).join("") +
        "</div>" : "") +
        '<div class="pub-links">' +
          linkDefs.filter(function (d) { return links[d[0]]; }).map(function (d) {
            return '<a href="' + esc(links[d[0]]) + '" target="_blank" rel="noopener">' + icon(d[1]) + d[2] + "</a>";
          }).join("") +
          '<button type="button" data-cite="' + esc(p.key) + '">' + icon("fa-regular fa-copy") + "Cite</button>" +
        "</div>" +
      "</div></li>";
  }

  R_.publications = function (el) {
    var published = PUBS.published.map(function (p, i) { p._n = PUBS.published.length - i; return p; });
    var review = PUBS.underReview.map(function (p) { p._review = true; return p; });
    var all = published.concat(review);
    var byKey = {};
    all.forEach(function (p) { byKey[p.key] = p; });

    var params = new URLSearchParams(location.search);
    var state = { type: "all", year: "all", q: "", awarded: false, theme: params.get("theme") || "" };
    var years = [];
    published.forEach(function (p) { if (years.indexOf(p.year) === -1) years.push(p.year); });

    function count(t) {
      if (t === "all") return all.length;
      if (t === "review") return review.length;
      return published.filter(function (p) { return p.type === t; }).length;
    }
    var types = ["all", "journal", "conference", "workshop", "short", "review"].filter(function (t) { return count(t) > 0; });

    el.innerHTML =
      '<div class="pub-toolbar">' +
        '<label class="search"><span class="sr-only">Search publications</span>' + icon("fa-solid fa-magnifying-glass") +
          '<input type="search" placeholder="Search title, author, venue…" autocomplete="off"></label>' +
        '<select class="select" aria-label="Filter by year"><option value="all">All years</option>' +
          years.map(function (y) { return '<option value="' + y + '">' + y + "</option>"; }).join("") + "</select>" +
        '<div class="filters" role="group" aria-label="Filter by type">' +
          types.map(function (t) {
            return '<button class="filter-btn" type="button" data-type="' + t + '" aria-pressed="' + (t === "all") + '">' +
              (t === "all" ? "All" : TYPE_LABEL[t]) + ' <span class="n">' + count(t) + "</span></button>";
          }).join("") +
          '<button class="filter-btn" type="button" data-awarded aria-pressed="false">' + icon("fa-solid fa-award") + " Awarded</button>" +
        "</div>" +
      "</div>" +
      '<p class="pub-count" aria-live="polite"></p>' +
      '<div class="pub-results"></div>';

    function match(p) {
      if (state.type === "review" && !p._review) return false;
      if (state.type !== "all" && state.type !== "review" && (p._review || p.type !== state.type)) return false;
      if (state.year !== "all" && (p._review || String(p.year) !== state.year)) return false;
      if (state.awarded && !(p.awards || []).length) return false;
      if (state.theme && (p.themes || []).indexOf(state.theme) === -1) return false;
      if (state.q) {
        var hay = (p.title + " " + p.authors.join(" ") + " " + p.venue + " " + p.short + " " + (p.awards || []).join(" ")).toLowerCase();
        if (state.q.split(/\s+/).some(function (w) { return hay.indexOf(w) === -1; })) return false;
      }
      return true;
    }

    function draw() {
      var list = all.filter(match);
      var theme = R.themes.filter(function (t) { return t.id === state.theme; })[0];
      $(".pub-count", el).innerHTML = "Showing " + list.length + " of " + all.length +
        (theme ? ' · theme <b>' + esc(theme.title) + '</b> <a href="publications.html">clear</a>' : "");
      if (!list.length) { $(".pub-results", el).innerHTML = '<p class="empty">No publications match these filters.</p>'; return; }
      var groups = [], map = {};
      list.forEach(function (p) {
        var g = p._review ? "Under Review" : String(p.year);
        if (!map[g]) { map[g] = []; groups.push(g); }
        map[g].push(p);
      });
      $(".pub-results", el).innerHTML = groups.map(function (g) {
        return '<div class="pub-year"><h3>' + esc(g) + '</h3><span class="line"></span><span class="n">' + map[g].length + "</span></div>" +
          '<ol class="pub-list">' + map[g].map(pubHTML).join("") + "</ol>";
      }).join("");
    }

    $("input", el).addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); draw(); });
    $("select", el).addEventListener("change", function (e) { state.year = e.target.value; draw(); });
    $$("[data-type]", $(".filters", el)).forEach(function (b) {
      b.addEventListener("click", function () {
        state.type = b.getAttribute("data-type");
        $$("[data-type]", $(".filters", el)).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        draw();
      });
    });
    $("[data-awarded]", el).addEventListener("click", function (e) {
      state.awarded = !state.awarded;
      e.currentTarget.setAttribute("aria-pressed", String(state.awarded));
      draw();
    });
    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cite]");
      if (b) copyText(citation(byKey[b.getAttribute("data-cite")]));
    });
    draw();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView({ block: "center" }); }, 60); }
  };

  /* ---------- group ---------- */
  function personHTML(p, extra) {
    return '<div class="card person">' +
      '<span class="avatar">' + (p.photo ? '<img src="' + esc(p.photo) + '" alt="">' : esc(initials(p.name))) + "</span>" +
      "<div><h3>" + (p.url ? '<a href="' + esc(p.url) + '"' + ext(p.url) + ">" + esc(p.name) + "</a>" : esc(p.name)) + "</h3>" +
      '<span class="lvl">' + esc(p.level || p.role) + " · " + esc(p.years || p.since) + "</span>" + extra + "</div></div>";
  }

  R_.currentMembers = function (el) {
    if (!PEOPLE.current.length) {
      el.innerHTML = '<div class="card card-pad" style="text-align:center;border-style:dashed">' +
        '<span class="theme-icon" style="margin:0 auto 12px">' + icon("fa-solid fa-seedling") + "</span>" +
        "<h3>Founding members wanted</h3>" +
        '<p class="muted" style="max-width:52ch;margin:0 auto 16px">The group is just getting started at Lakehead. Join as one of the first students and help shape its direction, tools, and culture.</p>' +
        '<a class="btn btn-primary" href="#join">See how to join</a></div>';
      return;
    }
    el.innerHTML = '<div class="grid-2">' + PEOPLE.current.map(function (p) {
      return personHTML(p, p.topic ? "<p>" + esc(p.topic) + "</p>" : "");
    }).join("") + "</div>";
  };

  R_.mentored = function (el) {
    el.innerHTML = '<div class="grid-2">' + PEOPLE.mentored.map(function (p) {
      return personHTML(p,
        "<p>" + esc(p.work) + "</p>" +
        (p.award ? '<p class="small">' + icon("fa-solid fa-award") + " " + esc(p.award) + "</p>" : "") +
        (p.now ? '<p class="small now">' + icon("fa-solid fa-arrow-right") + " Now: " + esc(p.now) + "</p>" : ""));
    }).join("") + "</div>";
  };

  R_.undergrad = function (el) {
    el.innerHTML = '<div class="grid-3">' + PEOPLE.undergrad.map(function (u) {
      return '<div class="card card-pad"><span class="chip" style="margin-bottom:10px">' + esc(u.years) + "</span><h3>" + esc(u.title) + '</h3><p class="small muted" style="margin:0 0 6px">' + esc(u.where) + '</p><p class="small" style="margin:0">' + esc(u.text) + "</p></div>";
    }).join("") + "</div>";
  };

  /* ---------- teaching ---------- */
  R_.philosophy = function (el) {
    el.innerHTML = '<div class="prose">' + T.philosophy.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      '<div class="grid-2" style="margin-top:18px">' + T.pillars.map(function (p) {
        return '<div class="card card-pad theme-card"><span class="theme-icon">' + icon(p.icon) + "</span><h3>" + esc(p.title) + "</h3><p>" + esc(p.text) + "</p></div>";
      }).join("") + "</div>";
  };

  R_.curriculum = function (el) {
    el.innerHTML = '<div class="rows">' + T.curriculum.map(function (c) {
      return '<article class="card card-pad"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">' +
        '<span class="chip chip-brand">' + esc(c.code) + '</span><span class="chip">' + esc(c.term) + '</span><span class="chip chip-gold">' + esc(c.role) + "</span></div>" +
        "<h3>" + esc(c.title) + '</h3><p class="small muted" style="margin:0 0 8px">' + esc(c.where) + '</p><p style="margin:0">' + esc(c.text) + "</p></article>";
    }).join("") + "</div>";
  };

  R_.courses = function (el) {
    el.innerHTML = T.courses.map(function (g) {
      return '<div class="course-group"><h3>' + esc(g.group) + '</h3><ul class="courses">' + g.items.map(function (c) {
        return '<li><span class="code">' + esc(c.code) + (c.term ? '<br><span class="muted" style="font-weight:400">' + esc(c.term) + "</span>" : "") + '</span><span class="t">' + esc(c.title) + '</span><span class="r">' + esc(c.role) + (c.note ? "<br>" + esc(c.note) : "") + "</span></li>";
      }).join("") + "</ul></div>";
    }).join("");
  };

  R_.training = function (el) {
    el.innerHTML = '<div class="pill-row">' + T.training.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>";
  };

  /* ---------- honours ---------- */
  var STATUS = { active: ["Active", "chip-ok"], declined: ["Awarded · declined", "chip-gold"], pending: ["Under review", ""], completed: ["Completed", ""] };
  R_.grants = function (el) {
    var list = H.grants.filter(function (g) { return g.status !== "pending" || S.showPendingGrants; });
    el.innerHTML = '<div class="rows">' + list.map(function (g) {
      var st = STATUS[g.status] || [g.status, ""];
      return '<article class="card row-card"><div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px"><span class="chip">' + g.year + '</span><span class="chip ' + st[1] + '">' + esc(st[0]) + "</span></div>" +
        "<h3>" + esc(g.name) + "</h3>" +
        (g.title ? '<p class="small" style="margin:0 0 4px;font-style:italic">' + esc(g.title) + "</p>" : "") +
        '<div class="meta">' + esc(g.role) + " · " + esc(g.period) + (g.note ? " · " + esc(g.note) : "") + "</div>" +
        '</div><div class="amount">' + esc(g.amount) + "</div></article>";
    }).join("") + "</div>";
  };

  R_.awards = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl collapsible collapsed">' + H.awards.map(function (a) {
      return '<li><span class="when">' + a.year + '</span><div><div class="what">' + (a.highlight ? icon("fa-solid fa-award") + " " : "") + esc(a.name) + '</div><div class="where">' + esc(a.by) + "</div></div></li>";
    }).join("") + "</ul>" + showMoreBtn(H.awards.length) + "</div>";
    wireShowMore(el);
  };

  R_.scholarships = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl collapsible collapsed">' + H.scholarships.map(function (s) {
      return '<li><span class="when">' + esc(s.years) + '</span><div><div class="what">' + esc(s.name) + '</div><div class="where">' + esc(s.by) + (s.amount ? " · " + esc(s.amount) : "") + "</div></div></li>";
    }).join("") + "</ul>" + showMoreBtn(H.scholarships.length) + "</div>";
    wireShowMore(el);
  };

  function showMoreBtn(n) {
    return n > 8 ? '<button class="btn btn-ghost btn-sm show-more" type="button" data-n="' + n + '">Show all ' + n + "</button>" : "";
  }
  function wireShowMore(el) {
    var b = $(".show-more", el);
    if (!b) return;
    b.addEventListener("click", function () {
      var ul = $(".collapsible", el);
      var collapsed = ul.classList.toggle("collapsed");
      b.textContent = collapsed ? "Show all " + b.getAttribute("data-n") : "Show fewer";
    });
  }

  /* ---------- service ---------- */
  R_.committees = function (el) {
    var byYear = {}, years = [];
    SV.committees.forEach(function (c) { if (!byYear[c.year]) { byYear[c.year] = []; years.push(c.year); } byYear[c.year].push(c); });
    el.innerHTML = '<div class="card card-pad"><ul class="tl">' + years.map(function (y) {
      return '<li><span class="when">' + y + "</span><div>" + byYear[y].map(function (c) {
        var v = c.url ? '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.venue) + "</a>" : esc(c.venue);
        return '<div style="margin-bottom:4px"><span class="what">' + esc(c.role) + "</span>, " + v + ' <span class="where">(' + esc(c.track) + ")</span></div>";
      }).join("") + "</div></li>";
    }).join("") + "</ul></div>";
  };

  R_.journals = function (el) {
    el.innerHTML = '<div class="grid-3">' + SV.journals.map(function (j) {
      return '<div class="card card-pad"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">' +
        '<h3 style="font-family:var(--mono);font-size:1.05rem;margin:0">' + esc(j.short) + '</h3><span class="chip">since ' + j.since + "</span></div>" +
        '<p class="small muted" style="margin:6px 0 10px">' + esc(j.name) + "</p>" +
        '<div class="stat-num" style="font-size:1.5rem">' + j.count + '<span class="small muted" style="font-family:var(--sans);margin-left:6px">manuscript' + (j.count > 1 ? "s" : "") + "</span></div></div>";
    }).join("") + "</div>";
  };

  R_.subReviewer = function (el) {
    el.innerHTML = '<div class="pill-row">' + SV.subReviewer.map(function (v) { return '<span class="chip chip-brand">' + esc(v) + "</span>"; }).join("") + "</div>";
  };

  R_.leadership = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl collapsible collapsed">' + SV.leadership.map(function (l) {
      return '<li><span class="when">' + esc(l.years) + '</span><div><div class="what">' + esc(l.role) + '</div><div class="where">' + esc(l.org) + "</div>" + (l.text ? '<div class="desc">' + esc(l.text) + "</div>" : "") + "</div></li>";
    }).join("") + "</ul>" + showMoreBtn(SV.leadership.length) + "</div>";
    wireShowMore(el);
  };

  R_.talks = function (el) {
    el.innerHTML = '<div class="card card-pad"><ul class="tl collapsible collapsed">' + SV.talks.map(function (t) {
      return '<li><span class="when">' + t.year + '</span><div><div class="what" style="font-weight:500">' + esc(t.title) + (t.invited ? ' <span class="chip chip-gold" style="margin-left:4px">Invited</span>' : "") + '</div><div class="where">' + esc(t.venue) + "</div></div></li>";
    }).join("") + "</ul>" + showMoreBtn(SV.talks.length) + "</div>";
    wireShowMore(el);
  };

  /* ---------- contact ---------- */
  R_.contactCard = function (el) {
    var c = S.contact || {};
    el.innerHTML = '<div class="card card-pad"><ul class="contact-mini" style="font-size:1rem;gap:16px">' +
      "<li>" + icon("fa-solid fa-envelope") + '<div><div class="small muted">Email (preferred)</div><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" +
        (c.altEmail ? '<div class="small muted" style="margin-top:2px">Alternate: <a href="mailto:' + esc(c.altEmail) + '">' + esc(c.altEmail) + "</a></div>" : "") + "</div></li>" +
      "<li>" + icon("fa-solid fa-building-columns") + '<div><div class="small muted">Office</div>' + esc(c.office) + "<br>" + esc(S.department) + "<br>" + esc(S.university) + "</div></li>" +
      "<li>" + icon("fa-solid fa-location-dot") + '<div><div class="small muted">Mailing address</div>' + (c.address || []).map(esc).join("<br>") + "</div></li>" +
      (c.showPhone ? "<li>" + icon("fa-solid fa-phone") + '<div><div class="small muted">Phone</div><a href="tel:' + esc(c.phone.replace(/[^\d+]/g, "")) + '">' + esc(c.phone) + "</a></div></li>" : "") +
      "</ul></div>";
  };

  R_.map = function (el) {
    var src = (S.contact || {}).mapEmbed;
    if (!src) { el.remove(); return; }
    el.innerHTML = '<iframe class="map" src="' + esc(src) + '" title="Map of ' + esc(S.university) + '" loading="lazy"></iframe>';
  };

  R_.profiles = function (el) { el.innerHTML = profilesHTML(); };

  /* ---------- simple bindings ---------- */
  function bind() {
    $$("[data-text]").forEach(function (el) { var v = get(S, el.getAttribute("data-text")); if (v != null) el.textContent = v; });
    $$("[data-href]").forEach(function (el) {
      var key = el.getAttribute("data-href"), v = get(S, key);
      if (v == null) return;
      el.setAttribute("href", key.indexOf("email") > -1 ? "mailto:" + v : v);
      if (/^https?:/.test(v)) { el.target = "_blank"; el.rel = "noopener"; }
    });
    $$("[data-if]").forEach(function (el) { if (!get(S, el.getAttribute("data-if"))) el.remove(); });
  }

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$("main .section").forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // already visible
      s.classList.add("reveal"); io.observe(s);
    });
  }

  /* ---------- boot ---------- */
  function renderAll(root) {
    $$("[data-render]", root).forEach(function (el) {
      var name = el.getAttribute("data-render");
      el.removeAttribute("data-render");
      if (R_[name]) {
        try { R_[name](el); renderAll(el); } catch (err) { console.error("Render failed: " + name, err); }
      }
    });
  }

  renderChrome();
  bind();
  renderAll(document);
  reveal();
})();
