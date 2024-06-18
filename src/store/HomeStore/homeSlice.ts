import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homeLoadPopular, homeLoadTrending, Shows } from "./homeAsyncThunks";

export interface HomeState {
  trendingShows: Shows;
  popularShows: Shows;
}

const initialState: HomeState = {
  trendingShows: {
    currentPage: 0,
    nextPage: 1,
    lastPage: undefined,
    items: [],
  },
  popularShows: {
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
      homeLoadPopular.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.popularShows.currentPage !== action.payload.currentPage) {
          state.popularShows = {
            ...action.payload,
            items: [...state.popularShows.items, ...action.payload.items],
          };
        }
      }
    );
  },
});

export default homeSlice.reducer;
