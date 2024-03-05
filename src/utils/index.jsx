import axios from "axios";

export const serverURL = "https://seller-project-server-1.onrender.com";

export const customFetch = axios.create({
  baseURL: serverURL,
  // withCredentials: true,
});
