<script setup>
import IconBase from './IconBase.vue';
import { trust } from '../data/content';
</script>

<template>
  <section aria-label="Why shop with us" class="border-y border-line bg-surface">
    <ul class="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:divide-x lg:divide-line lg:px-8">
      <li v-for="t in trust" :key="t.title" class="flex items-center gap-4 py-5 lg:px-6 lg:first:pl-0">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-brandtext"><IconBase :name="t.icon" :size="22" /></span>
        <span>
          <span class="block font-display text-base font-bold leading-tight">{{ t.title }}</span>
          <span class="block text-sm text-muted">{{ t.text }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>
