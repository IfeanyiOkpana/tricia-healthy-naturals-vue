<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name));
</script>

<template>
  <g>
    <ellipse cx="120" cy="196" rx="64" ry="7" fill="#000" opacity=".12" />
    <g transform="rotate(7 120 150)"><rect x="60" y="108" width="112" height="70" rx="16" :fill="p.dark" /></g>
    <g transform="rotate(-6 120 150)">
      <rect x="58" y="116" width="116" height="72" rx="16" :fill="p.main" />
      <rect x="67" y="125" width="98" height="54" rx="11" fill="none" :stroke="p.label" stroke-opacity=".4" stroke-width="2" />
      <text x="116" y="146" text-anchor="middle" font-size="6.5" font-weight="700" letter-spacing="2.2" :fill="p.label" :font-family="FONT">TRICIA</text>
      <text x="116" y="166" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.label" :font-family="FONT">{{ name }}</text>
    </g>
  </g>
</template>
