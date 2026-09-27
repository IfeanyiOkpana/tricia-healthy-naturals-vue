import plantainPhoto from '../assets/images/plantain.jpg';
import beansPhoto from '../assets/images/beans.jpg';
import moringaPhoto from '../assets/images/moringa.jpg';
import datePhoto from '../assets/images/date.jpg';
import cashewPhoto from '../assets/images/cashew.jpg';
import swallowBundlePhoto from '../assets/images/swallow-bundle.jpg';

// Palette used by the illustrated fallback art (ProductArt.vue) for any
// product without a real photo, e.g. Raw Honey and the Pantry Wellness Bundle.
const pal = (tile, blob, main, dark, label, ink) => ({ tile, blob, main, dark, label, ink });

export const CATEGORY_ORDER = ['Flours', 'Superfoods', 'Nuts', 'Sweeteners', 'Bundles'];

export const products = [
  {
    id: 'plantain-flour', name: 'Plantain Flour', category: 'Flours', type: 'pouch', label: 'PLANTAIN', badge: 'Popular', image: plantainPhoto,
    tagline: 'Unripe plantain, milled fine for swallow and pap.',
    description: 'Green plantains, sun-dried and milled into a smooth, pale flour. Makes a soft, stretchy swallow, and works just as well as a light breakfast pap.',
    benefits: ['Makes a smooth, non-lumpy swallow', 'A gluten-free alternative to wheat', 'Ready in minutes with hot water'],
    howToUse: 'Stir into hot water over low heat, turning until smooth and stretchy. For pap, mix a little with cold water first, then stir into boiling water.',
    ingredients: '100% dried unripe plantain, milled and sieved.',
    sizes: [{ label: '500g', price: 2000 }, { label: '1kg', price: 3600 }, { label: '2kg', price: 6800 }],
    palette: pal('#EDE6CF', '#F8F3E2', '#E9D999', '#8C6B2F', '#FFFDF4', '#5A4517'),
  },
  {
    id: 'moringa-powder', name: 'Moringa Leaf Powder', category: 'Superfoods', type: 'pouch', label: 'MORINGA', badge: 'New', image: moringaPhoto,
    tagline: 'Finely ground leaves for smoothies, pap and soups.',
    description: 'Dried moringa leaves ground into a fine, bright green powder. Mild and earthy, it stirs easily into drinks and everyday meals.',
    benefits: ['A simple green addition to your meals', 'Blends smoothly into drinks', 'Mild, earthy taste'],
    howToUse: 'Stir one teaspoon into water, a smoothie, pap or soup. Start small and build up.',
    ingredients: '100% dried moringa leaves.',
    sizes: [{ label: '100g', price: 2000 }, { label: '250g', price: 4200 }],
    palette: pal('#CFE6C4', '#E3F1DB', '#3F8A4E', '#1F5A33', '#F1F9EC', '#1F5A33'),
  },
  {
    id: 'beans-flour', name: 'Beans Flour', category: 'Flours', type: 'pouch', label: 'BEANS', image: beansPhoto,
    tagline: 'Milled brown beans for a quick, filling moin moin.',
    description: 'Peeled brown beans, dried and milled into a fine flour. Skips the soaking and peeling, so moin moin and akara batter come together in minutes.',
    benefits: ['No soaking or peeling needed', 'Ready for moin moin or akara in minutes', 'Peeled and finely milled'],
    howToUse: 'Whisk with water, pepper, onion and seasoning into a smooth batter, then steam for moin moin or fry for akara.',
    ingredients: '100% peeled brown beans, milled and sieved.',
    sizes: [{ label: '500g', price: 2200 }, { label: '1kg', price: 4000 }],
    palette: pal('#E6DCC9', '#F2EBDB', '#B98A4A', '#6E4E21', '#FBF5E9', '#5A3D1A'),
  },
  {
    id: 'date-powder', name: 'Date Powder', category: 'Superfoods', type: 'pouch', label: 'DATES', image: datePhoto,
    tagline: 'Ground dried dates, a natural sugar swap.',
    description: 'Whole dried dates, ground into a soft brown powder. A simple way to sweeten drinks and baking without refined sugar.',
    benefits: ['A natural swap for refined sugar', 'Sweetens without added sugar', 'Good in tea, pap and baking'],
    howToUse: 'Stir one to two teaspoons into tea, pap, smoothies or baking in place of sugar.',
    ingredients: '100% dried dates, ground.',
    sizes: [{ label: '250g', price: 3000 }, { label: '500g', price: 5500 }],
    palette: pal('#E6C9A8', '#F3E0C8', '#8A4B26', '#4E2611', '#FCEEDD', '#4E2611'),
  },
  {
    id: 'cashew-nuts', name: 'Cashew Nuts', category: 'Nuts', type: 'tin', label: 'CASHEW', image: cashewPhoto,
    tagline: 'Whole roasted cashews, lightly salted.',
    description: 'Whole cashew nuts, roasted until golden and lightly salted. A satisfying snack on their own, or scattered over rice and salads.',
    benefits: ['Whole, unbroken nuts', 'Roasted for a deep, nutty flavour', 'A filling snack between meals'],
    howToUse: 'Enjoy straight from the pack, or scatter over salads, rice or stir-fries.',
    ingredients: 'Cashew nuts, a little salt.',
    sizes: [{ label: '250g', price: 3500 }, { label: '500g', price: 6500 }, { label: '1kg', price: 12000 }],
    palette: pal('#F1E3C6', '#FAF1DE', '#D9A94A', '#8A6417', '#FFF9EC', '#6B4D10'),
  },
  {
    id: 'raw-honey', name: 'Raw Nigerian Honey', category: 'Sweeteners', type: 'jar', label: 'HONEY',
    tagline: 'Thick, floral honey with minimal processing.',
    description: 'Honey with a rich, floral flavour. Use it to sweeten tea and pap, spread it on bread or take it by the spoonful.',
    benefits: ['Rich, natural sweetness', 'Lovely in tea, pap and baking', 'Thick, golden texture'],
    howToUse: 'Stir into warm drinks, drizzle over food or enjoy by the spoonful. Not suitable for babies under 12 months.',
    ingredients: '100% raw honey.',
    sizes: [{ label: '500ml', price: 6000 }, { label: '1 litre', price: 11000 }],
    palette: pal('#F8E2A6', '#FCEFC6', '#DFA02A', '#8F5A08', '#FFF6E1', '#6B4306'),
    // No real photo yet - swap in one the same way as the others when available.
  },
  /*{
    id: 'swallow-bundle', name: 'Swallow Essentials Bundle', category: 'Bundles', type: 'bundle', items: ['pouch', 'pouch'], itemLabels: ['PLANTAIN', 'BEANS'], badge: 'Bundle', image: swallowBundlePhoto,
    tagline: 'Plantain flour and beans flour, together.',
    description: 'Our two flours in one pack: plantain flour for a smooth swallow, and beans flour for a quick moin moin or akara, bundled at a lower price.',
    includes: 'Plantain Flour (1kg) and Beans Flour (1kg).',
    benefits: ['Two kitchen staples in one order', 'Lower price than buying separately', 'A steady stock for the month'],
    howToUse: 'Use the plantain flour for swallow or pap, and the beans flour for moin moin or akara batter.',
    ingredients: 'See individual products: plantain flour and beans flour.',
    sizes: [{ label: 'Bundle of 2', price: 7000, was: 7600 }],
    palette: pal('#F6D6C9', '#FBE7DE', '#D9825F', '#8C4630', '#FFF3EC', '#6B2F1B'),
  },*/
  /*{
    //id: 'wellness-bundle', name: 'Pantry Wellness Bundle', category: 'Bundles', type: 'bundle', items: ['jar', 'pouch', 'tin'], itemLabels: ['HONEY', 'MORINGA', 'CASHEW'], badge: 'Bundle',
    tagline: 'Three everyday staples to begin with.',
    description: 'A starter set for your healthy natural: moringa powder, cashew nuts and raw honey, bundled at a lower price.',
    includes: 'Moringa Leaf Powder (100g), Cashew Nuts (250g) and Raw Nigerian Honey (500ml).',
    benefits: ['A simple way to try our staples', 'Lower price than buying separately', 'Ready to gift'],
    howToUse: 'Stir moringa into your morning smoothie or pap, snack on the cashews, and sweeten your tea with the honey.',
    ingredients: 'See individual products: moringa leaves, cashew nuts and raw honey.',
    sizes: [{ label: 'Bundle of 3', price: 10500, was: 11500 }],
    palette: pal('#DCE8C0', '#EBF3D4', '#6E9E3A', '#3F6420', '#F5FAE8', '#3F6420'),
  },*/
];

// A few real photos, used as floating tiles in the hero panel (Hero.vue).
export const heroPhotos = {
  plantain: plantainPhoto,
  moringa: moringaPhoto,
  cashew: cashewPhoto,
  date: datePhoto,
};
