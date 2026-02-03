// Client-side i18n script
import { translations, defaultLocale, type Locale, type TranslationKey } from "./translations";

export function getLocale(): Locale {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "zh") return stored;
  }
  return defaultLocale;
}

export function setLocale(locale: Locale): void {
  localStorage.setItem("locale", locale);
  document.cookie = `locale=${locale};path=/;max-age=31536000`;
  updatePageTranslations(locale);
}

export function t(key: TranslationKey, locale?: Locale): string {
  const currentLocale = locale || getLocale();
  return translations[currentLocale][key] || translations[defaultLocale][key] || key;
}

export function updatePageTranslations(locale: Locale): void {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n") as TranslationKey;
    if (key && translations[locale][key]) {
      el.textContent = translations[locale][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

// Initialize on page load
function init() {
  const locale = getLocale();
  // Set cookie for server-side rendering
  document.cookie = `locale=${locale};path=/;max-age=31536000`;
  updatePageTranslations(locale);
}

// Run on initial load and after view transitions
if (typeof window !== "undefined") {
  init();
  document.addEventListener("astro:after-swap", init);
}
