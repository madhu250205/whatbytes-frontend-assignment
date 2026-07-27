# ShopHub — Whatbytes Frontend Assignment

A mini e-commerce storefront built with **Next.js 14 (App Router)** and **Tailwind CSS**, built to match the assignment's provided UI mockup.

**Live demo:** https://whatbytes-frontend-assignment-three.vercel.app/

**Repo:** https://github.com/madhu250205/whatbytes-frontend-assignment

## Features

- **Product Listing (`/`)** — responsive grid (3 columns desktop / 2 tablet / 1 mobile), category filter, brand filter, price range slider, live search
- **Product Detail (`/product/[id]`)** — dynamic routing, image, description, quantity selector, add to cart, reviews section
- **Cart (`/cart`)** — quantity controls, remove item, price summary
- **URL-based filters** — filter state lives in the URL, e.g. `/?category=Electronics&price=500&q=phone`
- **Cart persistence** — cart state managed with React Context, persisted to `localStorage` so it survives a refresh
- **Conditional rendering** — a "No products found" empty state when filters return nothing (e.g. selecting the "Home" category, which has no matching products)

## Tech stack

- Next.js 14 (App Router, JavaScript)
- Tailwind CSS
- lucide-react icons
- React Context for cart state management

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
  products.js             # Product catalog
```

## Notes on the reference mockup

A few inconsistencies in the provided mockup were resolved rather than reproduced:

- The "Wireless Headphones" card reused the running shoes' image and was missing a price — given its own product image and price here.
- The second filter box was mislabeled ("Cacyroy") and duplicated the Category and Price controls already shown above it — relabeled as **Brand**, per the assignment's optional brand-filter requirement, instead of repeating Category/Price.
- The sidebar lists a "Home" category with no matching products in the mockup's own grid — kept as-is here, since selecting it correctly demonstrates the required empty-state ("No products found") behavior.

## Deployment

Deployed on [Vercel](https://vercel.com), connected to this GitHub repo for automatic redeploys on push.

To deploy your own copy:

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Deploy.