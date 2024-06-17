export enum MediaType {
  Tv = "tv",
  Movie = "movie",
}

export default interface IShow {
  adult: boolean;
  backdropPath: string;
  firstAirDate?: string;
  releaseDate?: string;
  genreIds: number[];
  id: number;
  mediaType: MediaType;
  name?: string;
  title?: string;
  originCountry?: string[];
  originalLanguage: string;
  originalName?: string;
  originalTitle?: string;
  overview: string;
  popularity: number;
  posterPath: string;
  voteAverage: number;
  voteCount: number;
}
