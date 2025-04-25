import axios from "axios";
import { ConfigDataType } from "@/types/config.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchConfigAPI = async (): Promise<ConfigDataType> => {
  const response = await axios.get(`${BASE_URL}/config?device=web`, {
    headers: {
      "sec-ch-ua-platform": '"Android"',
      Referer: "https://www.aha.video/",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
      "sec-ch-ua":
        '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
      "sec-ch-ua-mobile": "?1",
    },
  });
  return response.data;
};
