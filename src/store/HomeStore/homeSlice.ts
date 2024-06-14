import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homeLoadTrending, PopularShows } from "./homeAsyncThunks";

export interface HomeState {
  popularShows: PopularShows;
}

const initialState: HomeState = {
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
      (state, action: PayloadAction<PopularShows | null>) => {
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
