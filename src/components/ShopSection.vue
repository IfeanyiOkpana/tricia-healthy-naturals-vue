<script setup>
import IconBase from './IconBase.vue';
import ProductCard from './ProductCard.vue';
import { useShop } from '../composables/useShop';
import { products } from '../data/products';

const props = defineProps({
  chatLink: { type: String, required: true },
  orderLink: { type: Function, required: true },
});
const emit = defineEmits(['open-product']);

const { query, category, sort, categories, counts, filteredProducts, resetFilters } = useShop(products);

defineExpose({ category }); // exposed so the footer can jump to a category
</script>

<template>
  <section id="shop" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-xl">
        <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">Shop the collection</h2>
        <p class="mt-4 text-lg text-muted">Open a product to pick a size and quantity. Tap Buy now and your order opens in WhatsApp, ready to send.</p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <label class="relative block">
          <span class="sr-only">Search products</span>
          <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"><IconBase name="search" :size="18" /></span>
          <input
            v-model.trim="query" type="search" placeholder="Search products"
            class="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted sm:w-64"
          >
        </label>
        <label class="block">
          <span class="sr-only">Sort products</span>
          <select v-model="sort" class="w-full rounded-full border border-line bg-surface px-5 py-3 text-sm text-ink sm:w-auto">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>
      </div>
    </div>

    <div class="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter by category">
      <button
        v-for="c in categories" :key="c" type="button" :aria-pressed="category === c" @click="category = c"
        class="shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold"
        :class="category === c ? 'border-brand bg-brand text-white' : 'border-line bg-surface text-ink hover:border-ink/40'"
      >
        {{ c }} <span :class="category === c ? 'text-white/75' : 'text-muted'">{{ counts[c] }}</span>
      </button>
    </div>

    <p class="sr-only" aria-live="polite">{{ filteredProducts.length }} products shown</p>

    <ul v-if="filteredProducts.length" class="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
      <ProductCard
        v-for="p in filteredProducts" :key="p.id" :product="p" :order-link="orderLink"
        @open="emit('open-product', $event)"
      />
    </ul>

    <div v-else class="mt-10 rounded-[2rem] border border-dashed border-line px-6 py-14 text-center">
      <p class="font-display text-2xl font-bold">No products match your search</p>
      <p class="mx-auto mt-2 max-w-md text-muted">Try a different word, or clear the filters. If you cannot find what you need, ask us on WhatsApp.</p>
      <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" class="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-deep" @click="resetFilters">Clear filters</button>
        <a :href="chatLink" target="_blank" rel="noopener noreferrer" class="rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold hover:bg-ink/5">Ask on WhatsApp</a>
      </div>
    </div>
  </section>
</template>
