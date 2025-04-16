export interface IMoviesSection {
  heading: string;
  moviesArr: IMovies[];
  isRoundedImage: boolean;
}
export interface IMovies {
  id: number;
  movieImg: string;
  movieTitle: string;
  overlayText: string;
  isPremium: boolean;
  isOverlayPlayIcon: boolean;
}
export const movies: IMoviesSection = {
  heading: "New Releases",
  moviesArr: [
    {
      id: 1,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/622CB8EA-D06D-45F0-940E-5E99B424474F/0-2x3.jpg?width=305&updatedTime=2025-03-23T07:28:41Z&dt=Web",
      movieTitle: "Dhop Of All Episodes",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 2,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/9E9CE4B5-D19F-4EEE-B7C2-682BD8697C0B/0-2x3.jpg?width=305&updatedTime=2025-03-22T12:05:11Z&dt=Web",
      movieTitle: "Brahma-Anandam",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 3,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/CC8B4AAA-253A-46EB-8229-655D940929CF/0-2x3.jpg?width=305&updatedTime=2025-03-25T14:20:16Z&dt=Web",
      movieTitle: "The Extraordinary Journey Of The Fakir",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 4,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/B121D7D6-5A7A-4C48-9E26-539FBFBDCBE4/0-2x3.jpg?width=305&updatedTime=2025-03-22T12:07:36Z&dt=Web",
      movieTitle: "Rekhachithram",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 5,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/ED3186C7-6957-4D92-ABB0-8BF284D4EDD8/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:17:21Z&dt=Web",
      movieTitle: "MAD - EST Episode Ever",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 6,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/ED3186C7-6957-4D92-ABB0-8BF284D4EDD8/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:17:21Z&dt=Web",
      movieTitle: "Akkada Romeo Ikkada Juliet",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 7,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 8,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 9,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 10,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 11,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 12,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 13,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 14,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 15,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 16,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 17,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 18,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 19,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0DCBA887-6B1A-4BCA-9569-128054B78964/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:48:55Z&dt=Web",
      movieTitle: "First Wildcard",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
    {
      id: 20,
      movieImg:
        "https://image-resizer-cloud-api.akamaized.net/image/0ED7FBDE-B44C-40BC-A530-07F914C29AD9/0-2x3.jpg?width=305&updatedTime=2025-03-25T11:40:28Z&dt=Web",
      movieTitle: "Chef Mantra Project ",
      isPremium: true,
      isOverlayPlayIcon: false,
      overlayText: "",
    },
  ],
  isRoundedImage: false,
};
