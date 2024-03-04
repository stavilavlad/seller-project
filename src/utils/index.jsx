import axios from "axios";

const serverURL = "https://server-self-ten-30.vercel.app";

export const customFetch = axios.create({
  baseURL: serverURL,
  withCredentials: true,
});
