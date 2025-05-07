import axios from "axios";

const BASE_URL =
  "https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen";

export const fetchLandingScreen = async (
  pageNumber: number = 1,
  pageSize: number = 5,
  acl: string,
  storeFrontId?: string | null,
  tabId?: string | null,
  region: string = "in"
) => {
  try {
    const params: Record<string, any> = {
      ipr: true,
      ivg: false,
      sfInfo: true,
      itvod: true,
      acl: acl,
      reg: region,
      dt: "mobileweb",
      cPageNumber: pageNumber,
      cPageSize: pageSize,
    };

    if (storeFrontId) params.sfId = storeFrontId;
    if (tabId) params.tabId = tabId;

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch landing data: " + error.message);
    }
    throw new Error("Failed to fetch landing data: Unknown error");
  }
};
