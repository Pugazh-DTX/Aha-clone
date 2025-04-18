import { StaticImageData } from "next/image";
import fireTv from "../../../public/Assets/images/SubscriptionPagePlatforms/fire-tv.png";
import appleTv from "../../../public/Assets/images/SubscriptionPagePlatforms/apple-tv.png";
import androidTv from "../../../public/Assets/images/SubscriptionPagePlatforms/android-tv.png";
import rokuTv from "../../../public/Assets/images/SubscriptionPagePlatforms/roku.png";
import miTv from "../../../public/Assets/images/SubscriptionPagePlatforms/mi-tv.png";
import smartTv from "../../../public/Assets/images/SubscriptionPagePlatforms/smart-tv.png";

export interface IPlatforms {
  platformImg: StaticImageData;
  height: string;
  width: string;
}
export const subsPagePlatforms: IPlatforms[] = [
  {
    platformImg: fireTv,
    height: "24px",
    width: "45px",
  },
  {
    platformImg: appleTv,
    height: "22px",
    width: "44px",
  },
  {
    platformImg: androidTv,
    height: "15px",
    width: "88px",
  },
  {
    platformImg: rokuTv,
    height: "17px",
    width: "58px",
  },
  {
    platformImg: miTv,
    height: "32px",
    width: "32px",
  },
  {
    platformImg: smartTv,
    height: "34px",
    width: "77px",
  },
];
