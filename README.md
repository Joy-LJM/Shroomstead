# 🍄 Shroomstead

**Rent, repairs and paperwork in one cozy place.**

Shroomstead is a landlord-tenant management app built with Next.js (App Router). Anyone can browse available homes on fast, SEO-friendly public pages. Landlords and tenants get their own dashboards for listings, rent status and maintenance requests.

> **Status: work in progress.** This is the Weeks 11–12 build of a longer learning roadmap. The data layer is intentionally mocked for now (see [What's mocked vs. real](#whats-mocked-vs-real)).

<!-- TODO: add screenshots once the pages are built -->
<!-- ![Public listings](docs/listings.png) -->
<!-- ![Tenant dashboard](docs/tenant-mobile.png) -->

---

## Why this project exists

I built Shroomstead to practice Next.js's hybrid rendering model on a domain that needs all of it:

- **Public listing pages** that must be fast and indexable by search engines (static generation + ISR).
- **Private dashboards** with per-user data that must always be fresh (dynamic rendering).
- **Slow, secondary data** (payment history, maintenance feeds) that should not block the rest of the page (streaming + Suspense).
- **Mutations** (new listings, repair requests) without hand-written API routes (Server Actions).

---

## Features

Legend: ✅ done, 🚧 in progress, ⬜ planned

**Public**
- ⬜ Property listings grid with filters
- ⬜ Property detail pages (`/properties/[id]`) with per-listing SEO metadata

**Landlord dashboard**
- ⬜ View and manage owned properties
- ⬜ Create and edit listings (Server Action)
- ⬜ See tenants' rent payment status
- ⬜ Maintenance request feed across properties (streamed)

**Tenant dashboard**
- ⬜ Lease summary
- ⬜ Rent payment history (streamed)
- ⬜ Submit a maintenance request (Server Action)

---

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | `next/font` (Fredoka for headings, Figtree for body) |
| Data (current) | In-memory mock data behind async functions |
| Testing | Planned |

---

## Rendering strategy

Each route uses the rendering mode that matches its data. This table is the plan; update it as the routes are built.

| Route | Who sees it | Rendering | Why |
|---|---|---|---|
| `/` | Public | Static + ISR (`revalidate: 60`) | Listings change rarely and should be crawlable |
| `/properties/[id]` | Public | SSG with `generateStaticParams` + ISR | One pre-rendered page per listing, refreshed on a timer or on demand |
| `/landlord` | Landlord | Dynamic | Per-user data must be fresh |
| `/tenant` | Tenant | Dynamic + Suspense streaming | Lease info shows immediately; payment history streams in |

**Server vs. Client Components:** pages and data fetching are Server Components by default. `'use client'` is used only for small interactive pieces (for example, the listing filters), so as little JavaScript as possible ships to the browser.

---

## Project structure

```
app/
  layout.tsx                  Root layout, fonts, shared nav
  page.tsx                    Public listings
  not-found.tsx               404 page
  properties/[id]/page.tsx    Listing detail
  (dashboard)/                Route group: shared dashboard layout, no URL segment
    layout.tsx
    landlord/page.tsx
    tenant/page.tsx
lib/
  data.ts                     Mock data + async getters (swap for a real API later)
```

*(If your project uses a `src/` folder, everything above lives inside it.)*

---

## Getting started

Requirements: a current Node.js LTS release and npm.

```bash
git clone <your-repo-url>
cd shroomstead
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

---

## What's mocked vs. real

| Piece | Now | Planned |
|---|---|---|
| Data | Hardcoded arrays in `lib/data.ts`, exposed through async functions | Real backend (Node/FastAPI) with a database |
| Authentication | Mock role cookie + middleware redirect | Real JWT-based auth |
| Payments | Display only | Out of scope for this phase |
| Lease documents | Placeholder text | File upload + storage |

Data access goes through async functions (`getProperties()`, `getProperty(id)`), so the swap to a real API changes the data layer, not the components that call it.

---

## Design

The look comes from the project icon: a mushroom shaped like a house.

- **Colors:** cap red `#C9402F` (actions only), bark `#3B2418` (text), moss `#4F7A4A` (success), butter `#FFE08A` (pending), plus warm neutrals `#FFF8EC`, `#FFF0D4` and `#E8D5B5`.
- **Typography:** Fredoka for headings and big numbers, Figtree for everything else.
- **Accessibility:** button text meets WCAG AA contrast (4.5:1), touch targets are at least 48 px, and status is always conveyed with a word, never color alone.
- **Mobile-first:** layouts are built to work on a phone, with a native mobile app as a possible future step.

---

## Performance and quality results

> Fill these in with **real measurements** after the verification step. Don't publish numbers you haven't measured.

| Metric | Target | Result |
|---|---|---|
| First-load JS on core routes | under 150 KB | TODO |
| Lighthouse Performance (listings page) | above 95 | TODO |
| Lighthouse SEO (listings page) | above 95 | TODO |

How measured: TODO (for example, `@next/bundle-analyzer` for bundle size and Lighthouse in an incognito window on a production build).

---

## Key decisions and trade-offs

- **ISR over pure SSR for public listings.** Listings change rarely, so serving cached pages and refreshing them in the background is faster and cheaper than rendering on every request. The trade-off is that a visitor can briefly see data up to 60 seconds old.
- **Granular Suspense boundaries over one page-level loading state.** A slow payment-history query should not delay the lease summary. The trade-off is a few more components to manage.
- **Mocked backend first.** It keeps this phase focused on rendering and caching. The trade-off is that mutations reset when the server restarts.
- **Server Actions need their own validation.** They are callable endpoints, so each action validates its input and does not rely on "it runs on the server" for safety.

---

## Roadmap

- [ ] Finish the routing skeleton and mock data layer
- [ ] Build the public listings and detail pages (ISR + SEO metadata)
- [ ] Add Server Actions for listings and repair requests
- [ ] Stream the slow dashboard sections with Suspense
- [ ] Measure bundle size and Lighthouse scores, then fill in the results table
- [ ] Replace mock data and mock auth with a real backend and JWT auth
- [ ] Add automated tests
- [ ] Mobile version (PWA or native)

---

## License

TODO: choose a license (MIT is a common default for portfolio projects).