<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name));
</script>

<template>
  <g>
    <ellipse cx="120" cy="197" rx="58" ry="7" fill="#000" opacity=".12" />
    <rect x="68" y="84" width="104" height="112" rx="24" :fill="p.main" />
    <rect x="78" y="96" width="7" height="76" rx="3.5" fill="#fff" opacity=".3" />
    <rect x="62" y="58" width="116" height="34" rx="11" :fill="p.dark" />
    <path d="M76 68v14M90 68v14M104 68v14M118 68v14M132 68v14M146 68v14M160 68v14" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="3" stroke-linecap="round" />
    <rect x="82" y="110" width="76" height="62" rx="10" :fill="p.label" />
    <text x="120" y="128" text-anchor="middle" font-size="6.5" font-weight="700" letter-spacing="2.2" :fill="p.ink" :font-family="FONT">TRICIA</text>
    <text x="120" y="150" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.ink" :font-family="FONT">{{ name }}</text>
    <path d="M113 159c2-6 8-9 14-8-1 7-6 11-14 8z" :fill="p.dark" />
  </g>
</template>
