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

## Deploying

`npm run build` outputs a static site into `dist/`, which can be hosted on
any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) — no server or
database required.
