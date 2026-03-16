import { writable, derived } from 'svelte/store';
import en from './en.json';
import es from './es.json';

/** @type {Record<string, any>} */
const translations = { en, es };

/** @param {string | null | undefined} lang */
function normalizeLocale(lang) {
  if (!lang) return 'en';
  const lower = lang.toLowerCase();
  if (lower.startsWith('es')) return 'es';
  return 'en';
}

const defaultLang = (() => {
  if (typeof window === 'undefined') return 'en';

  const saved = localStorage.getItem('lang');
  const hasManualSelection = localStorage.getItem('lang_manual') === '1';

  if (hasManualSelection && saved) {
    return normalizeLocale(saved);
  }

  return normalizeLocale(navigator.language);
})();

export const locale = writable(defaultLang);

if (typeof document !== 'undefined') {
  document.documentElement.lang = defaultLang;
}

export const t = derived(locale, ($locale) => {
  return (
    /** @param {string} key */
    (key) => {
    const keys = key.split('.');
    /** @type {any} */
    let value = translations[$locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  });
});

/** @param {string} lang */
export function setLocale(lang) {
  const normalized = normalizeLocale(lang);
  locale.set(normalized);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', normalized);
    localStorage.setItem('lang_manual', '1');
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized;
  }
}
