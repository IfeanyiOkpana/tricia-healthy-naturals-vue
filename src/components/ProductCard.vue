<script setup>
import { computed } from 'vue';
import IconBase from './IconBase.vue';
import ProductArt from './ProductArt.vue';
import { money, saving, startPrice } from '../utils/format';

const props = defineProps({
  product: { type: Object, required: true },
  orderLink: { type: Function, required: true },
});
const emit = defineEmits(['open']);

const cardSaving = computed(() => saving(props.product));
const buyNowLink = computed(() => props.orderLink(props.product, props.product.sizes[0], 1));
</script>

<template>
  <li class="flex flex-col">
    <button
      type="button" class="relative block aspect-[6/5.5] overflow-hidden rounded-[1.75rem] text-left"
      :style="{ background: product.palette.tile }" :aria-label="'View details for ' + product.name"
      @click="emit('open', product)"
    >
      <ProductArt :product="product" class="h-full w-full" />
      <span v-if="cardSaving" class="absolute left-3 top-3 rounded-full bg-hibiscus px-3 py-1 text-xs font-bold text-white">Save {{ money(cardSaving) }}</span>
      <span v-else-if="product.badge" class="absolute left-3 top-3 rounded-full bg-deep px-3 py-1 text-xs font-bold text-white">{{ product.badge }}</span>
    </button>
    <div class="mt-4 flex flex-1 flex-col">
      <p class="text-xs font-semibold text-brandtext">{{ product.category }}</p>
      <h3 class="mt-1 font-display text-lg font-bold leading-snug">
        <button type="button" class="text-left hover:underline" @click="emit('open', product)">{{ product.name }}</button>
      </h3>
      <p class="mt-1 text-sm leading-snug text-muted">{{ product.tagline }}</p>
      <p class="mt-3 flex flex-wrap items-baseline gap-x-2 text-base font-bold">
        <span v-if="product.sizes.length > 1" class="text-sm font-medium text-muted">From</span>
        {{ money(startPrice(product)) }}
        <s v-if="product.sizes[0].was" class="text-sm font-medium text-muted">{{ money(product.sizes[0].was) }}</s>
      </p>
      <a
        :href="buyNowLink" target="_blank" rel="noopener noreferrer"
        class="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-deep"
        :aria-label="'Buy ' + product.name + ' now on WhatsApp'"
      >
        <IconBase name="whatsapp" :size="18" /> Buy now
      </a>
    </div>
  </li>
</template>
