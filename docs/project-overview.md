# Brand Aura

A premium digital agency website built with **Next.js**, **TypeScript**, **Tailwind CSS**, **GSAP**, and **Lenis**.

---

# Project Vision

Brand Aura is designed as an immersive digital experience rather than a traditional agency website.

The goal is to create a modern, interactive, animation-rich website that showcases the agency's creativity while maintaining excellent performance, scalability, and clean code architecture.

The website emphasizes:

- Storytelling
- Motion Design
- Smooth Scrolling
- Premium UI
- Interactive Experiences
- High Performance

---

# Tech Stack

## Framework

- Next.js 16 (App Router)

## Language

- TypeScript

## Styling

- Tailwind CSS

## Animation

- GSAP
- ScrollTrigger
- Lenis

## Code Quality

- ESLint
- Prettier

---

# Development Principles

- Build structure before animations.
- Keep components simple.
- Avoid over-engineering.
- Use feature-based architecture.
- Prefer reusable components only when necessary.
- Follow Next.js App Router best practices.
- Optimize for performance.

---

# Website Pages

- Home
- About
- Services
- Portfolio
- Blog
- Contact

---

# Homepage Sections

## 1. Hero

- Fullscreen layout
- Horizontal storytelling
- Large typography
- Floating cards
- CTA

---

## 2. Clients

- Infinite horizontal logo carousel
- Grayscale logos
- Color reveal on hover

---

## 3. Portfolio

- Horizontal showcase
- Device mockups
- Animated cards
- Connected visual layout

---

## 4. Services

Interactive four-card layout.

Default

- Large background numbers
- Minimal appearance
- No icons
- No grid

Hover

- Grid background appears
- Icon fades in
- Content moves upward
- Other cards remain unchanged

---

## 5. Founder Message

Editorial style section containing

- Founder image
- Quote
- Message
- CTA

---

## 6. Tic Tac Toe

Interactive game.

Features

- User vs AI
- Animated SVG X/O
- Win detection
- Replay
- Confetti animation
- CTA after winning

---

## 7. Footer

Minimal white footer.

Contains

- Large BRAND AURA typography
- Navigation
- Copyright
- Contact CTA

---

# Folder Structure

```
src/
│
├── app/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   └── contact/
│
├── hooks/
├── lib/
├── data/
├── styles/
├── types/
└── utils/
```

---

# Layout Components

Global layout components

- Header
- Footer
- LeftNavigation
- MobileMenu
- Container

---

# Reusable Components

The `ui` folder contains reusable UI components only.

Examples

- Button
- Card
- Input
- Badge
- Modal
- Loader

---

# Data

Static website data is stored inside

```
src/data
```

Examples

- navigation.ts
- services.ts
- clients.ts
- portfolio.ts

---

# Animation Strategy

Animations are added only after the UI structure is complete.

Implementation order

1. Hero
2. Clients
3. Portfolio
4. Services
5. Founder
6. Tic Tac Toe
7. Footer

---

# Coding Standards

- Use TypeScript everywhere.
- Use App Router.
- Use next/link for internal navigation.
- Use next/image where appropriate.
- Keep one component per file until splitting is justified.
- Keep animation logic close to the component it belongs to.
- Use Tailwind utility classes.
- Prefer composition over unnecessary abstractions.

---

# Performance Goals

- Lighthouse Score 95+
- Smooth 60 FPS animations
- Optimized images
- Lazy loading where appropriate
- Minimal layout shift
- Clean bundle size

---

# Future Enhancements

- Dark/Light theme (optional)
- CMS integration
- Contact API
- Blog CMS
- Case study pages
- SEO improvements
- Page transitions
- Advanced GSAP timelines

---

# Development Workflow

1. Build UI
2. Make responsive
3. Integrate animations
4. Optimize performance
5. Improve accessibility
6. Test across devices
7. Deploy

---

# Current Status

- ✅ Project initialized
- ✅ Folder architecture finalized
- ✅ Development plan finalized
- ⏳ Layout components in progress
- ⏳ Homepage development
- ⏳ Animation implementation
- ⏳ Responsive optimization
- ⏳ Final deployment