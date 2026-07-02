# Design System: AI — The Brain of Modern Technology

> Cinematic educational experience. Dark-mode-native with alternating cinematic light chapters.  
> Inspired by Linear (dark glassmorphism), Vercel (precision), Apple (rhythm), Stripe (premium gradients).

---

## 1. Visual Theme & Atmosphere

A scroll-driven, cinematic story about Artificial Intelligence. The visual language oscillates between **deep-space darkness** and **frosted glass light chapters**, mirroring the duality of AI itself — invisible mathematics one moment, then suddenly illuminating the world.

The page is dark-mode-native (`#05060a` canvas) where the AI "thinks" — content emerges from darkness like signals firing through a network. Strategic light chapters (`#f5f5f7`) act as cinematic "outro" beats, breaking tension and presenting concrete ideas (applications, benefits, timeline) on neutral, editorial surfaces before pulling the user back into the dark. The system is binary by design: black is mystery and computation, white is clarity and human-readable output.

Typography is engineered for a **premium, Awwwards-grade voice**. Inter Variable carries the entire system — geometric, restrained, with negative letter-spacing at display sizes for compressed authority. Weights stay narrow: 300 (light, used on subtle supporting text), 400 (body), 500 (emphasis/UI), 600 (headings), 700 (display only). No Inter substitutes, no "Comic Sans for AI".

Color is **almost entirely achromatic** — blacks, grays, white — punctuated by a **single chromatic signature**: the AI Indigo→Cyan spectrum (`#6366f1` → `#22d3ee`). This is the only place color exists in the system. It represents electricity, signal, computation, intelligence. The indigo-to-cyan gradient is reserved for primary CTAs, active states, the 3D brain, neural connections, animated particles, and progress.

The interface is **depth-rich but UI-quiet**. Every panel, card, and section uses glassmorphism — translucent dark surfaces (`rgba(255,255,255,0.03)` to `rgba(255,255,255,0.06)`) with `backdrop-filter: blur(20px)` and ultra-thin borders (`rgba(255,255,255,0.08)`). No flat surfaces. No solid colored buttons. The user feels like they're looking through a window into a thinking machine.

**Key Characteristics:**
- Dark-mode-native canvas `#05060a` with cinematic `#f5f5f7` light chapters
- Single chromatic signature: AI Indigo (`#6366f1`) → AI Cyan (`#22d3ee`) gradient
- Glassmorphism everywhere: translucent surfaces, backdrop-blur, whisper-thin borders
- Inter Variable with aggressive negative letter-spacing at display (-2px to -3px)
- 3D AI brain as the hero centerpiece — Three.js icosahedron with neural point connections
- Continuous aurora gradient background — slow, ambient, never static
- Three-tier section rhythm: dark "thinking" → light "explaining" → dark "future"
- Cinematic scroll-driven storytelling with pinned sections, horizontal timelines, parallax
- Floating SVG illustrations everywhere — no raster images, no placeholders
- 60 FPS target using GPU-composited transforms only (no layout animations)

---

## 2. Color Palette & Roles

### Background Surfaces (Dark Mode — Primary)
- **Void Black** (`#05060a`): The page canvas. Deepest background. Hero, all "thinking" sections.
- **Surface 1** (`#0a0b10`): Section background variation. One step up from void.
- **Surface 2** (`#10111a`): Card background, panels. Two steps up.
- **Surface 3** (`#16171f`): Elevated cards, dropdowns, modals. Three steps up.
- **Surface 4** (`#1d1e28`): Highest elevation. Hover states, active panels.

### Background Surfaces (Light Chapters — Cinematic Out)
- **Pearl White** (`#fafafb`): Light chapter background. Primary editorial surface.
- **Off-White** (`#f5f5f7`): Secondary light surface. Slight gray cast for depth.
- **Card White** (`#ffffff`): Cards on light chapters. Pure white for contrast.

### Glassmorphism (Dark Surfaces)
- **Glass 1** (`rgba(255,255,255,0.02)`): Whisper-subtle. Used for tooltips.
- **Glass 2** (`rgba(255,255,255,0.04)`): Standard. Most cards on dark.
- **Glass 3** (`rgba(255,255,255,0.06)`): Elevated. Featured cards, panels.
- **Glass 4** (`rgba(255,255,255,0.08)`): Highest. Active states, hover.

### Glassmorphism (Light Chapters)
- **Light Glass 1** (`rgba(0,0,0,0.02)`): Whisper glass on light.
- **Light Glass 2** (`rgba(0,0,0,0.04)`): Standard light glass.

### Borders (Dark Surfaces)
- **Border Subtle** (`rgba(255,255,255,0.05)`): Default border on dark.
- **Border Standard** (`rgba(255,255,255,0.08)`): Standard border.
- **Border Bright** (`rgba(255,255,255,0.12)`): Hover, active.
- **Border Glow** (`rgba(99,102,241,0.3)`): Accent border, focus.

### Borders (Light Chapters)
- **Border Light Subtle** (`rgba(0,0,0,0.06)`): Default border on light.
- **Border Light Standard** (`rgba(0,0,0,0.1)`): Standard border on light.

### Text on Dark
- **Text Primary** (`#f5f5f7`): Primary text. Near-white, slight warmth.
- **Text Secondary** (`#a1a1aa`): Body text, descriptions.
- **Text Tertiary** (`#71717a`): Metadata, captions, helper text.
- **Text Muted** (`#52525b`): Disabled, very de-emphasized.

### Text on Light
- **Text Light Primary** (`#0a0a0a`): Primary text on light. Near-black.
- **Text Light Secondary** (`#404040`): Body text on light.
- **Text Light Tertiary** (`#737373`): Captions on light.

### Brand Signature (The Only Chromatic Family)
- **AI Indigo 500** (`#6366f1`): Primary brand color. CTAs, active states, neural connections.
- **AI Indigo 400** (`#818cf8`): Hover state, lighter emphasis.
- **AI Indigo 600** (`#4f46e5`): Pressed state, darker emphasis.
- **AI Cyan 400** (`#22d3ee`): Secondary accent. Highlights, signals, particle tips.
- **AI Cyan 500** (`#06b6d4`): Pressed cyan.
- **AI Violet** (`#a855f7`): Tertiary accent. Used in aurora gradients only.
- **AI Pink** (`#ec4899`): Quaternary accent. Aurora gradient component.

### Gradient (The Signature)
- **Primary Gradient**: `linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)` — used on CTAs, the 3D brain wireframe, animated progress, neural connections.
- **Aurora Gradient** (ambient background): radial combinations of indigo, violet, cyan, and pink at low opacity, animated slowly.
- **Mesh Gradient** (hero section): multi-point radial gradients blended with `mix-blend-mode` for organic depth.

### Status Colors
- **Success Green** (`#10b981`): Active indicators, "growth" stats.
- **Warning Amber** (`#f59e0b`): Caution badges in challenges section.
- **Danger Red** (`#ef4444`): Security risks, critical warnings.
- **Info Blue** (`#3b82f6`): Informational badges.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter Variable` (with OpenType `"cv11", "ss01", "ss03"`), fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Mono**: `JetBrains Mono` (CDN), fallback: `ui-monospace, "SF Mono", Menlo, monospace`
- **Display Decorative**: `Inter Variable` weight 300 — used sparingly for ultra-light editorial moments

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero XL | `clamp(4.5rem, 9vw, 8rem)` | 700 | 1.0 | -0.04em | Hero title. Maximum impact. |
| Display Hero L | `clamp(3rem, 6vw, 5.5rem)` | 600 | 1.05 | -0.03em | Section openers. |
| Display Hero M | `clamp(2.5rem, 5vw, 4rem)` | 600 | 1.1 | -0.025em | Sub-section openers. |
| Heading 1 | `clamp(2rem, 4vw, 3rem)` | 600 | 1.15 | -0.02em | Major section titles. |
| Heading 2 | `clamp(1.5rem, 3vw, 2.25rem)` | 500 | 1.2 | -0.015em | Card group titles. |
| Heading 3 | `clamp(1.25rem, 2vw, 1.5rem)` | 600 | 1.3 | -0.01em | Card titles. |
| Subheading | `clamp(1.125rem, 1.5vw, 1.375rem)` | 400 | 1.5 | -0.005em | Section intros. |
| Body Large | `clamp(1.125rem, 1.25vw, 1.25rem)` | 400 | 1.6 | 0 | Feature descriptions. |
| Body | `1rem` (16px) | 400 | 1.65 | 0 | Standard reading. |
| Body Medium | `1rem` (16px) | 500 | 1.5 | 0 | Emphasized body, nav. |
| Small | `0.875rem` (14px) | 400 | 1.55 | 0 | Secondary text. |
| Caption | `0.75rem` (12px) | 500 | 1.4 | 0.02em | Labels, metadata, uppercase micro. |
| Mono Code | `0.875rem` (14px) | 400 | 1.5 | 0 | Code blocks, technical labels. |

### Principles
- **Compressed display sizes**: Display sizes use aggressive negative letter-spacing (-0.04em to -0.02em) for engineered, compressed authority.
- **Inter Variable OpenType**: `"cv11"` (alternate single-story a), `"ss01"` (geometric alternates), `"ss03"` (cleaner letterforms) — enabled globally.
- **No bold body**: 600 is the maximum weight for body text. 700 is reserved for hero display only.
- **Tabular numbers**: Use `font-variant-numeric: tabular-nums` for all numerical stats and counters in the benefits section.
- **Mono for code only**: JetBrains Mono for code snippets and technical labels (timeline years).

---

## 4. Component Stylings

### Buttons

**Primary (Gradient CTA)**
- Background: `linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)`
- Text: `#ffffff`
- Padding: `14px 32px`
- Radius: `9999px` (pill) or `12px` (rounded)
- Font: 16px Inter Variable weight 500
- Hover: brightness(1.1) + scale(1.02)
- Glow on hover: `0 0 32px rgba(99,102,241,0.4)`
- Use: Hero CTA, "Start the Journey"

**Secondary (Glass)**
- Background: `rgba(255,255,255,0.04)`
- Text: `#f5f5f7`
- Padding: `14px 32px`
- Radius: `9999px`
- Border: `1px solid rgba(255,255,255,0.1)`
- Backdrop-filter: `blur(20px)`
- Hover: bg `rgba(255,255,255,0.08)` + border `rgba(255,255,255,0.2)`
- Use: Secondary actions, "Learn more"

**Light Variant (on light chapters)**
- Background: `#0a0a0a`
- Text: `#ffffff`
- Padding: `14px 32px`
- Radius: `9999px`
- Hover: scale(1.02)
- Use: Light chapter CTAs

**Icon Button (circular)**
- Background: `rgba(255,255,255,0.04)`
- Size: `44px × 44px`
- Radius: `50%`
- Border: `1px solid rgba(255,255,255,0.08)`
- Hover: bg `rgba(255,255,255,0.08)`

### Cards & Containers (Dark Surfaces)

**Standard Glass Card**
- Background: `rgba(255,255,255,0.03)` to `rgba(255,255,255,0.05)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: `20px` (feature), `24px` (large), `16px` (compact)
- Backdrop-filter: `blur(20px)` (where supported)
- Shadow: `0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)`
- Hover: bg `rgba(255,255,255,0.06)`, border `rgba(255,255,255,0.15)`, translateY(-4px)

**Featured Card** (with gradient accent)
- Same as standard + left border `2px solid` with gradient
- Or top border `2px solid` with gradient
- Glow shadow on hover

**Tilted 3D Card** (using Vanilla Tilt)
- Adds perspective transform on mouse move
- Used for: applications cards, benefits cards

### Cards & Containers (Light Chapters)
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.06)`
- Radius: `20px`
- Shadow: `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.08)`
- Hover: translateY(-4px), shadow intensifies

### Inputs & Forms
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Padding: `12px 16px`
- Radius: `12px`
- Text: `#f5f5f7`
- Placeholder: `#71717a`
- Focus: border `rgba(99,102,241,0.5)`, ring `0 0 0 4px rgba(99,102,241,0.1)`

### Navigation

**Floating Glass Nav (sticky)**
- Position: fixed, top: `20px`
- Background: `rgba(10,11,16,0.6)` (dark glass)
- Backdrop-filter: `blur(20px) saturate(180%)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: `9999px` (pill)
- Padding: `8px 8px 8px 24px`
- Max-width: `1100px`, centered
- Logo left, links middle, CTA right
- Links: 14px Inter weight 500, `#a1a1aa`, hover `#f5f5f7`
- Mobile: hamburger icon → slide-down menu

**Progress Bar**
- Position: fixed, top: 0
- Height: `3px`
- Background: gradient (`#6366f1` → `#22d3ee`)
- Width: animated by scroll progress
- z-index: 9999

### Decorative Elements

**Glassmorphic Chip / Pill**
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: `9999px`
- Padding: `6px 14px`
- Font: 13px weight 500
- Use: Tags, category labels, industry labels

**Animated Section Markers** (in hero)
- Floating particles (CSS + JS)
- Glowing dots
- Animated dotted lines

---

## 5. Layout Principles

### Spacing System
- Base unit: `4px`
- Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 256`
- Section vertical padding: `clamp(80px, 12vw, 192px)` — generous, cinematic.
- Section gap: `clamp(48px, 8vw, 96px)` between section components.
- Component padding: `24px` to `48px` standard.
- Card padding: `32px` to `48px` for feature cards, `24px` for compact.

### Grid & Container
- Max content width: `1280px`
- Hero: full viewport height (`100dvh`), centered single-column
- Bento grids: `grid-template-columns: repeat(12, 1fr)` with `grid-flow: dense`
- Feature grids: 2-3 columns desktop, 1-2 columns tablet, 1 column mobile
- Application cards: 3 columns desktop, 2 tablet, 1 mobile

### Whitespace Philosophy
- **Darkness as space**: On dark canvas, empty space isn't white — it's absence. Generous padding creates the sensation of looking into deep space.
- **Section isolation**: Each section separated by `clamp(80px, 12vw, 192px)` of vertical space — sections feel like distinct, cinematic chapters.
- **Compressed text, expanded surroundings**: Display text is dense and tight (negative letter-spacing), but the space around it is vast.

### Border Radius Scale
- **Micro (4px)**: Small inline elements, code chips
- **Standard (8px)**: Inputs, compact chips
- **Comfortable (12px)**: Buttons (non-pill), inputs
- **Card (16px)**: Compact cards
- **Card L (20px)**: Standard feature cards
- **Card XL (24px)**: Large feature cards, panels
- **Pill (9999px)**: CTAs, tags, navigation, capsule buttons
- **Circle (50%)**: Icon buttons, decorative elements

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, void `#05060a` | Page background |
| Glass 1 (Level 1) | `rgba(255,255,255,0.03)` + `1px solid rgba(255,255,255,0.05)` | Subtle cards, chips |
| Glass 2 (Level 2) | `rgba(255,255,255,0.05)` + `1px solid rgba(255,255,255,0.08)` + inset highlight | Standard cards |
| Glass 3 (Level 3) | `rgba(255,255,255,0.08)` + `1px solid rgba(255,255,255,0.12)` | Elevated cards, hover |
| Floating (Level 4) | Glass 3 + `0 24px 48px -24px rgba(0,0,0,0.6)` shadow | Featured cards, modals |
| Glowing (Level 5) | Floating + `0 0 32px rgba(99,102,241,0.4)` glow | Active CTAs, hero elements |
| Focus | `2px solid rgba(99,102,241,0.5)` + `0 0 0 4px rgba(99,102,241,0.1)` | Keyboard focus |

### Decorative Depth
- **Aurora gradients**: Slow-moving radial gradients in indigo, violet, cyan, pink at low opacity — never static, always subtly shifting.
- **Mesh gradients**: Multi-point radial gradients blended with `mix-blend-mode: screen` — used in hero, future section.
- **3D brain**: Three.js icosahedron with wireframe and point cloud, slowly rotating, mouse-reactive.
- **Particles**: 50-100 ambient particles floating across sections, connected to scroll velocity.
- **Floating illustrations**: SVG icons with CSS `animation: float` (6s ease-in-out infinite) and parallax depth.

---

## 7. Do's and Don'ts

### Do
- Use Inter Variable with OpenType features `"cv11", "ss01", "ss03"` on ALL text
- Apply aggressive negative letter-spacing at display sizes (-0.04em to -0.025em)
- Use glassmorphism on all dark surfaces — no flat solid backgrounds
- Reserve the AI Indigo→Cyan gradient for primary CTAs, active states, and the 3D brain only
- Keep the chromatic palette disciplined — gray + indigo + cyan only
- Use `clamp()` for all typography and spacing to ensure fluid responsive
- Use 3D brain as the visual hero — it's the AI metaphor
- Use horizontal scroll for timeline section (pinned)
- Use count-up animations for statistics
- Use scroll-driven text reveals for the manifesto
- Animate everything subtly: hover lifts, fades, slight rotations

### Don't
- Don't use warm colors (orange, yellow, red) for interactive elements
- Don't use flat solid backgrounds anywhere
- Don't use weight 700+ on body text (700 max for hero display)
- Don't use 6-line wrapped headings — use `clamp()` and wide containers
- Don't add meta-labels like "SECTION 01" or "QUESTION 05" — these are banned
- Don't use placeholder images — every illustration must be a custom SVG
- Don't use layout-animating properties (margin, padding, top) — only `transform` and `opacity`
- Don't use `as any` or `@ts-ignore` (not applicable but applies to sloppy code generally)
- Don't suppress font-feature-settings — `"cv11", "ss01", "ss03"` are non-negotiable
- Don't use visible scrollbars — hide them with `::-webkit-scrollbar { display: none }`
- Don't break the dark → light → dark rhythm — it's the cinematic cadence

---

## 8. Responsive Behavior

### Breakpoints
- **Mobile Small**: `< 480px` — single column, reduced padding, smaller typography
- **Mobile**: `480px - 767px` — single column, standard mobile
- **Tablet**: `768px - 1023px` — 2-column grids, moderate padding
- **Desktop**: `1024px - 1279px` — full layout
- **Large Desktop**: `1280px - 1535px` — full layout, expanded spacing
- **XL Desktop**: `>= 1536px` — maximum content width with generous margins

### Touch Targets
- Buttons: minimum `44px × 44px` hit area
- Navigation links: minimum `44px` height in collapsed mobile menu
- Cards: full-card clickable on touch devices (where used as link)

### Collapsing Strategy
- Hero: Display XL `8rem` → `4.5rem` on mobile
- Navigation: floating pill → hamburger icon on mobile
- Feature grids: 3 columns → 2 columns → 1 column
- Application cards: 3 columns → 2 columns → 1 column
- Timeline: horizontal scroll (desktop) → vertical stack (mobile)
- City illustration: 1 row → 2 rows → vertical stack
- Section padding: `192px` → `96px` → `64px` → `48px`

### Image Behavior
- SVG illustrations scale fluidly using `viewBox` — no fixed dimensions
- The 3D Three.js brain resizes responsively to container
- Particles scale with viewport area (count: floor(area / 15000))

---

## 9. Agent Prompt Guide

### Quick Color Reference
- Page background: Void Black (`#05060a`)
- Light chapter background: Pearl White (`#fafafb`)
- Primary text on dark: Text Primary (`#f5f5f7`)
- Body text on dark: Text Secondary (`#a1a1aa`)
- Brand primary: AI Indigo (`#6366f1`)
- Brand secondary: AI Cyan (`#22d3ee`)
- Brand gradient: `linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)`
- Glass surface: `rgba(255,255,255,0.04)` + `backdrop-filter: blur(20px)`
- Glass border: `1px solid rgba(255,255,255,0.08)`

### Section-by-Section Reference
- **Hero**: 100dvh, 3D brain centered, gradient title "Artificial Intelligence", subtitle, primary CTA
- **What is AI**: 3 illustrated concept cards (Human Brain, Neural Network, Computer Learning)
- **How AI Works**: Vertical flow diagram (Data → Learning → Training → Prediction → Decision) with line-drawing animation
- **Key Features**: 5 glass cards (ML, DL, NLP, CV, Automation) with staggered reveal
- **Real-World Applications**: 5 industry mega-cards (Healthcare, Education, Business, Transportation, Finance) with icons and feature lists
- **Benefits**: Animated count-up statistics with icons
- **Challenges**: Dark section, warning cards (Security, Privacy, Ethics, Employment, Cost)
- **AI Around Us**: Pinned horizontal scroll with city illustration and labeled services
- **Timeline**: Pinned horizontal scroll with milestones (1950, 1956, 1980s, 1997, 2012, 2022, Future)
- **Future of AI**: 8 futuristic topic cards in 4-column grid with floating animation
- **Finale**: Massive "Thank You" with parallax stars and quote

### Quick Font Settings
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-feature-settings: 'cv11', 'ss01', 'ss03';
font-variation-settings: 'opsz' 32;
```

### Quick Glass Card
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 20px;
```

### Quick Gradient Button
```css
background: linear-gradient(135deg, #6366f1 0%, #22d3ee 100%);
color: #ffffff;
padding: 14px 32px;
border-radius: 9999px;
font-weight: 500;
box-shadow: 0 0 32px rgba(99, 102, 241, 0.3);
```

### Aurora Background Pattern
```css
background:
  radial-gradient(at 20% 30%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
  radial-gradient(at 80% 70%, rgba(34, 211, 238, 0.1) 0px, transparent 50%),
  radial-gradient(at 50% 50%, rgba(168, 85, 247, 0.08) 0px, transparent 50%);
```

---

## 10. Visual Asset Strategy

**No raster images. No external dependencies. No placeholders.**

All visual assets are custom-built:
- **SVG illustrations** for every icon, illustration, and diagram (inline in HTML, 100% royalty-free)
- **Three.js 3D** for the AI brain (low-poly icosahedron with neural point connections)
- **CSS gradients** for backgrounds (aurora, mesh, radial)
- **CSS animations** for floating elements
- **Canvas particles** for ambient particle field

No external image services used. No copyright concerns. No loading delays.

---

## 11. Attribution

All visual assets on this website were generated or hand-built using code (SVG, CSS, Three.js) for educational purposes. No copyrighted images used.
