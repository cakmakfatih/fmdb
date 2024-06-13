import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const BOOKMARKED_ITEMS_KEY = "BOOKMARKED_ITEMS";

export interface BookmarkedItem {}

export interface MainState {
  isHeaderSticky: boolean;
  bookmarkedItems: BookmarkedItem[];
}

const initialState: MainState = {
  isHeaderSticky: false,
  bookmarkedItems: JSON.parse(
    localStorage.getItem(BOOKMARKED_ITEMS_KEY) || JSON.stringify([])
  ),
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
});

export const { toggleStickyHeader, bookmarkItem } = mainSlice.actions;

export default mainSlice.reducer;
