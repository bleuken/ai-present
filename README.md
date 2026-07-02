# Artificial Intelligence: The Brain of Modern Technology

A cinematic, scroll-driven educational experience about AI — built as a single-page web experience that feels comparable to Awwwards / FWA / CSS Design Awards.

## What's inside

```
ai-presentation/
├── index.html          # Semantic HTML5 structure (1,546 lines)
├── css/
│   └── main.css        # Design system + all section styles (1,944 lines)
├── js/
│   ├── three-scene.js  # 3D AI brain (Three.js, 241 lines)
│   ├── main.js         # Lenis smooth scroll, particles, nav (430 lines)
│   └── animations.js   # GSAP ScrollTrigger choreography (435 lines)
├── DESIGN.md           # Design system reference (359 lines)
├── serve.cjs           # Tiny local dev server (Node, no dependencies)
└── README.md
```

**Total: ~4,955 lines, ~196 KB of hand-written code.** No build step. No package.json. No external image assets.

## Visual / interactive features

- **3D AI brain** — Three.js icosahedron with custom wireframe, neural point cloud, connections, orbiting satellites, mouse-reactive parallax
- **Glassmorphism** — translucent dark surfaces with backdrop-blur, whisper-thin borders, subtle inner highlights
- **Aurora gradients** — four animated radial gradients (indigo, cyan, violet, pink), each on a 28-40s breathing cycle
- **Mesh gradient + grain** — ambient atmospheric depth
- **Particle field** — canvas-rendered ambient particles with proximity connections
- **Lenis smooth scroll** — silky scrolling, wired to GSAP ScrollTrigger
- **Scroll-driven reveals** — every section animates in as it enters the viewport
- **Pinned horizontal timeline** — the AI history scrolls horizontally while pinned
- **Counter animations** — all stats animate from 0 to target on view
- **Vanilla Tilt** — 3D card tilt on hover for hero, industry, and feature cards
- **Cinematic light/dark cadence** — dark "thinking" sections alternate with light "explanation" chapters
- **Adaptive nav** — glass pill that switches dark/light based on which section you're in
- **Scroll progress bar** — gradient fill at top of viewport
- **Star field finale** — canvas-rendered twinkling stars

## Sections (11)

1. **Hero** — full-screen, 3D brain, title reveal, stats
2. **What is AI?** — 3 concept cards (Human Brain / Neural Network / Computer Learning)
3. **How AI Works** — 5-step vertical flow (Data → Learning → Training → Prediction → Decision)
4. **Key Features** — 5 glass cards (ML, DL, NLP, CV, Automation)
5. **Real-World Applications** — 5 industry mega-cards (Healthcare, Education, Business, Transportation, Finance)
6. **Benefits** — 6 animated counters (40x, 35%, 30%, 24/7, 100%, 8B)
7. **Challenges & Risks** — 5 warning cards (Security, Privacy, Ethics, Employment, Cost)
8. **AI Around Us** — animated city + 9 service chips
9. **Timeline** — 7 pinned horizontal scroll milestones (1950 → Future)
10. **Future of AI** — 8 floating topic cards
11. **Finale** — "Thank You" with star field, quote, signature

## How to run

The site is fully static. Any HTTP server works.

```bash
# Option 1: Use the included Node server (no install)
node serve.cjs

# Option 2: Python
python -m http.server 8000

# Option 3: Just open index.html directly
# (some animations may not work without HTTP — file:// CORS can block CDN scripts)
```

Then open `http://127.0.0.1:8000` (or whatever port).

## Tech

- **HTML5** — semantic, accessible
- **CSS3** — custom properties, `clamp()` fluid typography, `backdrop-filter`, `grid`, GPU-composited animations
- **Vanilla JavaScript (ES2020+)** — no build, no framework
- **GSAP 3.12** + **ScrollTrigger** — scroll-driven animation choreography
- **Lenis 1.1** — smooth scroll
- **Three.js 0.149** — 3D brain (3D, not deprecated)
- **Vanilla Tilt 1.8** — card 3D tilt
- **Inter Variable** + **JetBrains Mono** (Google Fonts)
- All icons: hand-built inline SVG (no external icon library, no font icons)

## Design system

See `DESIGN.md` for the full design system: colors, typography, spacing, components, depth/elevation, do's & don'ts, responsive behavior.

Key tokens:
- Canvas: `#05060a` (void black) / `#fafafb` (pearl light)
- Brand signature: `linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)`
- Glass surface: `rgba(255,255,255,0.04)` + `backdrop-filter: blur(20px)`
- Text on dark: `#f5f5f7` / `#a1a1aa` / `#71717a`
- Inter Variable with `font-feature-settings: 'cv11', 'ss01', 'ss03'`

## Asset attribution

**All visual assets on this website were generated or hand-built using code (SVG, CSS, Three.js) for educational purposes.** No copyrighted images, no third-party illustrations, no AI image generations — everything you see is code.

## Browser support

Tested in Chromium. The site uses modern CSS (`backdrop-filter`, `clamp()`, custom properties) and modern JS (ES2020+). Target browsers: Chrome 88+, Edge 88+, Firefox 103+, Safari 15.4+.
