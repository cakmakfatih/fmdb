import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService, { IApiCastResponse } from "../../api/apiService";
import { MediaType } from "../../core/interfaces/IShow";

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

export const getCast = createAsyncThunk(
  "main/getCast",
  async ({
    mediaType,
    id,
  }: {
    mediaType: MediaType;
    id: number;
  }): Promise<{ mediaType: MediaType; id: number; data: string[] } | null> => {
    let data: IApiCastResponse | null;

    if (mediaType === MediaType.Movie) {
      data = await apiService.getMovieCast(id);
    } else {
      data = await apiService.getTvShowCast(id);
    }

    if (data === null) {
      return null;
    }

    return {
      mediaType: mediaType,
      data: data.cast.map((i) => i.name),
      id: id,
    };
  }
);
