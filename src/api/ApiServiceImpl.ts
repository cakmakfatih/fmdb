import axios, { AxiosInstance } from "axios";
import { MediaType } from "../core/interfaces/IShow";
import { IApiService } from "./IApiService";
import {
  IApiCastResponse,
  IApiGenreResponse,
  IApiShowResponse,
  IApiVideosResponse,
} from "./IApiTypes";

class ApiServiceImpl implements IApiService {
  readonly #client: AxiosInstance;

  constructor(public client: AxiosInstance) {
    this.#client = client;
  }

  async #getCast(
    mediaType: MediaType,
    id: number
  ): Promise<IApiCastResponse | null> {
    const response = await this.#client<IApiCastResponse>(
      `/${mediaType === MediaType.Movie ? "movie" : "tv"}/${id}/credits`
    );

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  }

  async #getShows(
    page: number = 1,
    url: string
  ): Promise<IApiShowResponse | null> {
    if (typeof page === "undefined") {
      page = 1;
    }

    const response = await this.#client<IApiShowResponse>(url, {
      params: { page: page },
    });

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  }

  async #getVideos(
    mediaType: MediaType,
    id: number
  ): Promise<IApiVideosResponse | null> {
    const response = await this.#client<IApiVideosResponse>(
      `/${mediaType === MediaType.Movie ? "movie" : "tv"}/${id}/videos`
    );

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  }

  async getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null> {
    return await this.#getShows(page, "/trending/all/week");
  }

  async getPopularMovies(page?: number): Promise<IApiShowResponse | null> {
    return await this.#getShows(page, "/movie/popular");
  }

  async getPopularTvShows(page?: number): Promise<IApiShowResponse | null> {
    return await this.#getShows(page, "/tv/popular");
  }

  async getMovieGenres(): Promise<IApiGenreResponse | null> {
    const response = await this.#client<IApiGenreResponse>("/genre/movie/list");

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  }

  async getTvShowGenres(): Promise<IApiGenreResponse | null> {
    const response = await this.#client<IApiGenreResponse>("/genre/tv/list");

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  }

  async getMovieCast(movieId: number): Promise<IApiCastResponse | null> {
    return await this.#getCast(MediaType.Movie, movieId);
  }

  async getTvShowCast(tvShowId: number): Promise<IApiCastResponse | null> {
    return await this.#getCast(MediaType.Tv, tvShowId);
  }

  async getMovieVideos(movieId: number): Promise<IApiVideosResponse | null> {
    return await this.#getVideos(MediaType.Movie, movieId);
  }

  async getTvShowVideos(tvShowId: number): Promise<IApiVideosResponse | null> {
    return await this.#getVideos(MediaType.Tv, tvShowId);
  }

  async getTopRatedMovies(page?: number): Promise<IApiShowResponse | null> {
    return await this.#getShows(page, "/movie/top_rated");
  }
}

export default ApiServiceImpl;
