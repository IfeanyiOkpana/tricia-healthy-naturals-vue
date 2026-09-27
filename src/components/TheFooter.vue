<script setup>
import IconBase from './IconBase.vue';
import { CATEGORY_ORDER } from '../data/products';
import { BUSINESS } from '../data/business';
import { formatPhone } from '../utils/format';

defineProps({ chatLink: { type: String, required: true } });
const emit = defineEmits(['select-category']);

const socials = Object.entries(BUSINESS.socials)
  .filter(([, href]) => href)
  .map(([label, href]) => ({ label, href }));

const phoneDisplay = formatPhone(BUSINESS.whatsapp);
const year = new Date().getFullYear();
</script>

<template>
  <footer class="on-deep bg-deep text-white">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <div class="flex items-center gap-3">
          <span class="grid h-11 w-11 place-items-center rounded-full bg-white/10"><IconBase name="leaf" :size="22" /></span>
          <span class="font-display text-xl font-extrabold tracking-tight">Tricia Healthy Naturals</span>
        </div>
        <p class="mt-4 max-w-sm text-white/75">Natural flours, nuts and honey, made in Nigeria and delivered to your door.</p>
      </div>
      <div>
        <h3 class="font-display text-lg font-bold">Shop</h3>
        <ul class="mt-4 space-y-2.5 text-white/75">
          <li v-for="c in CATEGORY_ORDER" :key="c">
            <a href="#shop" class="hover:text-white hover:underline" @click="emit('select-category', c)">{{ c }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-display text-lg font-bold">Contact</h3>
        <ul class="mt-4 space-y-2.5 text-white/75">
          <li>
            <a :href="chatLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-white hover:underline">
              <IconBase name="whatsapp" :size="18" /> {{ phoneDisplay }}
            </a>
          </li>
          <li v-for="s in socials" :key="s.label"><a :href="s.href" target="_blank" rel="noopener noreferrer" class="hover:text-white hover:underline">{{ s.label }}</a></li>
          <li>Delivery across Nigeria</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 py-6 text-sm text-white/65 sm:px-6 lg:px-8">
        <p>&copy; {{ year }} Tricia Healthy Naturals. All rights reserved.</p>
        <!--<p class="mt-2 max-w-3xl">Our products are natural food items. They are not intended to diagnose, treat, cure or prevent any disease. Speak to a health professional if you are pregnant, nursing, on medication or have a medical condition, including diabetes.</p>-->
      </div>
    </div>
  </footer>
</template>
