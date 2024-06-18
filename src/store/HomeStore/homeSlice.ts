import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { homeLoadTrending } from "./HomeAction";
import { Shows } from "../../core/interfaces/IShow";
import { homeInitialState } from "./HomeState";

export const homeSlice = createSlice({
  name: "home",
  initialState: homeInitialState,
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
  },
});
