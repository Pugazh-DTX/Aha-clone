export interface Lang {
  en: string;
  ta: string;
}

export interface IHeroMovie {
  title: { en: string };
  year: number;
  length: string;
  genre: Lang[];
  description: { en: string };
  posterUrl: string;
  thumbnail: string;
}