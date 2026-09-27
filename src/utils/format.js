export const money = (n) => '\u20A6' + Number(n).toLocaleString('en-US');

export const formatPhone = (n) => `+${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`;

export const startPrice = (product) => Math.min(...product.sizes.map((s) => s.price));

export const saving = (product) => (product.sizes[0].was ? product.sizes[0].was - product.sizes[0].price : 0);

export const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2);
