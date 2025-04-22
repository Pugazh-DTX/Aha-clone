import axios from 'axios';
 
const LANDING_API_URL = 'https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen';
 
export const fetchLandingScreen = async () => {
  const params = {
    ipr: true,
    ivg: false,
    sfInfo: true,
    itvod: true,
    acl: 'ta',
    reg: 'in',
    dt: 'mobileweb',
    cPageNumber: 1,
    cPageSize: 5,
  };
 
  const response = await axios.get(LANDING_API_URL, { params });
  return response.data;
};