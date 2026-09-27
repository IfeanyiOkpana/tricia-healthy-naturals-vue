<script setup>
import { computed } from 'vue';
import { FONT, fontSize } from './artFontSize';

const props = defineProps({ p: { type: Object, required: true }, name: { type: String, default: '' } });
const fs = computed(() => fontSize(props.name));
</script>

<template>
  <g>
    <ellipse cx="120" cy="198" rx="58" ry="7" fill="#000" opacity=".12" />
    <path d="M72 62h96l6 122q0 12-12 12H78q-12 0-12-12z" :fill="p.main" />
    <path d="M72 62h96l1 14H71z" :fill="p.dark" />
    <path d="M76 86h88" fill="none" :stroke="p.dark" stroke-opacity=".5" stroke-width="2" stroke-dasharray="3 4" />
    <path d="M78 94l-3 92" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="6" stroke-linecap="round" />
    <rect x="84" y="106" width="72" height="72" rx="12" :fill="p.label" />
    <text x="120" y="128" text-anchor="middle" font-size="6.5" font-weight="700" letter-spacing="2.2" :fill="p.ink" :font-family="FONT">TRICIA</text>
    <text x="120" y="150" text-anchor="middle" :font-size="fs" font-weight="800" :fill="p.ink" :font-family="FONT">{{ name }}</text>
    <path d="M113 159c2-6 8-9 14-8-1 7-6 11-14 8z" :fill="p.dark" />
  </g>
</template>
