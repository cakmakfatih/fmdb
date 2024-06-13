import { createSlice } from "@reduxjs/toolkit";
import { bookmarkItem } from "./mainActions";

const BOOKMARKED_ITEMS_KEY = "BOOKMARKED_ITEMS";

export interface BookmarkedItem {}

export interface MainState {
  bookmarkedItems: BookmarkedItem[];
}

const initialState: MainState = {
  bookmarkedItems: JSON.parse(
    localStorage.getItem(BOOKMARKED_ITEMS_KEY) || JSON.stringify([])
  ),
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    bookmarkItem: bookmarkItem,
  },
});

export default mainSlice.reducer;
