# Tricia Healthy Naturals

A Vue 3 (Composition API, `<script setup>`) + Tailwind CSS storefront for a Nigerian
natural-foods business. There is no cart or checkout — every "Buy now" button opens
WhatsApp with the order pre-filled, ready for the customer to send.

## Getting started

```bash
npm install
npm run dev       # start a local dev server
npm run build     # build the production site into dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18 or newer.

## Before you launch

1. **Set the WhatsApp number.** Open `src/data/business.js` and replace the
   `whatsapp` value with the real number, in international format with digits
   only (e.g. a Nigerian `0801 234 5678` becomes `2348012345678`).
2. **Check the products and prices.** `src/data/products.js` has the full
   catalogue: names, descriptions, sizes and prices in naira. Edit anything
   that doesn't match the real business.
3. **Replace the sample reviews.** The three testimonials in
   `src/data/content.js` are placeholders — swap in real customer feedback
   (with their permission), or set `SHOW_REVIEWS` to `false` in
   `src/data/business.js` to hide the section.
4. **Add a honey photo when you have one.** Raw Honey and the Pantry Wellness
   Bundle currently use the illustrated pack art (see "Product photos" below)
   because no photo was supplied for honey.

## Project structure

```
src/
├── App.vue                    Root layout, wires sections together
├── main.js                    App entry point
├── style.css                  Tailwind directives + design tokens/animations
├── data/
│   ├── business.js            WhatsApp number, socials, feature flags
│   ├── products.js            Product catalogue (imports real photos)
│   └── content.js              Nav links, trust points, FAQ, reviews, etc.
├── utils/
│   └── format.js               Currency formatting and small helpers
├── composables/
│   ├── useWhatsApp.js          Builds wa.me chat/order links
│   ├── useShop.js               Search, category filter and sort state
│   └── useProductModal.js       Product detail sheet state
├── assets/images/               Real product photos (jpg)
└── components/
    ├── TheHeader.vue, TheHero.vue, TrustBar.vue
    ├── ShopSection.vue, ProductCard.vue, ProductModal.vue
    ├── AboutSection.vue, HowToOrder.vue, ReviewsSection.vue, FaqSection.vue
    ├── FinalCta.vue, TheFooter.vue, WhatsAppFab.vue
    ├── IconBase.vue             Small inline icon set
    ├── ProductArt.vue           Shows a real photo, or falls back to...
    └── art/                     ...illustrated pack art (Jar/Pouch/Tin/etc.)
```

## Product photos

Five of the eight catalogue entries use real photos supplied by the business
(`src/assets/images/*.jpg`), imported directly in `src/data/products.js`.
Raw Honey and the Pantry Wellness Bundle don't have a photo yet, so they fall
back to a simple illustrated pack drawn in SVG (`src/components/art/`). To
add a real photo for either of those:

1. Drop the image into `src/assets/images/`.
2. Import it at the top of `src/data/products.js`.
3. Add `image: yourImportName` to that product's object.

The `ProductArt` component automatically prefers a real photo (`product.image`)
and only falls back to the illustration when one isn't set.

## Deploying

`npm run build` outputs a static site into `dist/`, which can be hosted on
any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) — no server or
database required.
