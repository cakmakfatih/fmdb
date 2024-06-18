import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieGenres, getTvShowGenres, getCast } from "./mainAsyncThunks";
import { MediaType } from "../../core/interfaces/IShow";

const BOOKMARKED_ITEMS_KEY = "BOOKMARKED_ITEMS";

export interface Cast {
  movie: {
    id: number;
    value: string[];
  }[];
  tvShow: {
    id: number;
    value: string[];
  }[];
}

export interface YoutubeVideo {
  name: string;
  url: string;
}

export interface Videos {
  id: number;
  youtubeVideos: YoutubeVideo[];
}

export interface Genres {
  movie: {
    id: number;
    value: string;
  }[];
  tvShow: {
    id: number;
    value: string;
  }[];
}

export interface ShowVideos {
  movie: Videos[];
  tvShow: Videos[];
}

export interface BookmarkedItem {}

export interface MainState {
  isHeaderSticky: boolean;
  bookmarkedItems: BookmarkedItem[];
  genres: Genres;
  cast: Cast;
  videos: ShowVideos;
}

const initialState: MainState = {
  isHeaderSticky: false,
  bookmarkedItems: JSON.parse(
    localStorage.getItem(BOOKMARKED_ITEMS_KEY) || JSON.stringify([])
  ),
  genres: {
    movie: [],
    tvShow: [],
  },
  cast: {
    movie: [],
    tvShow: [],
  },
  videos: {
    movie: [],
    tvShow: [],
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    toggleStickyHeader: (state: MainState, action: PayloadAction<boolean>) => {
      state.isHeaderSticky = action.payload;
    },
    bookmarkItem: (state: MainState, action: PayloadAction<BookmarkedItem>) => {
      state.bookmarkedItems = [action.payload, ...state.bookmarkedItems];
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

export const { toggleStickyHeader, bookmarkItem } = mainSlice.actions;

export default mainSlice.reducer;
