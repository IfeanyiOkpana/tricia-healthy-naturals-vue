import { BUSINESS } from '../data/business';
import { money } from '../utils/format';

const waUrl = (text) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

export function useWhatsApp() {
  //const chatLink = waUrl(`Hello ${BUSINESS.name}! \uD83D\uDC4B I have a question about your products.`);
  const chatLink = waUrl(`Hello ${BUSINESS.name}! I have a question about your products.`);

  const orderLink = (product, size, qty = 1) => {
    const text = [
      `Hello ${BUSINESS.name}! \uD83D\uDC4B`,
      '',
      "I'd like to order:",
      `\u2022 ${product.name} (${size.label}) \u00D7 ${qty} = ${money(size.price * qty)}`,
      '',
      'Please confirm it is available and let me know the delivery details. Thank you!',
    ].join('\n');
    return waUrl(text);
  };

  return { chatLink, orderLink };
}
