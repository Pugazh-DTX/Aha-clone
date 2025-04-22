export interface IMoviesSection {
  heading: string;
  containerArr: IMovies[];
  isRoundedImage: boolean;
}

export interface Lang {
  en: string;
  ta: string;
}

export interface IMovies {
  title: any;
  id: string | number;
  thumbnail: string;
  tag: any;
}
