import { Shows } from "../../core/interfaces/IShow";

export interface ITvShowState {
  popular: Shows;
}

export const tvShowInitialState: ITvShowState = {
  popular: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
};
