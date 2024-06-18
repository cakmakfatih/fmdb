import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieGenres, getTvShowGenres, getCast } from "./MainAction";
import { MediaType } from "../../core/interfaces/IShow";
import { mainInitialState, MainState } from "./MainState";

export const mainSlice = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: {
    toggleStickyHeader: (state: MainState, action: PayloadAction<boolean>) => {
      state.isHeaderSticky = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMovieGenres.fulfilled,
      (
        state,
        action: PayloadAction<
          | {
              id: number;
              value: string;
            }[]
          | null
        >
      ) => {
        if (action.payload === null) return;

        state.genres.movie = [...action.payload, ...state.genres.movie];
      }
    );
    builder.addCase(
      getTvShowGenres.fulfilled,
      (
        state,
        action: PayloadAction<
          | {
              id: number;
              value: string;
            }[]
          | null
        >
      ) => {
        if (action.payload === null) return;

        state.genres.tvShow = [...action.payload, ...state.genres.tvShow];
      }
    );
    builder.addCase(
      getCast.fulfilled,
      (
        state,
        action: PayloadAction<{
          mediaType: MediaType;
          id: number;
          data: string[];
        } | null>
      ) => {
        if (action.payload === null) return;

        if (action.payload.mediaType === MediaType.Movie) {
          state.cast.movie = [
            { id: action.payload.id, value: action.payload.data },
            ...state.cast.movie,
          ];
        } else {
          state.cast.tvShow = [
            { id: action.payload.id, value: action.payload.data },
            ...state.cast.tvShow,
          ];
        }
      }
    );
  },
});

export const { toggleStickyHeader } = mainSlice.actions;
