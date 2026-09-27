<script setup>
import { nextTick, ref, watch } from 'vue';
import TheHeader from './components/TheHeader.vue';
import TheHero from './components/TheHero.vue';
import TrustBar from './components/TrustBar.vue';
import ShopSection from './components/ShopSection.vue';
import AboutSection from './components/AboutSection.vue';
import HowToOrder from './components/HowToOrder.vue';
import ReviewsSection from './components/ReviewsSection.vue';
import FaqSection from './components/FaqSection.vue';
import FinalCta from './components/FinalCta.vue';
import TheFooter from './components/TheFooter.vue';
import WhatsAppFab from './components/WhatsAppFab.vue';
import ProductModal from './components/ProductModal.vue';
import { useWhatsApp } from './composables/useWhatsApp';
import { useProductModal } from './composables/useProductModal';
import { SHOW_REVIEWS } from './data/business';

const { chatLink, orderLink } = useWhatsApp();
const { selected, sizeIdx, qty, total, modalLink, openProduct, closeProduct } = useProductModal(orderLink);

const menuOpen = ref(false);
const shopSection = ref(null);

// Lock page scroll while the product sheet or mobile menu is open.
watch(
  () => Boolean(selected.value || menuOpen.value),
  (locked) => { document.documentElement.style.overflow = locked ? 'hidden' : ''; },
);

function selectCategory(category) {
  nextTick(() => {
    if (shopSection.value) shopSection.value.category = category;
  });
}
</script>

<template>
  <div id="top">
    <!-- Announcement -->
    <div class="bg-deep text-sm text-white">
      <p class="mx-auto max-w-7xl px-4 py-2 text-center sm:px-6 lg:px-8">We deliver across Nigeria. Order in minutes on WhatsApp.</p>
    </div>

    <TheHeader v-model="menuOpen" :chat-link="chatLink" />

    <main>
      <TheHero :chat-link="chatLink" />
      <TrustBar />
      <ShopSection ref="shopSection" :chat-link="chatLink" :order-link="orderLink" @open-product="openProduct" />
      <AboutSection />
      <HowToOrder />
      <ReviewsSection v-if="SHOW_REVIEWS" />
      <FaqSection :chat-link="chatLink" />
      <FinalCta :chat-link="chatLink" />
    </main>

    <TheFooter :chat-link="chatLink" @select-category="selectCategory" />
    <WhatsAppFab :chat-link="chatLink" />

    <Transition name="sheet">
      <ProductModal
        v-if="selected"
        :product="selected"
        :size-idx="sizeIdx"
        :qty="qty"
        :total="total"
        :modal-link="modalLink"
        @update:sizeIdx="sizeIdx = $event"
        @update:qty="qty = $event"
        @close="closeProduct"
      />
    </Transition>
  </div>
</template>
