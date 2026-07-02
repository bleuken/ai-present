/* =============================================================
   GSAP ANIMATIONS — ScrollTrigger per-section choreography
   ============================================================= */

(function () {
  'use strict';

  function init() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      // Fallback handled by main.js
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ============================================================
    // HERO — Initial reveal choreography
    // ============================================================
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
      .to('.hero__eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .to('.hero__title-line .hero__title-word', {
        y: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: 'expo.out',
      }, '-=0.4')
      .to('.hero__subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to('.hero__description', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to('.hero__actions', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.5')
      .to('.hero__stats', {
        opacity: 1,
        y: 0,
        duration: 0.9,
      }, '-=0.5')
      .to('.hero__scroll', {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3');

    // Hero stats counters
    document.querySelectorAll('.hero__stat-value[data-counter]').forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 2,
        delay: 1.5,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = (isFloat ? obj.v.toFixed(1) : Math.floor(obj.v)) + suffix;
        },
      });
    });

    // ============================================================
    // 3D BRAIN — Parallax with scroll
    // ============================================================
    const brain = document.getElementById('heroBrain');
    if (brain) {
      gsap.to(brain, {
        yPercent: 30,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // ============================================================
    // SECTION REVEALS — Generic scroll-triggered reveals
    // ============================================================
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      // Use fromTo so we explicitly set both from and to (CSS sets opacity:0)
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ============================================================
    // SECTION REVEAL LINES (titles) — Word-by-word reveal
    // ============================================================
    document.querySelectorAll('[data-reveal-line]').forEach((el) => {
      // First animate the parent's opacity (CSS sets it to 0)
      gsap.to(el, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      // Then animate the words' y from 110% to 0
      const words = el.querySelectorAll('span');
      gsap.fromTo(words,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // ============================================================
    // CONCEPT GRID — Staggered card reveals with 3D depth
    // ============================================================
    gsap.from('.concept-card', {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.concept-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // FLOW DIAGRAM — Pin + step reveals
    // ============================================================
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, i) => {
      gsap.to(step, {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: step,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from(step.querySelector('.flow-step__body'), {
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    });

    // ============================================================
    // FEATURES — Staggered card reveals
    // ============================================================
    gsap.from('.feature-card', {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // APPLICATIONS — Staggered card reveals with rotation
    // ============================================================
    gsap.from('.industry-card', {
      y: 80,
      opacity: 0,
      rotationX: -10,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.applications-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // BENEFITS — Counter animations on view
    // ============================================================
    document.querySelectorAll('.benefit-card__value [data-counter]').forEach((el) => {
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = (isFloat ? obj.v.toFixed(1) : Math.floor(obj.v)) + suffix;
        },
      });
    });

    gsap.from('.benefit-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // CHALLENGES — Stagger warning cards
    // ============================================================
    gsap.from('.challenge-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.challenges-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // AROUND US — City parallax + service chips
    // ============================================================
    gsap.from('.city', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.city-wrap',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.service-chip', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.city-services',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // TIMELINE — Horizontal scroll pin
    // ============================================================
    const timelineSection = document.getElementById('timeline');
    const timelinePin = document.getElementById('timelinePin');
    const timelineTrack = timelinePin ? timelinePin.querySelector('.timeline-track') : null;
    const timelineProgress = document.getElementById('timelineProgress');

    if (timelineSection && timelinePin && timelineTrack) {
      const items = timelineTrack.querySelectorAll('.timeline-item');
      const trackWidth = timelineTrack.scrollWidth;
      const pinWidth = timelinePin.clientWidth;
      const distance = trackWidth - pinWidth + 100; // extra padding

      // Only enable horizontal scroll on desktop
      if (window.innerWidth > 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: timelineSection,
            start: 'top top',
            end: () => `+=${distance + window.innerHeight * 0.5}`,
            pin: timelinePin,
            scrub: 0.6,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (timelineProgress) {
                timelineProgress.style.setProperty('--progress', `${self.progress * 100}%`);
              }
            },
          },
        });

        tl.to(timelineTrack, {
          x: -distance,
          ease: 'none',
        });

        // Parallax year numbers
        items.forEach((item, i) => {
          gsap.to(item.querySelector('.timeline-item__year'), {
            y: -20 * (i % 2 === 0 ? 1 : -1),
            ease: 'none',
            scrollTrigger: {
              trigger: timelineSection,
              start: 'top top',
              end: () => `+=${distance + window.innerHeight * 0.5}`,
              scrub: true,
            },
          });
        });
      } else {
        // Mobile: vertical stack, no pin
        if (timelineTrack) {
          timelineTrack.style.flexDirection = 'column';
          timelineTrack.style.alignItems = 'stretch';
          timelineTrack.style.padding = '32px 20px';
        }
        if (timelineProgress) {
          timelineProgress.style.display = 'none';
        }
      }
    }

    // ============================================================
    // FUTURE GRID — Stagger with float
    // ============================================================
    gsap.from('.future-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.future-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // ============================================================
    // FINALE — Cinematic reveal
    // ============================================================
    const finaleTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#finale',
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    finaleTl
      .to('.finale__eyebrow', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
      .to('.finale__title-word', {
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      }, '-=0.4')
      .to('.finale__subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to('.finale__quote', {
        opacity: 1,
        y: 0,
        duration: 0.9,
      }, '-=0.5')
      .to('.finale__actions', {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }, '-=0.5')
      .to('.finale__signature', {
        opacity: 1,
        y: 0,
        duration: 0.7,
      }, '-=0.4');

    // Parallax stars on finale
    const finaleCanvas = document.getElementById('finaleStars');
    if (finaleCanvas) {
      gsap.to(finaleCanvas, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#finale',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // ============================================================
    // SECTION BACKGROUND COLOR TRANSITIONS
    // ============================================================
    // Ensure scrolltrigger recalculates after layout
    ScrollTrigger.refresh();
  }

  // Wait for all libraries to be ready
  function start() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(start, 50);
      return;
    }
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
