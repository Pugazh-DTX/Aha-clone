// types.ts
export interface IMovie {
    id: string;
    title: {
      en: string;
      // Add other languages if needed
    };
    movieImg: string;
    tag?: string; // "true" or undefined for premium status
    // Add other movie properties as needed
  }
  
  export interface IMoviesSection {
    heading: string;  // This matches your usage
    moviesArr: IMovie[];  // This matches your usage
    isRoundedImage?: boolean;  // Optional based on your usage
  }