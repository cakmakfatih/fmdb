import { Shows } from "../../core/interfaces/IShow";

export interface HomeState {
  trendingShows: Shows;
}

export const homeInitialState: HomeState = {
  trendingShows: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
};
