import IShow from "../../core/interfaces/IShow";

export type IMovie = IShow;
export interface IMovieState {
  movies: IMovie[];
  genres: IMovie[];
}
