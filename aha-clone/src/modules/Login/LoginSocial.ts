import googleIcon from "../../../public/Assets/icons/Login/google-svg.svg";
import facebookIcon from "../../../public/Assets/icons/Login/facebook.png";
import { StaticImageData } from "next/image";
export interface ILoginSocial {
  icon: StaticImageData | string;
  socialName: string;
}
export const loginSocial: ILoginSocial[] = [
  //   {
  //     icon: emailIcon,
  //     socialName: "Email",
  //   },
  //   {
  //     icon: phoneIcon,
  //     socialName: "Mobile", // or "Phone"
  //   },
  {
    icon: facebookIcon,
    socialName: "Facebook",
  },
  {
    icon: googleIcon,
    socialName: "Google",
  },
];
