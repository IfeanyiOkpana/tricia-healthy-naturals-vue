<script setup>
import IconBase from './IconBase.vue';
import { navLinks } from '../data/content';

const props = defineProps({
  chatLink: { type: String, required: true },
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const toggle = () => emit('update:modelValue', !props.modelValue);
const close = () => emit('update:modelValue', false);
</script>

<template>
  <header class="sticky-safe z-40 border-b border-line bg-canvas/90 backdrop-blur">
    <div class="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <a href="#top" class="flex items-center gap-3" aria-label="Tricia Healthy Naturals, home">
        <span class="grid h-11 w-11 place-items-center rounded-full bg-brand text-white"><IconBase name="leaf" :size="22" /></span>
        <span class="leading-none">
          <span class="block font-display text-[1.35rem] font-extrabold tracking-tight">Tricia</span>
          <span class="mt-0.5 block text-xs font-medium text-muted">Healthy Naturals</span>
        </span>
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Main">
        <a v-for="l in navLinks" :key="l.href" :href="l.href" class="text-[0.95rem] font-medium text-ink/80 hover:text-brandtext">{{ l.label }}</a>
      </nav>

      <div class="flex items-center gap-2">
        <a
          :href="chatLink" target="_blank" rel="noopener noreferrer"
          class="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-deep sm:inline-flex"
        >
          <IconBase name="whatsapp" :size="18" /> Chat with us
        </a>
        <button
          type="button" class="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
          :aria-expanded="modelValue" aria-controls="mobile-menu" @click="toggle"
        >
          <span class="sr-only">{{ modelValue ? 'Close menu' : 'Open menu' }}</span>
          <IconBase :name="modelValue ? 'x' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <div v-if="modelValue" id="mobile-menu" class="border-t border-line bg-canvas md:hidden">
      <nav class="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
        <a
          v-for="l in navLinks" :key="l.href" :href="l.href" @click="close"
          class="border-b border-line py-4 font-display text-xl font-bold last:border-0"
        >{{ l.label }}</a>
        <a
          :href="chatLink" target="_blank" rel="noopener noreferrer"
          class="mb-2 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 font-semibold text-white"
        >
          <IconBase name="whatsapp" :size="20" /> Chat with us on WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>
