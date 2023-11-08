import { FanPage } from "../pages/FanPage";
import { https } from "./AxiosConfig";

export const getFeed = async () => {
  const response = await https.get("/api/getFeed");
  return response.data;
};
