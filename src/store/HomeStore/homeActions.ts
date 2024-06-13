import { createAsyncThunk } from "@reduxjs/toolkit";
import httpClient from "../../core/HttpClient";
import axios from "axios";
import IShow, { MediaType } from "../../core/interfaces/IShow";
import { TMDB_BACKDROP_PREFIX, TMDB_POSTER_PREFIX } from "../../core/globals";

interface PopularItemsResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: {
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
  }[];
}

export interface PopularShows {
  currentPage: number;
  nextPage: number;
  lastPage?: number;
  items: IShow[];
}

export const homeLoadPopular = createAsyncThunk(
  "home/homeLoadPopular",
  async (page?: number): Promise<PopularShows | undefined> => {
    if (typeof page === "undefined") {
      page = 1;
    }

    const response = await httpClient.get<PopularItemsResult>(
      "/trending/all/week",
      {
        params: { page: page },
      }
    );

    if (response.status !== axios.HttpStatusCode.Ok) {
      return undefined;
    }

    const { data } = response;

    return {
      currentPage: data.page,
      nextPage: data.total_pages > data.page ? data.page + 1 : data.page,
      lastPage: data.total_pages,
      items: data.results.map<IShow>((i) => ({
        adult: i.adult,
        backdropPath: TMDB_BACKDROP_PREFIX + i.backdrop_path,
        firstAirDate: i.first_air_date,
        releaseDate: i.release_date,
        genreIds: i.genre_ids,
        id: i.id,
        mediaType: i.media_type,
        name: i.name,
        title: i.title,
        originCountry: i.origin_country,
        originalLanguage: i.original_language,
        originalName: i.original_name,
        originalTitle: i.original_title,
        overview: i.overview,
        popularity: i.popularity,
        posterPath: TMDB_POSTER_PREFIX + i.poster_path,
        voteAverage: i.vote_average,
        voteCount: i.vote_count,
      })),
    };
  }
);
