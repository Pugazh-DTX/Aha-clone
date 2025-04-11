import { IHeader } from "@/types/header";

import allIcon from "../../public/Assets/icons/Header/all-icon.svg";
import movieIcon from "../../public/Assets/icons/Header/movie-icon.svg";
import tvIcon from "../../public/Assets/icons/Header/tv-icon.svg";
import searchIcon from "../../public/Assets/icons/Header/search-icon.svg";
import homeIcon from "../../public/Assets/icons/Header/home-icon.svg";
import tickIcon from "../../public/Assets/icons/Header/tick-icon.svg";
import menuIcon from "../../public/Assets/icons/Header/menu-icon.svg";
import searchMobileIcon from "../../public/Assets/icons/Header/search-mobile-icon.svg";

export const navLinks: IHeader[] = [
  { name: "Home", path: "/", icon: allIcon },
  { name: "Movies", path: "/movies", icon: movieIcon },
  { name: "Shows", path: "/shows", icon: tvIcon },
  { name: "Dance Ikon", path: "/dance-ikon", icon: tvIcon },
  { name: "Offers", path: "/offers", icon: tvIcon },
  { name: "My aha", path: "/my-aha", icon: tvIcon },
];

export const bottomNavLinks = [
  { name: "Home", path: "/", icon: homeIcon },
  { name: "My aha", path: "/my-aha", icon: tickIcon },
  { name: "Search", path: "/search", icon: searchMobileIcon },
  { name: "Menu", path: "/menu", icon: menuIcon },
];
