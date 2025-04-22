export interface ISubscriptionPlans {
  language: "telugu" | "tamil";
  isGoldPack: boolean;
  tagText: string;
  aboutAd: string;
  contentTitle: string;
  contentDescription: string;
  retailPrice: number;
  priceBefore: number;
  priceDuration: string;
}

export const subscriptionPlans: ISubscriptionPlans[] = [
  {
    isGoldPack: true,
    tagText: "RECOMMENDED",
    aboutAd: "AD FREE",
    contentTitle: "",
    contentDescription:
      "4K · Dolby 5.1 · Ads-Free · Telugu + Tamil Movies & Web series · 1 Year",
    retailPrice: 999,
    priceBefore: 1499,
    priceDuration: "year",
    language: "telugu",
  },
  {
    isGoldPack: false,
    tagText: "No Ads",
    aboutAd: "AD FREE",
    contentTitle: "Telugu Annual Premium",
    contentDescription:
      "Full HD (1080p) · 5.1 · Ads-Free · Telugu Movies & Web series · 1 Year",
    retailPrice: 699,
    priceBefore: 1299,
    priceDuration: "year",
    language: "telugu",
  },
  {
    isGoldPack: false,
    tagText: "Begins ₹67/Month",
    aboutAd: "ADS",
    contentTitle: "Telugu Pocket Pack",
    contentDescription:
      "Full HD (1080p) · Stereo · Ads · Telugu Movies & Web series · 3 Months",
    retailPrice: 199,
    priceBefore: 299,
    priceDuration: "3 months",
    language: "telugu",
  },
  {
    isGoldPack: false,
    tagText: "",
    aboutAd: "LIMITED ADS",
    contentTitle: "Telugu Annual Plan",
    contentDescription:
      "Full HD (1080p) · Stereo · Limited Ads · Telugu Movies & Web series · 1 Year",
    retailPrice: 499,
    priceBefore: 699,
    priceDuration: "year",
    language: "telugu",
  },
];
