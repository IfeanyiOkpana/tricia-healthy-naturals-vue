<script setup>
import { onMounted, ref } from 'vue';
import IconBase from './IconBase.vue';
import ProductArt from './ProductArt.vue';
import { money } from '../utils/format';

defineProps({
  product: { type: Object, required: true },
  sizeIdx: { type: Number, required: true },
  qty: { type: Number, required: true },
  total: { type: Number, required: true },
  modalLink: { type: String, required: true },
});
const emit = defineEmits(['update:sizeIdx', 'update:qty', 'close']);

const modalRoot = ref(null);
const closeBtn = ref(null);

onMounted(() => closeBtn.value && closeBtn.value.focus());

function onKeydown(e) {
  if (e.key === 'Escape') {
    emit('close');
    return;
  }
  if (e.key !== 'Tab' || !modalRoot.value) return;
  const focusable = modalRoot.value.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}
</script>

<template>
  <div
    ref="modalRoot"
    class="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
    role="dialog" aria-modal="true" aria-labelledby="product-title" @keydown="onKeydown"
  >
    <div class="absolute inset-0 bg-ink/60 backdrop-blur-sm" @click="emit('close')" />
    <div
      class="sheet-panel relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[2rem] bg-surface sm:rounded-[2rem]"
      style="padding-bottom: env(safe-area-inset-bottom, 0px)"
    >
      <button
        ref="closeBtn"
        type="button" class="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#14261e] shadow hover:bg-white"
        @click="emit('close')"
      >
        <span class="sr-only">Close product details</span><IconBase name="x" :size="20" />
      </button>

      <div class="grid flex-1 overflow-y-auto md:grid-cols-2">
        <div class="relative aspect-[6/5] md:aspect-auto md:min-h-[26rem]" :style="{ background: product.palette.tile }">
          <ProductArt :product="product" class="absolute inset-0 h-full w-full" />
        </div>
        <div class="p-6 sm:p-8">
          <p class="text-sm font-semibold text-brandtext">{{ product.category }}</p>
          <h2 id="product-title" class="mt-1 font-display text-3xl font-bold leading-tight tracking-tight">{{ product.name }}</h2>
          <p class="mt-4 leading-relaxed text-muted">{{ product.description }}</p>

          <ul class="mt-5 space-y-2">
            <li v-for="b in product.benefits" :key="b" class="flex items-start gap-3 text-[0.95rem]">
              <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-leaf text-brandtext"><IconBase name="check" :size="12" /></span>{{ b }}
            </li>
          </ul>

          <fieldset v-if="product.sizes.length > 1" class="mt-6">
            <legend class="text-sm font-semibold">Choose a size</legend>
            <div class="mt-2 flex flex-wrap gap-2">
              <label v-for="(s, i) in product.sizes" :key="s.label" class="cursor-pointer">
                <input
                  :checked="sizeIdx === i" type="radio" name="size" class="peer sr-only"
                  @change="emit('update:sizeIdx', i)"
                >
                <span class="block rounded-full border border-line px-4 py-2 text-sm font-semibold peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand">
                  {{ s.label }}, {{ money(s.price) }}
                </span>
              </label>
            </div>
          </fieldset>

          <dl class="mt-6 space-y-4 border-t border-line pt-6 text-[0.95rem]">
            <div v-if="product.includes">
              <dt class="font-semibold">What is in the bundle</dt>
              <dd class="mt-1 text-muted">{{ product.includes }}</dd>
            </div>
            <div>
              <dt class="font-semibold">How to use</dt>
              <dd class="mt-1 text-muted">{{ product.howToUse }}</dd>
            </div>
            <div>
              <dt class="font-semibold">Ingredients</dt>
              <dd class="mt-1 text-muted">{{ product.ingredients }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex flex-col gap-4 border-t border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div class="flex items-center justify-between gap-6 sm:justify-start">
          <div class="flex items-center rounded-full border border-line" role="group" aria-label="Quantity">
            <button
              type="button" class="grid h-11 w-11 place-items-center rounded-full hover:bg-ink/5"
              :disabled="qty <= 1" :class="qty <= 1 ? 'opacity-40' : ''" @click="emit('update:qty', qty - 1)"
            >
              <span class="sr-only">Decrease quantity</span><IconBase name="minus" :size="18" />
            </button>
            <span class="w-8 text-center font-semibold" aria-live="polite">{{ qty }}</span>
            <button
              type="button" class="grid h-11 w-11 place-items-center rounded-full hover:bg-ink/5"
              :disabled="qty >= 20" :class="qty >= 20 ? 'opacity-40' : ''" @click="emit('update:qty', qty + 1)"
            >
              <span class="sr-only">Increase quantity</span><IconBase name="plus" :size="18" />
            </button>
          </div>
          <p class="text-right sm:text-left">
            <span class="block text-sm text-muted">Total</span>
            <span class="block font-display text-2xl font-bold leading-none">{{ money(total) }}</span>
          </p>
        </div>
        <div class="sm:max-w-xs sm:flex-1">
          <a
            :href="modalLink" target="_blank" rel="noopener noreferrer"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white hover:bg-deep"
          >
            <IconBase name="whatsapp" :size="20" /> Buy now on WhatsApp
          </a>
          <p class="mt-2 text-center text-xs text-muted">No payment is taken here. You confirm and pay in the chat.</p>
        </div>
      </div>
    </div>
  </div>
</template>
