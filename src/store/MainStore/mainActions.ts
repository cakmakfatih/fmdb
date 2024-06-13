import { PayloadAction } from "@reduxjs/toolkit";
import { BookmarkedItem, MainState } from "./mainSlice";

export const bookmarkItem = (
  state: MainState,
  action: PayloadAction<BookmarkedItem>
) => {
  state.bookmarkedItems = [action.payload, ...state.bookmarkedItems];
};
