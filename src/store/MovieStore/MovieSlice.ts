import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieLoadPopular, movieLoadTopRated } from "./MovieAction";
import { Shows } from "../../core/interfaces/IShow";
import { movieInitialState } from "./MovieState";

export const movieSlice = createSlice({
  name: "movie",
  initialState: movieInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      movieLoadPopular.fulfilled,
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
      movieLoadTopRated.fulfilled,
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
