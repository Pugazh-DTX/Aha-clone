export interface IMyAhaAddSomething {
  title: string;
  description: string;
  img: string;
}
export const continueWatching: IMyAhaAddSomething = {
  title: "Continue Watching",
  description:
    "Looks like you have nothing in your continue watching. You can watch from your downloads or add something",
  img: "/Assets/icons/MyAha/myaha-add-plus.svg",
};

export const watchList: IMyAhaAddSomething = {
  title: "Watchlist",
  description:
    "Looks like you have nothing in your watchlist. You can watch from your downloads or add something",
  img: "/Assets/icons/MyAha/myaha-add-plus.svg",
};

export const Rentals: IMyAhaAddSomething = {
  title: "Rentals",
  description:
    "Looks like you haven't rented any movies or shows yet. You can find them here once you rent them",
  img: "/Assets/icons/MyAha/myaha-rental-lock-icon.svg",
};
