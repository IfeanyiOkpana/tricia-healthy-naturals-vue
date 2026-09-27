<script setup>
import { steps } from '../data/content';
</script>

<template>
  <section id="how" class="bg-leaf">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h2 class="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Ordering takes three steps</h2>
      <ol class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        <li v-for="(s, i) in steps" :key="s.title" class="flex gap-5 md:block">
          <span class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand font-display text-2xl font-extrabold text-white">{{ i + 1 }}</span>
          <div class="md:mt-6">
            <h3 class="font-display text-xl font-bold">{{ s.title }}</h3>
            <p class="mt-2 max-w-sm text-muted">{{ s.text }}</p>
          </div>
        </li>
      </ol>
      <a href="#shop" class="mt-12 inline-flex rounded-full bg-brand px-8 py-4 font-semibold text-white hover:bg-deep">Start shopping</a>
    </div>
  </section>
</template>
