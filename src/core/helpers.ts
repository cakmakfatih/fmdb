import { IApiShowResponseItem } from "../api/IApiTypes";
import { Cast, Genres } from "../store/MainStore/MainState";
import { TMDB_BACKDROP_PREFIX, TMDB_POSTER_PREFIX } from "./globals";
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
  genres: Genres;
}): string[] {
  const genresStr: string[] = [];

  if (mediaType === MediaType.Movie) {
    for (const genreId of genreIds) {
      const idx = genres.movie.findIndex((i) => i.id === genreId);

      if (idx !== -1) genresStr.push(genres.movie[idx].value);
    }
  } else if (mediaType === MediaType.Tv) {
    for (const genreId of genreIds) {
      const idx = genres.tvShow.findIndex((i) => i.id === genreId);

      if (idx !== -1) genresStr.push(genres.tvShow[idx].value);
    }
  }

  return genresStr;
}

export function findCastFromStore({
  show,
  cast,
}: {
  show: IShow;
  cast: Cast;
}): string[] {
  const castFiltered: string[] = [];

  if (show.mediaType === MediaType.Movie) {
    const idx = cast.movie.findIndex((i) => i.id === show.id);

    if (idx !== -1) castFiltered.push(...cast.movie[idx].value);
  } else if (show.mediaType === MediaType.Tv) {
    const idx = cast.tvShow.findIndex((i) => i.id === show.id);

    if (idx !== -1) castFiltered.push(...cast.tvShow[idx].value);
  }

  return castFiltered;
}
