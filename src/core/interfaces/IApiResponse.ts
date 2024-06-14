import { MediaType } from "./IShow";

export interface IApiResponseItem {
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

export interface IApiResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: IApiResponseItem[];
}
