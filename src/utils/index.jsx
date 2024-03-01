import axios from "axios";

const serverURL = "http://localhost:3000";

export const customFetch = axios.create({
  baseURL: serverURL,
});
