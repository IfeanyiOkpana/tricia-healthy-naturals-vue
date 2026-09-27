<script setup>
import IconBase from './IconBase.vue';

defineProps({ chatLink: { type: String, required: true } });
</script>

<template>
  <a
    :href="chatLink" target="_blank" rel="noopener noreferrer"
    class="fab grid h-14 w-14 place-items-center rounded-full bg-[#1FAF5A] text-white shadow-xl hover:bg-[#178a47]"
    aria-label="Chat with us on WhatsApp"
  >
    <IconBase name="whatsapp" :size="28" />
  </a>
</template>
