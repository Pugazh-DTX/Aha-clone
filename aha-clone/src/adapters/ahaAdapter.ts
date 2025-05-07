import { Tab, Container, Resource, AspectRatio } from "@/types/ahaTypes";
import {
  getLocalizedText,
  getLocalizedArray,
} from "@/utils/localizationHelpers";
import { constructImageUrl } from "@/utils/imageurl";

const ADULT_RATINGS = ["A", "18+", "R"];
const aspectRatios: AspectRatio = {
  _1x1: "1x1",
  _3x1: "3x1",
  _2x3: "2x3",
  _16x9: "16x9",
  _7x2: "7x2",
  _16x18: "16x18",
  _9x16: "9x16",
};

// Helper function to format length from seconds to hours and minutes (e.g., 6751 seconds = "1h 52m")
function formatLength(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}

export const ResourceAdapter = (
  resources: Resource[] | [],
  lang: string = "en",
  container?: Container | null
): Resource[] => {
  if (resources.length === 0) return [];

  return resources.map((resource: any) => ({
    id: resource.id,
    type: resource.cty === "webseries" ? "webseries" : "movie",
    title: getLocalizedText(resource.lon)[lang],
    rating: resource.rat?.[0]?.v || "",
    is_adult_content: ADULT_RATINGS.includes(resource.rat?.[0]?.v),
    description: getLocalizedText(resource.lod)[lang],
    ispremium:
      resource.ent?.some((ent: any) => {
        const now = new Date();
        const start = new Date(ent.f_st_dt);
        const end = new Date(ent.f_ed_dt);
        const isFree = ent.sp?.includes("urn:package:free");
        return start <= now && now <= end && !isFree;
      }) || false,
    LocalDescription: getLocalizedText(resource.lold)[lang],
    LocalizedKeywords: getLocalizedText(resource.lok)[lang],
    LocalizedCast: getLocalizedText(resource.locs)[lang],
    LocalizedCrew: getLocalizedText(resource.locr)[lang],
    LocalizedDirector: getLocalizedText(resource.lodr)[lang],
    autoPreviewUrl: resource.ap_url?.preview || "",
    images: {
      poster: constructImageUrl(
        resource.id,
        aspectRatios._16x9,
        720,
        resource.updatedTime || ""
      ), // Poster URL
      carouselthumbnail: constructImageUrl(
        resource.id,
        aspectRatios._2x3,
        305,
        resource.updatedTime || ""
      ), // Thumbnail URL
      banner: constructImageUrl(
        resource.id,
        aspectRatios._16x9,
        1280,
        resource.updatedTime || ""
      ), // Banner URL
      searchImg: constructImageUrl(
        resource.id,
        aspectRatios._16x9,
        300,
        resource.updatedTime || ""
      ), //Search URL Img
    },
    bgImage: constructImageUrl(
      resource.id,
      aspectRatios._16x9,
      1920,
      resource.updatedTime || ""
    ), // Background image
    thumbnail: constructImageUrl(
      resource.id,
      aspectRatios._16x9,
      160,
      resource.updatedTime || ""
    ), // Thumbnail
    posterUrl: constructImageUrl(
      resource.id,
      aspectRatios._16x9,
      1250,
      resource.updatedTime || ""
    ), // Poster
    metadata: {
      year: resource.r,
      releaseDate: resource.rdt || "",
      length: formatLength(resource.rt || 0), // Convert length from seconds to h:mm format
      genre: getLocalizedArray(resource.log).map((la) => la[lang]), // Get localized genre array
      productionHouse: getLocalizedArray(resource.ph).map((la) => la[lang]),
      audioQuality: resource.aq || "",
      videoQuality: resource.vq || "",
      hasAds: resource.ad === "true",
      advisories: resource.adv || [],
      skipMarkers: {
        intro: resource.mar?.find((m: any) => m.t === "skipintro")
          ? {
              start: resource.mar.find((m: any) => m.t === "skipintro")?.m_st,
              end: resource.mar.find((m: any) => m.t === "skipintro")?.m_ed,
            }
          : undefined,
        credits: resource.mar?.find((m: any) => m.t === "skipcredit")
          ? {
              start: resource.mar.find((m: any) => m.t === "skipcredit")?.m_st,
              end: resource.mar.find((m: any) => m.t === "skipcredit")?.m_ed,
            }
          : undefined,
      },
      description: "",
    },
    carouselthumbnail: constructImageUrl(
      resource.id,
      aspectRatios._2x3,
      305,
      resource.updatedTime || ""
    ), // Carousel thumbnail
    availability: {
      startDate: resource.st_dt || "",
      endDate: resource.ed_dt || "",
      isPublished: resource.st === "published",
    },
    actions: {
      clickAction: container?.click_action || "detail",
    },
    urn: resource.urn || "",
    year: resource.r,
    length: formatLength(resource.rt || 0), // Store the formatted length here as well
    genre: getLocalizedArray(resource.log).map((la) => la[lang]), // Handle genre as an array
    releaseDate: resource.rdt || "",
  }));
};

export const ContainerAdapter = (
  containers: Container[] | [],
  lang: string = "en"
): Container[] => {
  if (containers.length === 0) return [];
  return containers.map((container: any) => ({
    id: container.id || "",
    title: getLocalizedText(container.lon)[lang],
    layoutType: container.lo || "regular",
    ratio: container.iar || "16:9",
    deviceType: container.diar,
    premiumlogo: container.tag_overlay,
    font_style: container.text_style,
    scrollStyle: {
      autoPlay: container.scroll_style?.autoplay === "enable",
      direction: container.scroll_style?.direction || "lefttoright",
      loop: container.scroll_style?.loop === "enable",
    },
    bgImage: constructImageUrl(
      container.id,
      aspectRatios._16x9,
      1920,
      container.updatedTime || ""
    ), // Background image
    name: container.name || "",
    resources: ResourceAdapter(container.cd || [], lang, container),
  }));
};

export const AhaAdapter = (
  data: any = { t: [] },
  lang: string = "en"
): Tab[] => {
  //   console.log('Adapter Input Data:', data);
  // console.log('Incoming Data:', data);

  // Check if data is null or undefined
  if (!data || !Array.isArray(data?.t)) {
    console.error("Invalid data format: 't' should be an array");
    return []; // Return empty array if 't' is not available or data is invalid
  }

  return data.t.map(
    (tab: any): Tab => ({
      id: tab.id || "",
      title: (tab.lon),
      containers: ContainerAdapter(tab.c || [], lang),
      pagination: tab.pagination
        ? {
            start: tab.pagination.start,
            rows: tab.pagination.rows,
            count: tab.pagination.count,
          }
        : undefined,
    })
  );
};
