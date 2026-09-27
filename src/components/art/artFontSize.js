export const FONT = "'Bricolage Grotesque', sans-serif";
export const fontSize = (name, max = 15) => Math.min(max, name.length > 5 ? 11 : name.length > 4 ? 13 : 15);
