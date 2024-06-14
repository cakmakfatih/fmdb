import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../api/apiService";

export const getMovieGenres = createAsyncThunk(
  "main/getMovieGenres",
  async (): Promise<{ [id: number]: string } | null> => {
    const data = await apiService.getMovieGenres();

    if (data === null) {
      return null;
    }

    const result: { [id: number]: string } = {};

    for (let genre of data.genres) {
      result[genre.id] = genre.name;
    }

    return result;
  }
);

export const getTvShowGenres = createAsyncThunk(
  "main/getTvShowGenres",
  async (): Promise<{ [id: number]: string } | null> => {
    const data = await apiService.getTvShowGenres();

    if (data === null) {
      return null;
    }

    const result: { [id: number]: string } = {};

    for (let genre of data.genres) {
      result[genre.id] = genre.name;
    }

    return result;
  }
);
