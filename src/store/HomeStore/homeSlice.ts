import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homeLoadTrending, TrendingShows } from "./homeAsyncThunks";

export interface HomeState {
  trendingShows: TrendingShows;
}

const initialState: HomeState = {
  trendingShows: {
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
      (state, action: PayloadAction<TrendingShows | null>) => {
        if (action.payload === null) return;

        if (state.trendingShows.currentPage !== action.payload.currentPage) {
          state.trendingShows = {
            ...action.payload,
            items: [...state.trendingShows.items, ...action.payload.items],
          };
        }
      }
    );
  },
});

export default homeSlice.reducer;
