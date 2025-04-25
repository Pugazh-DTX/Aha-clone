import axios from "axios";

const LANDING_API_URL =
  "https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen";

export const fetchLandingScreen = async (
  pageNumber: number,
  pageSize: number
) => {
  const params = {
    ipr: true,
    ivg: false,
    sfInfo: true,
    itvod: true,
    acl: "te",
    reg: "in",
    dt: "mobileweb",
    cPageNumber: pageNumber,
    cPageSize: pageSize,
  };

  const response = await axios.get(LANDING_API_URL, { params });

  return response.data;
};
