import {
  IApiCastResponse,
  IApiGenreResponse,
  IApiShowResponse,
  IApiVideosResponse,
} from "./IApiService";

export interface ApiService {
  getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null>;
  getPopularMovies(page?: number): Promise<IApiShowResponse | null>;
  getPopularTvShows(page?: number): Promise<IApiShowResponse | null>;
  getMovieGenres(): Promise<IApiGenreResponse | null>;
  getTvShowGenres(): Promise<IApiGenreResponse | null>;
  getMovieCast(movieId: number): Promise<IApiCastResponse | null>;
  getTvShowCast(tvShowId: number): Promise<IApiCastResponse | null>;
  getMovieVideos(movieId: number): Promise<IApiVideosResponse | null>;
  getTvShowVideos(tvShowId: number): Promise<IApiVideosResponse | null>;
}
