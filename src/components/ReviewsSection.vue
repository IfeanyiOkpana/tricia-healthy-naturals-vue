<script setup>
import { reviews } from '../data/content';
import { initials } from '../utils/format';
</script>

<template>
  <section id="reviews" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">Kind words from customers</h2>
    <div class="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
      <figure>
        <blockquote class="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[2rem]">&ldquo;{{ reviews[0].quote }}&rdquo;</blockquote>
        <figcaption class="mt-8 flex items-center gap-4">
          <span class="grid h-12 w-12 place-items-center rounded-full bg-gold font-display font-bold text-[#10261b]">{{ initials(reviews[0].name) }}</span>
          <span>
            <span class="block font-semibold">{{ reviews[0].name }}</span>
            <span class="block text-sm text-muted">{{ reviews[0].place }}, bought {{ reviews[0].product }}</span>
          </span>
        </figcaption>
      </figure>
      <div class="divide-y divide-line border-y border-line">
        <figure v-for="r in reviews.slice(1)" :key="r.name" class="py-7">
          <blockquote class="text-lg leading-relaxed">&ldquo;{{ r.quote }}&rdquo;</blockquote>
          <figcaption class="mt-4 text-sm text-muted"><span class="font-semibold text-ink">{{ r.name }}</span>, {{ r.place }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
