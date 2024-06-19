import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Shows } from "../../core/interfaces/IShow";
import { tvShowInitialState } from "./TvShowState";
import { tvShowLoadPopular, tvShowLoadTopRated } from "./TvShowAction";

export const tvShowSlice = createSlice({
  name: "tvShow",
  initialState: tvShowInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      tvShowLoadPopular.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.popular.currentPage !== action.payload.currentPage) {
          state.popular = {
            ...action.payload,
            items: [...state.popular.items, ...action.payload.items],
          };
        }
      }
    );
    builder.addCase(
      tvShowLoadTopRated.fulfilled,
      (state, action: PayloadAction<Shows | null>) => {
        if (action.payload === null) return;

        if (state.topRated.currentPage !== action.payload.currentPage) {
          state.topRated = {
            ...action.payload,
            items: [...state.topRated.items, ...action.payload.items],
          };
        }
      }
    );
  },
});
