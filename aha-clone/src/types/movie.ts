export interface Lang {
  en: string;
  ta: string;
}

export interface IHeroMovie {
  id: string;
  title: { en: string };
  year: number;
  length: string;
  type: string;
  genre: Lang[];
  description: { en: string };
  posterUrl: string;
  thumbnail: string;
}