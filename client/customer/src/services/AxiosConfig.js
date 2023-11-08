import axios from "axios";

export const PUBLIC_URL = "";

// export const BASE_URL = window.location.origin + "/" + PUBLIC_URL;
export const BASE_URL = "http://localhost:3000" + "/" + PUBLIC_URL;

export const https = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000000,
  "Access-Control-Allow-Origin": "*",
});
