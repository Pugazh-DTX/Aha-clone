import { LocalizedText } from "@/types/ahaTypes";

export const getLocalizedText = (
    items: Array<{ lang: string; n: string }> = []
  ): LocalizedText => {
    return items.reduce<LocalizedText>((acc, item) => {
      acc[item.lang] = item.n;
      return acc;
    }, { en: '', ta: '' });
  };


  export const getLocalizedArray = (
    items: Array<{ lang: string; n: string[] }> = []
  ): LocalizedText[] => {
    const result: LocalizedText[] = [];
    items.forEach(item => {
      item.n.forEach((text, index) => {
        if (!result[index]) result[index] = { en: '', ta: '' };
        result[index][item.lang] = text;
      });
    });
    return result;
  };
  