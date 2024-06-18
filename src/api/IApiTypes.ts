import { MediaType } from "../core/interfaces/IShow";

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

export interface IApiVideosResponseItem {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface IApiVideosResponse {
  id: number;
  results: IApiVideosResponseItem[];
}
