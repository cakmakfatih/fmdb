import axios from "axios";
import httpClient from "../core/httpClient";
import { MediaType } from "../core/interfaces/IShow";

enum Routes {
  getTrendingAllWeek = "/trending/all/week",
  getMovieGenres = "/genre/movie/list",
  getTvShowGenres = "/genre/tv/list",
}

export interface IApiGenreResponse {
  genres: {
    id: number;
    name: string;
  }[];
}

export interface IApiShowResponseItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  origin_country?: string[];
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video: false;
  vote_average: 6.798;
  vote_count: 6043;
}

export interface IApiShowResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: IApiShowResponseItem[];
}

export interface IApiCastItem {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface IApiCastResponse {
  id: number;
  cast: IApiCastItem[];
}

interface ApiService {
  getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null>;
  getMovieGenres(): Promise<IApiGenreResponse | null>;
  getTvShowGenres(): Promise<IApiGenreResponse | null>;
  getMovieCast(movieId: number): Promise<IApiCastResponse | null>;
  getTvShowCast(tvShowId: number): Promise<IApiCastResponse | null>;
}

async function getCast(
  mediaType: MediaType,
  id: number
): Promise<IApiCastResponse | null> {
  const response = await httpClient<IApiCastResponse>(
    `/${mediaType === MediaType.Movie ? "movie" : "tv"}/${id}/credits`
  );

  if (response.status !== axios.HttpStatusCode.Ok) {
    return null;
  }

  return response.data;
}

const apiService: ApiService = {
  async getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null> {
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

  async getMovieCast(movieId: number): Promise<IApiCastResponse | null> {
    return await getCast(MediaType.Movie, movieId);
  },

  async getTvShowCast(tvShowId: number): Promise<IApiCastResponse | null> {
    return await getCast(MediaType.Tv, tvShowId);
  },
};

export default apiService;
