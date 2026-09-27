<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name, 13));
</script>

<template>
  <g>
    <ellipse cx="120" cy="197" rx="56" ry="7" fill="#000" opacity=".12" />
    <rect x="72" y="72" width="96" height="124" rx="12" :fill="p.main" />
    <rect x="80" y="86" width="6" height="94" rx="3" fill="#fff" opacity=".28" />
    <rect x="66" y="58" width="108" height="26" rx="9" :fill="p.dark" />
    <ellipse cx="120" cy="140" rx="34" ry="34" :fill="p.label" />
    <text x="120" y="132" text-anchor="middle" font-size="6" font-weight="700" letter-spacing="2" :fill="p.ink" :font-family="FONT">TRICIA</text>
    <text x="120" y="152" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.ink" :font-family="FONT">{{ name }}</text>
  </g>
</template>
