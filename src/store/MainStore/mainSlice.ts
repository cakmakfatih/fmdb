import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovieGenres, getTvShowGenres, getCast } from "./mainAsyncThunks";
import { MediaType } from "../../core/interfaces/IShow";

const BOOKMARKED_ITEMS_KEY = "BOOKMARKED_ITEMS";

export interface BookmarkedItem {}

export interface MainState {
  isHeaderSticky: boolean;
  bookmarkedItems: BookmarkedItem[];
  genres: {
    movie: {
      [key: number]: string;
    };
    tvShow: {
      [key: number]: string;
    };
  };
  cast: {
    movie: {
      [key: number]: string[];
    };
    tvShow: {
      [key: number]: string[];
    };
  };
}

const initialState: MainState = {
  isHeaderSticky: false,
  bookmarkedItems: JSON.parse(
    localStorage.getItem(BOOKMARKED_ITEMS_KEY) || JSON.stringify([])
  ),
  genres: {
    movie: {},
    tvShow: {},
  },
  cast: {
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
      (state, action: PayloadAction<{ [id: number]: string } | null>) => {
        if (action.payload === null) return;

        state.genres.movie = action.payload;
      }
    );
    builder.addCase(
      getTvShowGenres.fulfilled,
      (state, action: PayloadAction<{ [id: number]: string } | null>) => {
        if (action.payload === null) return;

        state.genres.tvShow = action.payload;
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
          state.cast.movie[action.payload.id] = action.payload.data;
        } else {
          state.cast.tvShow[action.payload.id] = action.payload.data;
        }
      }
    );
  },
});

export const { toggleStickyHeader, bookmarkItem } = mainSlice.actions;

export default mainSlice.reducer;
