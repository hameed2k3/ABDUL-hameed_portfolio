# Portfolio Motion & Transition Plan
### Inspired by trionn.com — Applied to Personal Portfolio

---

## 1. Reference Source

**Site analyzed:** [trionn.com](https://trionn.com/)
**Category:** Award-winning studio site (Awwwards / FWA / CSS Winner featured)
**Core animation engine used by reference site:** GSAP (confirmed via their own "Featured & Awards" badges, which include the GSAP logo)

**Why this site is a good reference:**
- Dark, minimal, confident visual language
- Motion is used to reinforce hierarchy and storytelling, not decoration
- Every effect below is one they actually use — this doc translates each into a React/Next.js implementation

---

## 2. Tech Stack for Implementation

| Purpose | Tool |
|---|---|
| Component-level animation (hover, reveal, page transitions) | Framer Motion |
| Scroll-driven storytelling (pins, parallax, counters) | GSAP + ScrollTrigger |
| Smooth scroll foundation | Lenis (studio-freight/lenis) |
| Styling | Tailwind CSS |

> Framer Motion alone struggles with complex scroll choreography (pinning, scrubbing). GSAP ScrollTrigger handles that. Use both — they coexist fine in a React app.

---

## 3. Effects Inventory — What Trionn Uses, Mapped to Your Portfolio

### 3.1 Hero Text Reveal
**On trionn.com:** Headline ("Designed to / mean something.") loads as a staggered line/word reveal — fades and slides up in sequence, not all at once.

**Apply to:** `hero.tsx`
**Implementation:** Framer Motion `staggerChildren` on a parent `motion.div`, each word/line as a child variant (opacity 0→1, y: 20→0).
**Priority:** High — first thing every visitor sees.

---

### 3.2 Marquee / Infinite Scroll Text
**On trionn.com:** "Inspire·Innovate·Impact" loops horizontally with a diamond separator.

**Apply to:** A skills/tools strip, or a tagline strip between Hero and About.
**Implementation:** Pure CSS `@keyframes translateX(-50%)`, duplicate the content once inside the track for a seamless loop, `animation: linear infinite`.
**Priority:** Medium — nice accent, not essential.

---

### 3.3 Scroll-Triggered Counters
**On trionn.com:** "Key facts" section (050+ projects, 01.5K+ team members) animates numbers counting up as the section enters viewport.

**Apply to:** If you add a stats section (years of experience, projects shipped, technologies used) — otherwise skip; you may not have enough numeric proof points yet.
**Implementation:** GSAP ScrollTrigger + `gsap.to(counterObj, { value: targetNumber, onUpdate: updateDOM })`.
**Priority:** Low — only add if you have real numbers worth showing.

---

### 3.4 Video-in-Card Elements
**On trionn.com:** Award and team cards use autoplaying muted `.mp4` backgrounds instead of static images.

**Apply to:** `projects.tsx` — project cards, especially the featured case study.
**Implementation:** `<video autoPlay muted loop playsInline>` inside a bounded card, `object-fit: cover`. Pair with a hover-scale on the card container.
**Priority:** High — this is one of the most premium-feeling upgrades you can make to your project section, and directly supports the "prove the motion claim" goal from the last review.

---

### 3.5 Nav Link Hover Text-Swap
**On trionn.com:** Nav links show duplicated text ("WorkWork," "AboutAbout") — a strong signal of two stacked text layers, one sliding out on hover as its duplicate slides in.

**Apply to:** Your main navigation.
**Implementation:** Pure CSS — `overflow: hidden` container, two `<span>` layers stacked with `transform: translateY()`, triggered on `:hover`. No JS needed.
**Priority:** High — cheap to build, very high perceived polish.

---

### 3.6 Section-Based Scroll Storytelling
**On trionn.com:** Content is chunked into narrative blocks (Hero → About → Key Facts → Team → Partners), each fading/sliding in as it enters the viewport.

**Apply to:** `about.tsx`, `skills.tsx`, `resume.tsx` — restrained fade-up on scroll, staggered by ~100ms per element.
**Implementation:** Framer Motion `whileInView` + `viewport={{ once: true }}`.
**Priority:** Medium — keep this calm and readable, not showy. These are "explain" sections, not "prove" sections.

---

### 3.7 Sticky / Pinned Sections
**On trionn.com:** Likely used on the awards/key-facts video card section — content animates while the section itself stays fixed in place.

**Apply to:** Your featured project case study once written — pin the project mockup/image while role/problem/outcome text scrolls past beside it.
**Implementation:** GSAP ScrollTrigger with `pin: true`, `scrub: true`.
**Priority:** High — this is the single most "award-site" effect you could add, and it's the natural home for your strongest project story (recommended: the AI Voting System).

---

### 3.8 Custom / Magnetic Cursor
**Not directly confirmed on trionn.com but standard for this site category.**

**Apply to:** Primary CTA buttons ("Start a Project" equivalent, contact form submit).
**Implementation:** Framer Motion `useMotionValue` + `useSpring`, button shifts slightly toward cursor within a radius, snaps back on mouse leave.
**Priority:** Medium — polish layer, do last.

---

## 4. Application Map — By Your Portfolio File

| File | Effect(s) to Add | Priority |
|---|---|---|
| `hero.tsx` | Staggered text reveal, magnetic CTA | High |
| `about.tsx` | Scroll fade-up, staggered by block | Medium |
| `projects.tsx` | Scroll fade-up cards, hover scale, video-in-card, pinned featured case study | High |
| `skills.tsx` | Light scroll fade-up, optional marquee strip | Low–Medium |
| `resume.tsx` | Timeline-style sequential reveal per role | Medium |
| `contact.tsx` | Fade-in on scroll, magnetic submit button | Low |
| Global nav | Hover text-swap | High |
| Global | Lenis smooth scroll wrapper | Foundation (do first) |

---

## 5. Build Order

1. **Lenis smooth scroll** — wrap the whole app; every other effect feels better once this is in
2. **Hero stagger reveal + magnetic CTA** — highest visibility, sets first impression
3. **Nav hover text-swap** — cheap, high polish, do early
4. **Project card scroll-fade + hover states**
5. **Video-in-card for project thumbnails**
6. **Pinned featured case study section** (once case study copy exists — see prior recommendation to build this around the AI Voting System project)
7. **About / Skills light scroll-fades**
8. **Resume timeline reveal**
9. **Contact polish pass**

---

## 6. Design Discipline Notes

- **Consistency:** Use one easing curve across all Framer Motion animations (e.g. `[0.16, 1, 0.3, 1]`, an "ease-out-expo" feel) so the whole site reads as one designed system, not mismatched effects.
- **Restraint:** Concentrate strong motion in Hero + Projects (your "prove it" sections). Keep About/Skills/Resume calm — these are "explain" sections and shouldn't compete for attention.
- **Purpose over decoration:** Every effect on this list should guide attention or reinforce hierarchy. If an effect doesn't do either, cut it.
- **Accessibility:** Respect `prefers-reduced-motion` — disable non-essential animations (marquees, parallax, scroll pins) for users who have this OS-level preference set.

---

## 7. Next Step

Once this plan is implemented, the strongest remaining gap (per prior portfolio review) is **content**, not motion: the featured project case study still needs real copy — your specific role, the problem, technical decisions, and outcome. The pinned scroll section (3.7) is built to hold that content once it exists.
