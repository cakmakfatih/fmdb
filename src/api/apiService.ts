import axios from "axios";
import httpClient from "../core/httpClient";
import { IApiShowResponse } from "../core/interfaces/IApiShowResponse";

enum Routes {
  getTrendingAllWeek = "/trending/all/week",
  getMovieGenres = "/genre/movie/list",
  getTvShowGenres = "/genre/tv/list",
}

interface ApiService {
  getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null>;
  getMovieGenres(): Promise<IApiGenreResponse | null>;
  getTvShowGenres(): Promise<IApiGenreResponse | null>;
}

const apiService: ApiService = {
  async getTrendingAllWeek(page?: number) {
    if (typeof page === "undefined") {
      page = 1;
    }

    const response = await httpClient<IApiShowResponse>(
      Routes.getTrendingAllWeek,
      {
        params: { page: page },
      }
    );

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  },

  async getMovieGenres(): Promise<IApiGenreResponse | null> {
    const response = await httpClient<IApiGenreResponse>(Routes.getMovieGenres);

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  },

  async getTvShowGenres(): Promise<IApiGenreResponse | null> {
    const response = await httpClient<IApiGenreResponse>(
      Routes.getTvShowGenres
    );

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  },
};

export default apiService;
