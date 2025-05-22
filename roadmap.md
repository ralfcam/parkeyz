# Parkeys – Development Roadmap

> Last updated: May 2025 (updated June 2025)

## 1 · Product & Tech Vision  
Deliver a delightful, high-performance web experience that makes choosing, configuring and purchasing Parkeys parking solutions effortless for users world-wide.

•  Front-end only today — we will gradually evolve towards a full-stack platform.  
•  Keep a lean, component-driven architecture to enable rapid feature delivery.  
•  Use data-driven insights (analytics, A/B tests) to iterate continuously.

---

## 2 · Current Codebase Snapshot (⤵ extracted from /src)
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom utility classes in `index.css`
- **Icons**: lucide-react
- **State & Navigation**: local `useState` switching inside `App/composants`; no dedicated router/store yet
- **Pages / Sections**  
  `Entete` (header) → `ContenuPrincipal` switcher → individual feature modules inside `composants/`:
  •  Landing (Hero, Why Parkeeyz, FAQ, Call-to-Action…)  
  •  Pricing (`Forfaits`) with plan comparison  
  •  Boutique (shop) incl. product detail & cart placeholder  
  •  Tutorials & Videos  
  •  Contact Form  
  •  Legal pages (CGU, Privacy)  
  •  Checkout flow: Shipping (`InformationsLivraison`) → Payment (`OptionsPaiement`) → Confirmation (TBD)
- **Build Tooling**: Vite

> 💡 **Gap analysis**: no routing, no global state, no tests, no backend/APIs, no CI/CD, mono-language (🇫🇷 only).

---

## 3 · Roadmap At-a-Glance

| Horizon | Outcome | Key Themes |
|---------|---------|-----------|
| **Sprint 0 – hardening (≈2 wks)** | Reach "internal demo" quality | Routing • Basic cart state • Form validation • Design polish |
| **Q3 2025** | Production-ready MVP (v1.0) | Auth • Real checkout (Stripe/PayPal) • i18n (🇫🇷/🇬🇧) • Analytics • Unit + E2E tests |
| **Q4 2025** | Growth & Scale | SSR/Next.js migration • CMS/back-office • Performance (CWV) • CI/CD • SEO |
| **2026+** | Platform expansion | Mobile app • Micro-services • AI recommendations • B2B portal |

---

## 4 · Detailed Task Backlog

### Sprint 0 · **Codebase Hardening**
- [ ] Integrate **React Router v6** → replace `useState` view switch.
- [ ] Create lightweight **cart context** (React Context + reducer).
- [ ] Basic **form validation** (React-Hook-Form + Yup) for Contact & Payment.
- [x] Tailwind **design tokens** → centralise colours, spacing, typography.
- [ ] Replace placeholder images with optimised assets, add <img loading="lazy">.
- [ ] Linting & formatting: ESLint + Prettier + husky pre-commit.

### MVP · **Q3 2025**
#### Core Features
- [ ] **Authentication** (Firebase Auth or Supabase) – Sign-in/out, protected routes.
- [ ] **Checkout flow** end-to-end: cart → shipping → payment (Stripe & PayPal) → order confirmation.
- [ ] **Internationalisation** with react-i18next (FR/EN) incl. dynamic locale switch.
- [ ] **Product catalogue API** (Node/Express + Prisma) seeded with demo data.
#### Quality
- [ ] **Unit tests** (Vitest + React Testing Library) for critical UI.
- [ ] **E2E tests** (Cypress) covering main purchase path.
- [ ] **Accessibility audit** – pass WCAG AA.

### Growth · **Q4 2025**
- [ ] **Next.js migration** for SSR/SEO; preserve Tailwind config.
- [ ] **CMS integration** (Sanity or Strapi) powering legal pages, blog, FAQs.
- [ ] **Performance**: optimise CWV (code-splitting, image optimisation, lazy routes).
- [ ] **CI/CD** pipeline (GitHub Actions → Vercel/Netlify) with automated tests.
- [ ] **Error monitoring** (Sentry) & logging.
- [ ] **SEO enhancements**: structured data, sitemap, meta tags.

### 2026+ · **Platform & Business Expansion**
- [ ] **Mobile app** (React Native / Expo) sharing component library.
- [ ] **Micro-services** split for catalogue, orders, auth.
- [ ] **AI recommendations** engine ("customers also bought").
- [ ] **B2B dashboard** for fleet/enterprise clients.
- [ ] **Partner/Affiliate API** & referral tracking.

---

## 5 · KPIs & Monitoring
- Conversion rate (landing → checkout → paid)
- Average order value & cart abandonment
- Page load & Core Web Vitals scores
- Error rate & uptime
- Monthly active users / returning users
- International traffic share after i18n launch

---

## 6 · Timeline Heat-Map
```
Sprint 0 (🛠️) | ▓▓▓▓▓▓░░░░░   May 2025
MVP v1.0 (🚀) | ░▓▓▓▓▓▓▓░░░   Jun–Aug 2025
Growth  (📈)  | ░░░▓▓▓▓▓▓▓▓   Sep–Dec 2025
Future (🌐)   | ░░░░░░░░▓▓▓   2026+
```

> This roadmap is a living document — revisit after every sprint review. 