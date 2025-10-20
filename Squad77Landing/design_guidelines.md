# Design Guidelines: SQUAD77 Landing Page

## Design Approach: Reference-Based (Bold Entertainment)

**Selected References:** Drawing from high-impact gambling/entertainment sites like Stake.com, Duelbits, and premium gaming platforms that balance excitement with trust.

**Core Principle:** Create maximum impact within a single, powerful section that captures attention, builds trust, and drives immediate action.

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (metallic gaming aesthetic):
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 12% 12% (dark slate)
- Metallic accent: 45 100% 50% (gold - matching logo)
- Text primary: 0 0% 98%
- Text secondary: 0 0% 75%

**Accent Colors:**
- Success green: 142 76% 45%
- Electric blue: 210 100% 56% (energy/excitement)

**Light Mode:** Not required - dark mode only for premium gaming aesthetic.

### B. Typography

**Fonts (via Google Fonts CDN):**
- Headlines: 'Orbitron' (futuristic, bold) - weights 700, 900
- Body: 'Inter' (clean, readable) - weights 400, 600
- Accent/Numbers: 'Rajdhani' (modern gaming) - weights 600, 700

**Type Scale:**
- Hero title: text-5xl md:text-7xl font-black (Orbitron)
- Tagline: text-xl md:text-2xl font-semibold (Inter)
- CTA button: text-lg font-bold (Rajdhani)
- Supporting text: text-base (Inter)

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16
- Container padding: px-4 md:px-8
- Vertical spacing: py-8 md:py-12
- Component gaps: gap-6 md:gap-8
- Button padding: px-8 py-4

**Single Section Structure:**
Full viewport hero (min-h-screen) with layered composition

### D. Component Library

**Hero Section Components:**
1. Logo placement (top-left, h-12 md:h-16)
2. Background banner (full-screen overlay with gradient)
3. Headline stack (centered, z-10)
4. Trust indicators (micro-badges: "100% Terpercaya", "Garansi Kekalahan")
5. Primary CTA (large, glowing effect)
6. Secondary info (brief feature highlights in pills/cards)
7. Favicon integration (browser tab)

**Button Styles:**
- Primary: Gold gradient background (from logo metallic), shadow-xl, uppercase
- On-image variant: backdrop-blur-md bg-white/10 border-2 border-gold

**Card Elements:**
- Glass-morphism effect: backdrop-blur-lg bg-white/5 border border-white/10
- Rounded corners: rounded-xl
- Subtle glow: shadow-2xl shadow-gold/20

### E. Animations

**Minimal, purposeful motion:**
- Logo: Subtle metallic shimmer on load (CSS animation)
- CTA button: Pulse glow effect (animate-pulse modified)
- Background: Very slow parallax drift
- NO scroll-triggered animations (single section)

---

## Images & Assets

**Hero Background:**
- Use provided banner (banner-squad777.jpg) as full-screen background
- Apply dark gradient overlay: bg-gradient-to-b from-black/60 via-black/40 to-black/80
- Position: object-cover object-center
- Optimization: Lazy loading NOT needed (above fold), but use srcset for responsiveness

**Logo Placement:**
- Provided logo (logo_panjang squad777_metal.png) 
- Position: Absolute top-left or centered above headline
- Size: h-12 md:h-20, maintain aspect ratio
- Treatment: Drop shadow for visibility

**Favicon:**
- Use provided favicon_squad.jpg
- Link in <head> with proper mime types

---

## Layout Composition (Single Section)

**Full-Screen Hero Structure:**

```
┌─────────────────────────────────────┐
│  [Logo - Top Left]                  │
│                                     │
│         SQUAD77 (Orbitron)          │
│    GARANSI KEKALAHAN 100%          │
│  SITUS TERBAIK DI ALAM SEMESTA     │
│                                     │
│   [Trust Badges Row: 3 pills]      │
│                                     │
│    [MASSIVE CTA BUTTON]            │
│                                     │
│  [3 Feature Cards in Grid Below]   │
│                                     │
└─────────────────────────────────────┘
```

**Vertical Hierarchy:**
1. Logo (top 8-12)
2. Main headline (centered, mt-24 md:mt-32)
3. Trust indicators (mt-8)
4. CTA (mt-12)
5. Feature highlights (mt-16, grid-cols-1 md:grid-cols-3, gap-6)

---

## SEO 2025 Specifications

**Critical Meta Elements:**
- Semantic HTML5: <header>, <main>, <section>
- Schema.org JSON-LD: Organization + WebSite structured data
- Open Graph + Twitter Cards with provided images
- Meta description: 155 characters, keyword-rich
- Mobile viewport optimization
- Defer JavaScript loading
- Preload hero image and critical fonts

**Accessibility:**
- ARIA labels for all interactive elements
- alt text for logo and decorative images
- Minimum touch target: 44x44px
- Color contrast ratio ≥ 4.5:1

---

## Key Differentiators

1. **Metallic Gold Accent:** Pulled from logo, used sparingly for premium feel
2. **Glass-morphism UI:** Modern depth without heavy graphics
3. **Trust-First:** Badges/guarantees prominently displayed above CTA
4. **Single-Focus Design:** Everything directs to ONE primary action
5. **Dark Premium Aesthetic:** No light mode - establishes luxury gaming brand