<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name, 12));
</script>

<template>
  <g>
    <ellipse cx="120" cy="197" rx="46" ry="6" fill="#000" opacity=".12" />
    <rect x="86" y="92" width="68" height="104" rx="20" :fill="p.main" />
    <rect x="94" y="102" width="6" height="72" rx="3" fill="#fff" opacity=".3" />
    <rect x="104" y="74" width="32" height="22" rx="4" :fill="p.dark" />
    <rect x="98" y="62" width="44" height="14" rx="5" :fill="p.dark" />
    <path d="M110 62V44a10 10 0 0 1 20 0v18z" :fill="p.ink" opacity=".85" />
    <rect x="96" y="116" width="48" height="58" rx="8" :fill="p.label" />
    <text x="120" y="134" text-anchor="middle" font-size="5.5" font-weight="700" letter-spacing="1.6" :fill="p.ink" :font-family="FONT">TRICIA</text>
    <text x="120" y="153" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.ink" :font-family="FONT">{{ name }}</text>
    <path d="M114 161c2-5 7-8 12-7-1 6-5 9-12 7z" :fill="p.dark" />
  </g>
</template>
