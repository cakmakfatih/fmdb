import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IMovie from "../../core/interfaces/movie.interface";

export interface HomeState {
  mainContent: IMovie[];
}

const initialState: HomeState = {
  mainContent: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(homeLoadAsync.fulfilled, (state) => {
      state.mainContent = [];
    });
  },
});

export const homeLoadAsync = createAsyncThunk(
  "home/homeLoadAsync",
  async () => {
    return null;
  }
);

export default homeSlice.reducer;
