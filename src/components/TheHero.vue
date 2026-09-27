<script setup>
import IconBase from './IconBase.vue';
import { heroPoints } from '../data/content';
import { heroPhotos } from '../data/products';

defineProps({ chatLink: { type: String, required: true } });
</script>

<template>
  <section class="relative">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
      <div>
        <h1 class="font-display text-[clamp(2.7rem,6.4vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Healthy naturals, good for you and your family.
        </h1>
        <p class="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
          Plantain flour, beans flour, moringa powder, date powder, cashew nuts and raw honey. Everything is made in Nigeria and delivered to your door. Choose what you need and finish your order in a chat on WhatsApp.
        </p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#shop" class="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white hover:bg-deep">Shop the collection</a>
          <a
            :href="chatLink" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-8 py-4 text-base font-semibold hover:bg-ink/5"
          >
            <IconBase name="whatsapp" :size="20" /> Order on WhatsApp
          </a>
        </div>
        <ul class="mt-10 grid gap-3 text-[0.95rem] text-ink/85 sm:grid-cols-1">
          <li v-for="h in heroPoints" :key="h" class="flex items-center gap-3">
            <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf text-brandtext"><IconBase name="check" :size="14" /></span>
            {{ h }}
          </li>
        </ul>
      </div>

      <!-- Arch panel -->
      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="on-deep adire relative aspect-[520/600] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-deep ring-1 ring-white/10">
          <div class="pointer-events-none absolute inset-3 rounded-t-[999px] rounded-b-[1.4rem] border border-white/15" />
          <svg viewBox="0 0 520 600" preserveAspectRatio="xMidYMax meet" class="absolute inset-0 h-full w-full" aria-hidden="true">
            <g fill="#6FBF8E" opacity=".3">
              <g transform="translate(268 340) rotate(-132)"><path d="M0 0C30-38 110-44 175 0C110 44 30 38 0 0Z" /></g>
              <g transform="translate(268 340) rotate(-90)"><path d="M0 0C30-38 110-44 190 0C110 44 30 38 0 0Z" /></g>
              <g transform="translate(268 340) rotate(-48)"><path d="M0 0C30-38 110-44 175 0C110 44 30 38 0 0Z" /></g>
            </g>
            <rect x="24" y="500" width="472" height="10" rx="5" fill="#fff" opacity=".16" />
          </svg>

          <div class="rise absolute bottom-[4%] left-[5%] w-[42%] rotate-[-4deg]" style="animation-delay:.1s">
            <div class="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
              <img :src="heroPhotos.plantain" alt="Plantain Flour pack" class="h-full w-full rounded-xl object-cover">
            </div>
          </div>
          <div class="rise absolute right-[9%] top-[8%] w-[34%] rotate-[3deg]" style="animation-delay:.25s">
            <div class="aspect-[3/4] overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
              <img :src="heroPhotos.moringa" alt="Moringa Leaf Powder pack" class="h-full w-full rounded-xl object-cover">
            </div>
          </div>
          <div class="rise absolute bottom-[32%] right-[3%] w-[30%] rotate-[2deg]" style="animation-delay:.4s">
            <div class="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
              <img :src="heroPhotos.cashew" alt="Cashew Nuts bottle" class="h-full w-full rounded-xl object-cover">
            </div>
          </div>
          <div class="rise absolute bottom-[3%] left-[38%] w-[26%] rotate-[-2deg]" style="animation-delay:.55s">
            <div class="aspect-square overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-black/5">
              <img :src="heroPhotos.date" alt="Date Powder tub" class="h-full w-full rounded-xl object-cover">
            </div>
          </div>
        </div>

        <div class="absolute -left-2 bottom-[24%] flex items-center gap-2 rounded-full bg-surface py-2 pl-2 pr-4 text-sm font-semibold shadow-xl ring-1 ring-line sm:-left-6">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-leaf text-brandtext"><IconBase name="pin" :size="16" /></span>
          Made in Nigeria
        </div>
        <div class="absolute -right-1 top-[38%] flex items-center gap-2 rounded-full bg-gold py-2 pl-2 pr-4 text-sm font-semibold text-[#10261b] shadow-xl sm:-right-5">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-white/60"><IconBase name="truck" :size="16" /></span>
          Nationwide delivery
        </div>
      </div>
    </div>
  </section>
</template>
