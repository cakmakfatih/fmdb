import { TMDB_BACKDROP_PREFIX, TMDB_POSTER_PREFIX } from "./globals";
import { IApiResponseItem } from "./interfaces/IApiResponse";
import IShow from "./interfaces/IShow";

export function apiResponseToShow(media: IApiResponseItem): IShow {
  return {
    adult: media.adult,
    backdropPath: TMDB_BACKDROP_PREFIX + media.backdrop_path,
    firstAirDate: media.first_air_date,
    releaseDate: media.release_date,
    genreIds: media.genre_ids,
    id: media.id,
    mediaType: media.media_type,
    name: media.name,
    title: media.title,
    originCountry: media.origin_country,
    originalLanguage: media.original_language,
    originalName: media.original_name,
    originalTitle: media.original_title,
    overview: media.overview,
    popularity: media.popularity,
    posterPath: TMDB_POSTER_PREFIX + media.poster_path,
    voteAverage: media.vote_average,
    voteCount: media.vote_count,
  };
}
