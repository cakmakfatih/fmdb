import axios from "axios";

const httpClient = axios.create({
  url: "",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_AUTH_TOKEN}`,
    Accept: "application/json",
  },
});

export default httpClient;
