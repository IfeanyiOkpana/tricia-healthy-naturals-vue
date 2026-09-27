<script setup>
import { computed } from 'vue';
import ArtJar from './art/ArtJar.vue';
import ArtPouch from './art/ArtPouch.vue';
import ArtBar from './art/ArtBar.vue';
import ArtTin from './art/ArtTin.vue';
import ArtBottle from './art/ArtBottle.vue';
import ArtDropper from './art/ArtDropper.vue';

const ART_TYPES = { jar: ArtJar, pouch: ArtPouch, bar: ArtBar, tin: ArtTin, bottle: ArtBottle, dropper: ArtDropper };

// Bundle sub-illustrations are laid out at these fixed slots inside the 240x220 viewBox.
const BUNDLE_SLOTS = [
  { x: -24, y: 33, s: 0.8 }, // left, back
  { x: 68, y: 24, s: 0.85 }, // right, back
  { x: 30, y: 64, s: 0.75 }, // front, centre
];

const props = defineProps({ product: { type: Object, required: true } });

const palette = computed(() => props.product.palette);
const swapped = computed(() => ({ ...palette.value, main: palette.value.dark, dark: palette.value.main }));
const single = computed(() => ART_TYPES[props.product.type]);
const slots = computed(() =>
  (props.product.items || []).map((type, i) => ({
    comp: ART_TYPES[type],
    p: i === 1 ? swapped.value : palette.value,
    name: (props.product.itemLabels || [])[i] || '',
    t: `translate(${BUNDLE_SLOTS[i].x} ${BUNDLE_SLOTS[i].y}) scale(${BUNDLE_SLOTS[i].s})`,
  })),
);
</script>

<template>
  <div class="h-full w-full overflow-hidden">
    <img
      v-if="product.image"
      :src="product.image"
      :alt="product.name"
      class="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    >
    <svg v-else viewBox="0 0 240 220" preserveAspectRatio="xMidYMid meet" role="img" :aria-label="product.name">
      <circle cx="120" cy="118" r="90" :fill="palette.blob" />
      <g :fill="palette.dark" opacity=".42">
        <g transform="translate(30 198)"><path d="M0 0C-6-16 2-34 20-42 22-24 14-8 0 0Z" /><path d="M6-8C16-14 30-12 38 0 28 10 12 8 6-8Z" /></g>
        <g transform="translate(210 198) scale(-1 1)"><path d="M0 0C-6-16 2-34 20-42 22-24 14-8 0 0Z" /><path d="M6-8C16-14 30-12 38 0 28 10 12 8 6-8Z" /></g>
      </g>
      <template v-if="product.items">
        <g v-for="(s, i) in slots" :key="i" :transform="s.t">
          <component :is="s.comp" :p="s.p" :name="s.name" />
        </g>
      </template>
      <component v-else :is="single" :p="palette" :name="product.label" />
    </svg>
  </div>
</template>
