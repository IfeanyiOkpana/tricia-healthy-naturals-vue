<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name, 12));
</script>

<template>
  <g>
    <ellipse cx="120" cy="197" rx="52" ry="6" fill="#000" opacity=".12" />
    <rect x="104" y="46" width="32" height="38" rx="4" :fill="p.main" opacity=".8" />
    <rect x="100" y="34" width="40" height="18" rx="5" :fill="p.dark" />
    <path d="M108 78h24c22 10 30 24 30 46v56q0 14-14 14H92q-14 0-14-14v-56c0-22 8-36 30-46z" :fill="p.main" />
    <path d="M90 100c-4 8-6 16-6 26v50" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="6" stroke-linecap="round" />
    <rect x="90" y="112" width="60" height="56" rx="8" :fill="p.label" />
    <text x="120" y="130" text-anchor="middle" font-size="6" font-weight="700" letter-spacing="2" :fill="p.ink" :font-family="FONT">TRICIA</text>
    <text x="120" y="150" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.ink" :font-family="FONT">{{ name }}</text>
  </g>
</template>
