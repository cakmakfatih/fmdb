import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  homeLoadPopularMovies,
  homeLoadPopularTvShows,
  homeLoadTrending,
  Shows,
} from "./homeAsyncThunks";

export interface HomeState {
  trendingShows: Shows;
  popularMovies: Shows;
  popularSeries: Shows;
}

const initialState: HomeState = {
  trendingShows: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
  popularMovies: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
  popularSeries: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      homeLoadTrending.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.trendingShows.currentPage !== action.payload.currentPage) {
          state.trendingShows = {
            ...action.payload,
            items: [...state.trendingShows.items, ...action.payload.items],
          };
        }
      }
    );
    builder.addCase(
      homeLoadPopularMovies.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.popularMovies.currentPage !== action.payload.currentPage) {
          state.popularMovies = {
            ...action.payload,
            items: [...state.popularMovies.items, ...action.payload.items],
          };
        }
      }
    );
    builder.addCase(
      homeLoadPopularTvShows.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.popularSeries.currentPage !== action.payload.currentPage) {
          state.popularSeries = {
            ...action.payload,
            items: [...state.popularSeries.items, ...action.payload.items],
          };
        }
      }
    );
  },
});

export default homeSlice.reducer;
