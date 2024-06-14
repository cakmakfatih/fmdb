import { TMDB_BACKDROP_PREFIX, TMDB_POSTER_PREFIX } from "./globals";
import { IApiShowResponseItem } from "./interfaces/IApiShowResponse";
import IShow, { MediaType } from "./interfaces/IShow";

export function apiResponseToShow(media: IApiShowResponseItem): IShow {
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

export function genresIdsToString({
  mediaType,
  genreIds,
  genres,
}: {
  mediaType: MediaType;
  genreIds: number[];
  genres: { movie: { [id: number]: string }; tvShow: { [id: number]: string } };
}): string[] {
  const genresStr: string[] = [];

  if (mediaType === MediaType.Movie) {
    for (let genreId of genreIds) {
      if (genreId in genres.movie) genresStr.push(genres.movie[genreId]);
    }
  } else if (mediaType === MediaType.Tv) {
    for (let genreId of genreIds) {
      if (genreId in genres.tvShow) genresStr.push(genres.tvShow[genreId]);
    }
  }

  return genresStr;
}
