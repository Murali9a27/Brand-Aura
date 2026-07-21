# Folder Structure

This document explains the folder structure, architecture, and organization of the Brand Aura project.

The project follows a **feature-based architecture**, keeping related files together while maintaining a clean and scalable codebase.

---

# Root Structure

```text
brand-aura/
│
├── docs/
├── public/
├── src/
├── .env.local
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

# docs/

Contains all project documentation.

```text
docs/
│
├── project-overview.md
├── folder-structure.md
├── animation-plan.md
├── coding-guidelines.md
├── setup.md
└── deployment.md
```

Purpose

- Project documentation
- Architecture decisions
- Development workflow
- Team onboarding

---

# public/

Contains static assets.

```text
public/
│
├── images/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   ├── contact/
│   └── shared/
│
├── icons/
├── logos/
├── videos/
├── fonts/
└── favicon.ico
```

Purpose

- Images
- Icons
- SVGs
- Videos
- Fonts

Files are served directly from the root.

Example

```
/images/home/hero.webp
```

---

# src/

Contains all application source code.

```text
src/
│
├── app/
├── components/
├── hooks/
├── lib/
├── data/
├── styles/
├── types/
└── utils/
```

---

# app/

Contains application routes using the Next.js App Router.

```text
app/
│
├── (site)/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── about/
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   └── contact/
│
├── globals.css
├── favicon.ico
└── not-found.tsx
```

Responsibilities

- Routing
- Metadata
- Layouts
- Error pages
- Loading pages

Do **not** place reusable components here.

---

# components/

Contains all React components.

```text
components/
│
├── layout/
├── ui/
├── home/
├── about/
├── services/
├── portfolio/
├── blog/
└── contact/
```

The project follows **feature-based organization**.

---

# Component Structure

Each component should keep its files together.

Example

```text
Hero.tsx
Hero.module.css
```

Instead of

```text
Hero.tsx

styles/
└── hero.module.css
```

Keeping related files together improves readability and maintainability.

---

# components/layout

Global layout components.

```text
layout/
│
├── Header.tsx
├── Header.module.css
│
├── Footer.tsx
├── Footer.module.css
│
├── LeftNavigation.tsx
├── LeftNavigation.module.css
│
├── MobileMenu.tsx
├── MobileMenu.module.css
│
├── Container.tsx
└── Container.module.css
```

Purpose

- Header
- Footer
- Global navigation
- Layout wrappers

---

# components/ui

Reusable UI components.

```text
ui/
│
├── Button/
│   ├── Button.tsx
│   └── Button.module.css
│
├── Card/
│   ├── Card.tsx
│   └── Card.module.css
│
├── Heading/
├── Input/
├── Badge/
├── Modal/
└── Loader/
```

Rules

Only reusable components belong here.

Do not place page-specific components inside `ui`.

---

# components/home

Homepage sections.

```text
home/
│
├── Hero.tsx
├── Hero.module.css
│
├── Clients.tsx
├── Clients.module.css
│
├── Portfolio.tsx
├── Portfolio.module.css
│
├── Services.tsx
├── Services.module.css
│
├── Founder.tsx
├── Founder.module.css
│
├── Game.tsx
└── Game.module.css
```

---

# components/about

```text
about/
│
├── Hero.tsx
├── Hero.module.css
│
├── Story.tsx
├── Story.module.css
│
├── Team.tsx
├── Team.module.css
│
├── Values.tsx
└── Values.module.css
```

---

# components/services

```text
services/
│
├── Hero.tsx
├── Hero.module.css
│
├── ServiceGrid.tsx
├── ServiceGrid.module.css
│
├── Process.tsx
├── Process.module.css
│
├── FAQ.tsx
└── FAQ.module.css
```

---

# components/portfolio

```text
portfolio/
│
├── Hero.tsx
├── Hero.module.css
│
├── Filter.tsx
├── Filter.module.css
│
├── ProjectGrid.tsx
├── ProjectGrid.module.css
│
├── ProjectCard.tsx
└── ProjectCard.module.css
```

---

# components/blog

```text
blog/
│
├── Hero.tsx
├── Hero.module.css
│
├── BlogGrid.tsx
├── BlogGrid.module.css
│
├── BlogCard.tsx
└── BlogCard.module.css
```

---

# components/contact

```text
contact/
│
├── Hero.tsx
├── Hero.module.css
│
├── ContactForm.tsx
├── ContactForm.module.css
│
├── Map.tsx
└── Map.module.css
```

---

# hooks/

Contains reusable custom React hooks.

```text
hooks/
│
├── useLenis.ts
├── useHorizontalScroll.ts
├── useMagnetic.ts
└── useMediaQuery.ts
```

Purpose

- Shared logic
- Browser APIs
- Reusable behaviors

---

# lib/

Contains third-party configurations.

```text
lib/
│
├── gsap.ts
├── lenis.ts
└── utils.ts
```

Purpose

- GSAP configuration
- Lenis initialization
- Shared library setup

---

# data/

Contains static project data.

```text
data/
│
├── navigation.ts
├── homeSections.ts
├── services.ts
├── portfolio.ts
├── clients.ts
└── blog.ts
```

Purpose

- Navigation links
- Service data
- Portfolio items
- Client logos
- Blog metadata

Avoid hardcoding static data inside components.

---

# styles/

Contains global styles only.

```text
styles/
│
├── variables.css
├── utilities.css
└── animations.css
```

Examples

variables.css

- CSS Variables
- Theme colors
- Font variables
- Shadows
- Radius

utilities.css

- Utility helper classes
- Global helper classes

animations.css

- Shared keyframes
- Global animation utilities

Do **not** place component-specific styles here.

---

# types/

Contains shared TypeScript types.

```text
types/
│
├── service.ts
├── project.ts
├── client.ts
└── blog.ts
```

Purpose

- Interfaces
- Shared types
- Enums

---

# utils/

Contains helper functions.

```text
utils/
│
├── cn.ts
├── constants.ts
└── helpers.ts
```

Examples

- Class merging
- Number formatting
- Helper functions
- Constants

Utilities should not depend on React.

---

# CSS Strategy

The project uses both **Tailwind CSS** and **CSS Modules**.

## Tailwind CSS

Use Tailwind for

- Layout
- Grid
- Flexbox
- Spacing
- Typography
- Responsive design
- Width
- Height
- Positioning

Example

```tsx
<div className="flex items-center justify-between py-8">
```

---

## CSS Modules

Use CSS Modules for

- Complex hover effects
- Pseudo-elements
- Keyframes
- Clip-path
- Masks
- Filters
- Backdrop blur
- Custom gradients
- Advanced animations
- Component-specific styling

Example

```css
.card {
    backdrop-filter: blur(20px);
}

.card::before {
    content: "";
}

.card:hover {
    transform: translateY(-12px);
}
```

Import

```tsx
import styles from "./Hero.module.css";
```

Use

```tsx
<section className={styles.hero}>
```

---

# Naming Convention

Components

```
Hero.tsx
Footer.tsx
Button.tsx
```

CSS Modules

```
Hero.module.css
Footer.module.css
Button.module.css
```

Hooks

```
useLenis.ts
useMagnetic.ts
```

Types

```
service.ts
project.ts
```

Data

```
navigation.ts
portfolio.ts
```

---

# Import Convention

Always use absolute imports.

Correct

```tsx
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import { navigation } from "@/data/navigation";
```

Avoid

```tsx
../../../components/Header
```

---

# Component Guidelines

Start with one component per file.

Split a component only when

- It becomes difficult to maintain.
- It exceeds approximately 200–300 lines.
- A portion is reused elsewhere.
- Separate concerns improve readability.

Avoid creating unnecessary micro-components.

Example

❌

```
Header/
├── Logo.tsx
├── Nav.tsx
├── CTAButton.tsx
├── NavItem.tsx
```

Preferred

```
Header.tsx
Header.module.css
```

Refactor only when complexity justifies it.

---

# Architecture Principles

- Feature-based organization
- Co-locate components and styles
- Reuse only when beneficial
- Keep data separate from UI
- Keep animations close to the component they belong to
- Favor readability over deep nesting
- Build for scalability without premature abstraction

---

# Goal

Maintain a codebase that is

- Clean
- Scalable
- Consistent
- Easy to navigate
- Easy to maintain
- Production-ready