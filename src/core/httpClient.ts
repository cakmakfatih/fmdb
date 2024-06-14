import axios from "axios";
import { TMDB_BASE_URL } from "./globals";

const httpClient = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
    Accept: "application/json",
  },
});

export default httpClient;
