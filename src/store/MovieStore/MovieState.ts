import { Shows } from "../../core/interfaces/IShow";

export interface IMovieState {
  popular: Shows;
  topRated: Shows;
}

export const movieInitialState: IMovieState = {
  popular: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
  topRated: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
};
