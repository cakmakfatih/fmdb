import { Shows } from "../../core/interfaces/IShow";

export interface ITvShowState {
  popular: Shows;
  topRated: Shows;
}

export const tvShowInitialState: ITvShowState = {
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
