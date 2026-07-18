/* Emotional Alchemy — progressive enhancement only.
   The page is complete and readable without this file; JS adds motion,
   the mobile menu, and scroll-driven orientation. No dependencies. */
(function () {
  'use strict';

  var doc = document;
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* --- Footer year ---------------------------------------------------- */
  var yearEl = doc.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* --- Header compaction on scroll ----------------------------------- */
  var header = doc.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Mobile navigation --------------------------------------------- */
  var toggle = doc.getElementById('nav-toggle');
  var nav = doc.getElementById('primary-nav');
  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setNav(false);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') setNav(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 960) setNav(false);
    });
  }

  /* --- Prepare symbol stroke lengths for the draw-in effect ---------- */
  var drawBoxes = Array.prototype.slice.call(doc.querySelectorAll('.draw'));
  drawBoxes.forEach(function (box) {
    var strokes = box.querySelectorAll('[data-stroke]');
    Array.prototype.forEach.call(strokes, function (s) {
      var len = 400;
      try { if (s.getTotalLength) len = s.getTotalLength(); } catch (e) { /* keep default */ }
      s.style.setProperty('--len', String(Math.ceil(len) + 1));
    });
  });

  /* --- Reveals + symbol draw ----------------------------------------- */
  var revealEls = Array.prototype.slice.call(doc.querySelectorAll('.reveal'));

  if (reduceMotion || !hasIO) {
    // Settle everything into its final state immediately.
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    drawBoxes.forEach(function (el) { el.classList.add('is-drawn'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          revealIO.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { revealIO.observe(el); });

    var drawIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-drawn');
          drawIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.25 });
    drawBoxes.forEach(function (el) { drawIO.observe(el); });
  }

  /* --- Progress rail + active-section state (not motion) ------------- */
  if (hasIO) {
    var rail = doc.getElementById('progress-rail');
    var journey = doc.getElementById('stages');
    var railLinks = rail ? Array.prototype.slice.call(rail.querySelectorAll('a')) : [];
    var stages = Array.prototype.slice.call(doc.querySelectorAll('.stage'));

    if (rail && journey) {
      var railVisIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          rail.classList.toggle('is-visible', en.isIntersecting);
        });
      }, { threshold: 0, rootMargin: '-25% 0px -30% 0px' });
      railVisIO.observe(journey);
    }

    if (stages.length && railLinks.length) {
      var stageIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var target = '#' + en.target.id;
          railLinks.forEach(function (a) {
            a.setAttribute('aria-current', a.getAttribute('href') === target ? 'true' : 'false');
          });
        });
      }, { threshold: 0.5 });
      stages.forEach(function (s) { stageIO.observe(s); });
    }

    // Active top-nav link
    var navLinks = Array.prototype.slice.call(doc.querySelectorAll('.primary-nav .nav-link'));
    var pairs = [];
    navLinks.forEach(function (a) {
      var sel = a.getAttribute('href');
      if (sel && sel.charAt(0) === '#' && sel.length > 1) {
        var t = doc.querySelector(sel);
        if (t) pairs.push({ link: a, target: t });
      }
    });
    if (pairs.length) {
      var navIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          navLinks.forEach(function (a) { a.classList.remove('is-active'); });
          for (var i = 0; i < pairs.length; i++) {
            if (pairs[i].target === en.target) { pairs[i].link.classList.add('is-active'); break; }
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      pairs.forEach(function (p) { navIO.observe(p.target); });
    }
  }
})();
