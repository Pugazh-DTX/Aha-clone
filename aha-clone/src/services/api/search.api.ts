import axios from "axios";

const INITIAL_SEARCH_API_URL =
  "https://data-store-cdn.api.aha.firstlight.ai/content";

// Fetch initial static content
export const fetchInitialSearchScreenAPI = async () => {
  const params = {
    ids: "E51CB6A8-D3A9-474C-84E7-BDB6B2980239,37BA7292-BFA6-4B9E-8B08-9714B147136A,4BAD80A8-8D00-4010-B9E3-02F257B86B74,AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF,A7C4A8B8-B112-4C74-8AFC-6128093F71FC,5A8AAB23-17F7-4E49-A299-8D422EA8117B,6B0D8C15-6BF9-4B85-A5B9-511462B75BA3,836A0A87-656C-46FE-BBD1-F12BA6088F68,7C1146D3-79CA-47FF-AB88-B9721D445531,1D67B609-AC68-4A94-B80E-D0B8437B5519,E1FFF700-C93A-453B-A280-4D2660333A74,4A24AC0D-4B85-46C6-AE28-9441416DC99B,E501C80D-7BED-422D-B973-E5F9A5CB6E3F,E415FD41-C436-45FB-A128-65DDECA39136,4BD4476E-E299-4BA4-A0F5-47DE75EAE3FF,3EE5F5AC-E97B-409C-8889-54FDE5CA70FC,387FB792-BA5A-4659-A59A-B74B61EA3895,7E449D22-7554-4CFB-B58D-C8C60849D434,D253596A-5CD3-410F-8911-050F700832F6,903C29D4-477B-4B88-8442-0131C84D0F99", // your full static IDs
    pageNumber: 1,
    pageSize: 20,
    reg: "in",
    acl: "te",
    dt: "web",
    ipr: true,
    itvod: true,
  };

  const response = await axios.get(INITIAL_SEARCH_API_URL, { params });
  console.log(response.data, "SEARCH API");
  return response.data;
};

// Fetch search results based on query
const USER_SEARCH_API_URL =
  "https://data-store-cdn.api.aha.firstlight.ai/content/search";

export const fetchSearchResultsAPI = async (query: string) => {
  const params = {
    mode: "detail",
    st: "published",
    term: query, // this is the actual search keyword
    pageNumber: 1,
    pageSize: 50,
    reg: "in",
    acl: "te",
    dt: "mobileweb",
    ipr: true,
    itvod: true,
  };

  const response = await axios.get(USER_SEARCH_API_URL, { params });
  return response.data;
};
