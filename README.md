# ShopHub — Whatbytes Frontend Assignment

A mini e-commerce storefront built with **Next.js 14 (App Router)** and **Tailwind CSS**, matching the assignment's provided UI mockup.

**Live demo:** _add your Vercel URL here after deploying_

## Features

- **Product Listing (`/`)** — responsive grid (3 cols desktop / 2 tablet / 1 mobile), category & brand filters, price range slider, live search
- **Product Detail (`/product/[id]`)** — dynamic routing, quantity selector, add to cart, reviews placeholder
- **Cart (`/cart`)** — quantity controls, remove item, price summary
- **URL-based filters** — e.g. `/?category=Electronics&price=500&q=phone`
- **Cart state** — React Context, persisted to `localStorage`
- **Conditional rendering** — "No products found" empty state

## Tech stack

- Next.js 14 (App Router, JavaScript)
- Tailwind CSS
- lucide-react icons
- React Context for cart state

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  page.js                 # Product listing page
  product/[id]/page.js    # Product detail page
  cart/page.js            # Cart page
  layout.js, globals.css
components/
  Header.js, Sidebar.js, ProductCard.js, Footer.js, StarRating.js
context/
  CartContext.js          # Cart state + localStorage persistence
data/
  products.js              # Product catalog
```

## Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own copy:

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Deploy, then add the live URL to the top of this README.
