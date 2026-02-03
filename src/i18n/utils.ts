import { translations, defaultLocale, type Locale, type TranslationKey } from "./translations";

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "en") return "en";
  return defaultLocale;
}

export function getLocaleFromStorage(): Locale {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "zh") return stored;
  }
  return defaultLocale;
}

export function t(key: TranslationKey, locale: Locale = defaultLocale): string {
  return translations[locale][key] || translations[defaultLocale][key] || key;
}

export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey): string {
    return translations[locale][key] || translations[defaultLocale][key] || key;
  };
}
