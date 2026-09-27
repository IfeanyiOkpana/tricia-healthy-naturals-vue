<script setup>
import { ref } from 'vue';
import IconBase from './IconBase.vue';
import { faqs } from '../data/content';

defineProps({ chatLink: { type: String, required: true } });

const openFaq = ref(0);
const toggle = (i) => { openFaq.value = openFaq.value === i ? -1 : i; };
</script>

<template>
  <section id="faq" class="border-y border-line bg-surface">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8 lg:py-24">
      <div>
        <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">Questions before you order?</h2>
        <p class="mt-4 max-w-sm text-lg text-muted">
          Cannot find your answer?
          <a :href="chatLink" target="_blank" rel="noopener noreferrer" class="font-semibold text-brandtext underline underline-offset-4">Ask us on WhatsApp</a>.
        </p>
      </div>
      <div class="divide-y divide-line border-y border-line">
        <div v-for="(f, i) in faqs" :key="f.q">
          <h3>
            <button
              type="button" class="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-bold"
              :aria-expanded="openFaq === i" :aria-controls="'faq-' + i" @click="toggle(i)"
            >
              {{ f.q }}
              <IconBase name="chevron" :size="22" class="shrink-0 text-brandtext transition-transform" :class="openFaq === i ? 'rotate-180' : ''" />
            </button>
          </h3>
          <div :id="'faq-' + i" class="faq-panel" :data-open="openFaq === i ? 'true' : 'false'">
            <div class="overflow-hidden"><p class="max-w-2xl pb-6 pr-10 leading-relaxed text-muted">{{ f.a }}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
