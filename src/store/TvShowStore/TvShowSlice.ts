import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Shows } from "../../core/interfaces/IShow";
import { tvShowInitialState } from "./TvShowState";
import { tvShowLoadPopular } from "./TvShowAction";

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
  },
});
