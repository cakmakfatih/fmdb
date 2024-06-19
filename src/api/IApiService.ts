import {
  IApiCastResponse,
  IApiGenreResponse,
  IApiShowResponse,
  IApiVideosResponse,
} from "./IApiTypes";

export interface IApiService {
  getTrendingAllWeek(page?: number): Promise<IApiShowResponse | null>;
  getPopularMovies(page?: number): Promise<IApiShowResponse | null>;
  getPopularTvShows(page?: number): Promise<IApiShowResponse | null>;
  getMovieGenres(): Promise<IApiGenreResponse | null>;
  getTvShowGenres(): Promise<IApiGenreResponse | null>;
  getMovieCast(movieId: number): Promise<IApiCastResponse | null>;
  getTvShowCast(tvShowId: number): Promise<IApiCastResponse | null>;
  getMovieVideos(movieId: number): Promise<IApiVideosResponse | null>;
  getTvShowVideos(tvShowId: number): Promise<IApiVideosResponse | null>;
  getTopRatedMovies(page?: number): Promise<IApiShowResponse | null>;
  getTopRatedTvShows(page?: number): Promise<IApiShowResponse | null>;
}
