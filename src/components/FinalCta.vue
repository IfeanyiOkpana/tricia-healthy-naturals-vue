<script setup>
import IconBase from './IconBase.vue';

defineProps({ chatLink: { type: String, required: true } });
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div class="on-deep adire relative overflow-hidden rounded-[2rem] bg-deep px-6 py-14 text-center text-white ring-1 ring-white/10 sm:px-12 sm:py-20">
      <h2 class="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">Not sure where to start?</h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-white/80">Tell us about what you are cooking, and we will suggest what to order.</p>
      <a
        :href="chatLink" target="_blank" rel="noopener noreferrer"
        class="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-[#10261b] hover:bg-white"
      >
        <IconBase name="whatsapp" :size="22" /> Chat with us on WhatsApp
      </a>
    </div>
  </section>
</template>
