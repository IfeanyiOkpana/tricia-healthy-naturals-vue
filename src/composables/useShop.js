import { computed, ref } from 'vue';
import { CATEGORY_ORDER } from '../data/products';
import { startPrice } from '../utils/format';

export function useShop(items) {
  const query = ref('');
  const category = ref('All');
  const sort = ref('featured');

  const categories = ['All', ...CATEGORY_ORDER.filter((c) => items.some((p) => p.category === c))];
  const counts = items.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), { All: items.length });

  const filteredProducts = computed(() => {
    const q = query.value.toLowerCase();
    let list = items.filter((p) => {
      const inCategory = category.value === 'All' || p.category === category.value;
      const haystack = [p.name, p.tagline, p.category, p.description, ...p.benefits].join(' ').toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
    if (sort.value === 'price-asc') list = [...list].sort((a, b) => startPrice(a) - startPrice(b));
    if (sort.value === 'price-desc') list = [...list].sort((a, b) => startPrice(b) - startPrice(a));
    return list;
  });

  const resetFilters = () => {
    query.value = '';
    category.value = 'All';
    sort.value = 'featured';
  };

  return { query, category, sort, categories, counts, filteredProducts, resetFilters };
}
