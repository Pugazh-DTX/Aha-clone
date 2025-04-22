import { LocalizedText } from "@/types/ahaTypes";

export const getLocalizedText = (
  items?: Array<{ lang: string; n: string }>
): LocalizedText => {
  if (!Array.isArray(items)) return { en: '', ta: '' };
  return items.reduce<LocalizedText>((acc, item) => {
    acc[item.lang] = item.n;
    return acc;
  }, { en: '', ta: '' });
};

export const getLocalizedString = (
  localized: LocalizedText,
  preferredLang: string = 'en'
): string => {
  if (!Array.isArray(localized)) {
    console.warn('⚠️ getLocalizedString: Expected array, got', localized);
    return '';
  }

  const match = localized.find(l => l.lang === preferredLang);
  const fallback = localized.find(l => l.lang === 'en') || localized[0];

  const final = match?.n || fallback?.n || '';

  if (!match) {
    console.warn('⚠️ getLocalizedString: Preferred language not found, using fallback:', fallback);
  }

  return typeof final === 'string' ? final : '';
};

  export const getLocalizedArray = (
    items?: Array<{ lang: string; n: string[] }>
  ): LocalizedText[] => {
    if (!Array.isArray(items)) return [];
    const result: LocalizedText[] = [];
    items.forEach(item => {
      item.n.forEach((text, index) => {
        if (!result[index]) result[index] = { en: '', ta: '' };
        result[index][item.lang] = text;
      });
    });
    return result;
  };
  