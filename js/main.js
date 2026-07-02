/* =============================================================
   MAIN — Lenis smooth scroll, particle field, navigation, progress
   ============================================================= */

(function () {
  'use strict';

  // ============================================================
  // 1. Lenis smooth scrolling
  // ============================================================
  function initLenis() {
    if (typeof Lenis === 'undefined') return null;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Connect to ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    // Anchor link smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        }
      });
    });

    return lenis;
  }

  // ============================================================
  // 2. Particle field (ambient floating dots)
  // ============================================================
  function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w, h, particles;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let scrollVelocity = 0;
    let lastScroll = 0;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      const count = Math.max(20, Math.min(80, Math.floor((w * h) / 22000)));
      particles = new Array(count).fill(0).map(() => createParticle());
    }

    function createParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.4 + 0.2,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);

      // Apply scroll-based vertical drift
      const drift = scrollVelocity * 0.5;

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy + drift * 0.1;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Twinkle
        const twinkle = 0.6 + 0.4 * Math.sin(t * 0.001 + p.phase);

        // Draw particle with gradient color
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        gradient.addColorStop(0, `rgba(99, 102, 241, ${p.a * twinkle})`);
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${p.a * twinkle * 0.4})`);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();

        // Solid core
        ctx.fillStyle = `rgba(255, 255, 255, ${p.a * twinkle * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD = 140;
          if (d2 < maxD * maxD) {
            const alpha = (1 - Math.sqrt(d2) / maxD) * 0.15;
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha})`);
            gradient.addColorStop(1, `rgba(34, 211, 238, ${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      scrollVelocity = (current - lastScroll) * 0.3;
      lastScroll = current;
      // Decay velocity
      requestAnimationFrame(() => {
        scrollVelocity *= 0.9;
      });
    }, { passive: true });

    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(resize, 200);
    });

    resize();
    requestAnimationFrame(draw);
  }

  // ============================================================
  // 3. Finale star field
  // ============================================================
  function initFinaleStars() {
    const canvas = document.getElementById('finaleStars');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h, stars;

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      const count = Math.max(80, Math.min(180, Math.floor((w * h) / 9000)));
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.7 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.3,
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        const twinkle = 0.4 + 0.6 * Math.sin(t * 0.001 * s.speed + s.phase);
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        const mix = s.x / w;
        const r = Math.floor(99 + (34 - 99) * mix);
        const g = Math.floor(102 + (211 - 102) * mix);
        const b = 241;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${s.a * twinkle})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${s.a * twinkle})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(resize, 200);
    });

    resize();
    requestAnimationFrame(draw);
  }

  // ============================================================
  // 4. Navigation (mobile drawer + scroll state + light theme)
  // ============================================================
  function initNavigation() {
    const burger = document.getElementById('navBurger');
    const drawer = document.getElementById('navDrawer');
    const pill = document.querySelector('.nav-pill');

    if (burger && drawer) {
      burger.addEventListener('click', () => {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isOpen);
        drawer.setAttribute('aria-hidden', isOpen);
        document.body.classList.toggle('no-scroll', !isOpen);
      });

      // Close drawer when link clicked
      drawer.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
          burger.setAttribute('aria-expanded', 'false');
          drawer.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('no-scroll');
        });
      });
    }

    // Track which section is in view and toggle nav theme
    if (pill) {
      let lastY = 0;
      let isLight = false;

      const lightSections = document.querySelectorAll('.section--light');
      const updateNavTheme = () => {
        const navY = 80; // nav center area
        let nowLight = false;
        for (const s of lightSections) {
          const rect = s.getBoundingClientRect();
          if (rect.top <= navY && rect.bottom >= navY) {
            nowLight = true;
            break;
          }
        }
        if (nowLight !== isLight) {
          isLight = nowLight;
          if (isLight) {
            pill.classList.add('nav-pill--light');
          } else {
            pill.classList.remove('nav-pill--light');
          }
        }
      };

      window.addEventListener(
        'scroll',
        () => {
          const y = window.scrollY;
          // Background opacity based on scroll
          if (y > 100 && lastY <= 100) {
            pill.style.setProperty('--nav-bg', isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(10, 11, 16, 0.85)');
          } else if (y <= 100 && lastY > 100) {
            pill.style.setProperty('--nav-bg', isLight ? 'rgba(255, 255, 255, 0.75)' : 'rgba(10, 11, 16, 0.6)');
          }
          lastY = y;
          updateNavTheme();
        },
        { passive: true }
      );
      // Initial state
      pill.style.setProperty('--nav-bg', 'rgba(10, 11, 16, 0.6)');
    }
  }

  // ============================================================
  // 5. Scroll progress bar
  // ============================================================
  function initProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    function update() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      bar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // ============================================================
  // 6. Reveal observer (fallback for non-GSAP)
  // ============================================================
  function initRevealObserver() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // GSAP will handle this
      return;
    }

    const items = document.querySelectorAll('[data-reveal], [data-reveal-line]');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));
  }

  // ============================================================
  // 7. Counters (simple version)
  // ============================================================
  function initCounters() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      return; // GSAP will handle
    }
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const isFloat = target % 1 !== 0;
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ============================================================
  // 8. Flow step observer
  // ============================================================
  function initFlowSteps() {
    const steps = document.querySelectorAll('.flow-step');
    if (!steps.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
    );

    steps.forEach((s) => observer.observe(s));
  }

  // ============================================================
  // 9. Timeline items observer
  // ============================================================
  function initTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((i) => observer.observe(i));
  }

  // ============================================================
  // 10. Vanilla Tilt initialization
  // ============================================================
  function initTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    const elements = document.querySelectorAll('[data-tilt]');
    if (!elements.length) return;
    VanillaTilt.init(elements, {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
      perspective: 1000,
      scale: 1.02,
    });
  }

  // ============================================================
  // 11. Footer year
  // ============================================================
  function initFooter() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    initLenis();
    initParticles();
    initFinaleStars();
    initNavigation();
    initProgress();
    initRevealObserver();
    initCounters();
    initFlowSteps();
    initTimelineItems();
    initTilt();
    initFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
