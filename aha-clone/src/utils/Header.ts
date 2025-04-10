import { IHeader } from "@/types/header";

import allIcon from "../../public/Assets/icons/Header/all-icon.svg";
import movieIcon from "../../public/Assets/icons/Header/movie-icon.svg";
import tvIcon from "../../public/Assets/icons/Header/tv-icon.svg";
export const navLinks: IHeader[] = [
  { name: "All", path: "/", icon: allIcon },
  { name: "Movies", path: "/movies", icon: movieIcon },
  { name: "Shows", path: "/shows", icon: tvIcon },
  { name: "Dance Ikon", path: "/dance-ikon", icon: tvIcon },
];
