import axios from "axios";
import React from "react";

export type LandingParams = {
  pageNumber?: number;
  pageSize?: number;
  sfid?: string;
  tid?: string;
  ipr?: boolean;
  ivg?: boolean;
  sfInfo?: boolean;
  itvod?: boolean;
  acl?: string;
  reg?: string;
  dt?: string;
  [key: string]: any;
};

const BASE_URL =
  "https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen";

type LandingResponse = {
  loading: boolean;
  data: any[];
  error: any;
};

const initalState: LandingResponse = {
  loading: false,
  data: [],
  error: "",
};

const useLandingApi = (params?: LandingParams) => {
  const [state, setState] = React.useState<LandingResponse>(initalState);

  let defaultParams: LandingParams = {
    ipr: true,
    ivg: true,
    sfInfo: true,
    itvod: true,
    acl: params?.acl || "ta",
    reg: params?.reg || "in",
    dt: params?.dt || "mobileweb",
    cPageNumber: params?.pageNumber || 1,
    cPageSize: params?.pageSize || 5,
  };
  console.log(params?.acl, "paramsacl");
  if (params?.sfid) defaultParams.sfid = params.sfid;
  if (params?.tid) defaultParams.tid = params.tid;

  const getLandingApi = async () => {
    setState({ ...state, loading: true });
    let response;
    try {
      response = await axios.get(BASE_URL, { params: defaultParams });
      const data = response.data.data;
      console.log(data, "ApiData");
      setState({ ...state, loading: false, data: data });
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
  };

  React.useEffect(() => {
    getLandingApi();
  }, []);

  return state;
};

export default useLandingApi;
