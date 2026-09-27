<script setup>
import IconBase from './IconBase.vue';
import { promises } from '../data/content';
</script>

<template>
  <section id="about" class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
    <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <h2 class="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">Healthy naturals, made from crops we know and trust.</h2>
        <p class="mt-6 max-w-lg text-lg leading-relaxed text-muted">
          Tricia Healthy Naturals is a Nigerian business built on a simple idea: what you cook and eat should be easy to understand. We keep our ingredient lists short, tell you what each product is for, and answer your questions personally.
        </p>
      </div>
      <dl class="divide-y divide-line border-y border-line">
        <div v-for="v in promises" :key="v.title" class="flex gap-5 py-6">
          <span class="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf text-brandtext"><IconBase :name="v.icon" :size="22" /></span>
          <div>
            <dt class="font-display text-xl font-bold">{{ v.title }}</dt>
            <dd class="mt-1 max-w-xl text-muted">{{ v.text }}</dd>
          </div>
        </div>
      </dl>
    </div>
  </section>
</template>
