import { writable, derived } from 'svelte/store';
import en from './en.json';
import es from './es.json';

/** @type {Record<string, any>} */
const translations = { en, es };

const browserLang = typeof navigator !== 'undefined'
  ? navigator.language.slice(0, 2)
  : 'en';

const defaultLang = ['en', 'es'].includes(browserLang) ? browserLang : 'en';

export const locale = writable(defaultLang);

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
  locale.set(lang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
}
