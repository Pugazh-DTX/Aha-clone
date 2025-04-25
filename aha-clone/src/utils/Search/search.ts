export interface IMoviesSection {
  heading: string;
  moviesArr: IMovies[];
  isRoundedImage: boolean;
  recentSearchList: string[];
  isSearchNotFound: boolean;
  isShowingResults: boolean;
}
export interface IMovies {
  id: number;
  movieImg: string;
  movieTitle: string;
  overlayText: string;
  isPremium: boolean;
  isOverlayPlayIcon: boolean;
}

export const searchData: IMoviesSection = {
  heading: "Trending Searches",
  moviesArr: [
    {
      id: 1,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/397E773E-A668-4D8E-AF14-BC882C8A41B3/0-16x9.jpg?width=305&updatedTime=2025-03-27T12:58:09Z&dt=Web",
      movieTitle: "Mass Climax Promo",
      isPremium: false,
      isOverlayPlayIcon: true,
      overlayText: "",
    },
    {
      id: 2,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/6AF3D408-1E62-41D2-9A19-06BB4B8F07EC/0-16x9.jpg?width=305&updatedTime=2025-03-26T05:16:25Z&dt=Web",
      movieTitle: "Hometown Trailer",
      isPremium: false,
      isOverlayPlayIcon: true,
      overlayText: "",
    },
    {
      id: 3,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/7080E032-7F41-4153-A840-3D897510BCA2/0-16x9.jpg?width=305&updatedTime=2025-03-07T13:54:15Z&dt=Web",
      movieTitle: "3 Roses S2 Announcement Teaser",
      isPremium: false,
      isOverlayPlayIcon: true,
      overlayText: "",
    },
    {
      id: 4,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/6AF3D408-1E62-41D2-9A19-06BB4B8F07EC/0-16x9.jpg?width=305&updatedTime=2025-03-26T05:16:25Z&dt=Web",
      movieTitle: "Hometown Trailer",
      isPremium: false,
      isOverlayPlayIcon: true,
      overlayText: "",
    },
    {
      id: 5,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/7080E032-7F41-4153-A840-3D897510BCA2/0-16x9.jpg?width=305&updatedTime=2025-03-07T13:54:15Z&dt=Web",
      movieTitle: "3 Roses S2 Announcement Teaser",
      isPremium: false,
      isOverlayPlayIcon: true,
      overlayText: "",
    },
  ],
  isRoundedImage: false,
  recentSearchList: ["Mass", "Arul", "Winner"],
  isSearchNotFound: false,
  isShowingResults: true,
};

//recentSearchList
//"Mass", "Arul", "Winner"
