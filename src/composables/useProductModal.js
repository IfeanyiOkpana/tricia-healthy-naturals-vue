import { computed, nextTick, ref } from 'vue';

export function useProductModal(orderLink) {
  const selected = ref(null);
  const sizeIdx = ref(0);
  const qty = ref(1);
  let lastFocus = null;

  const currentSize = computed(() => (selected.value ? selected.value.sizes[sizeIdx.value] : null));
  const total = computed(() => (currentSize.value ? currentSize.value.price * qty.value : 0));
  const modalLink = computed(() => (selected.value ? orderLink(selected.value, currentSize.value, qty.value) : '#'));

  function openProduct(product) {
    lastFocus = document.activeElement;
    selected.value = product;
    sizeIdx.value = 0;
    qty.value = 1;
  }

  function closeProduct() {
    selected.value = null;
    nextTick(() => lastFocus && lastFocus.focus && lastFocus.focus());
  }

  return { selected, sizeIdx, qty, total, modalLink, openProduct, closeProduct };
}
