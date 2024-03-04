import axios from "axios";

const serverURL = "hhtps://server-self-ten-30.vercel.app";

export const customFetch = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});
