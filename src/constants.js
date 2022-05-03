export const base = new URL(import.meta?.url.slice(0) || document.currentScript?.getAttribute('src') || '');
