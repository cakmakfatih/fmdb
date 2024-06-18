import { createAsyncThunk } from "@reduxjs/toolkit";
import { MediaType } from "../../core/interfaces/IShow";
import apiService from "../../api";
import { IApiCastResponse } from "../../api/IApiTypes";

export const getMovieGenres = createAsyncThunk(
  "main/getMovieGenres",
  async (): Promise<
    | {
        id: number;
        value: string;
      }[]
    | null
  > => {
    const data = await apiService.getMovieGenres();

    if (data === null) {
      return null;
    }

    const result: { id: number; value: string }[] = [];

    for (const genre of data.genres) {
      result.push({
        id: genre.id,
        value: genre.name,
      });
    }

    return result;
  }
);

export const getTvShowGenres = createAsyncThunk(
  "main/getTvShowGenres",
  async (): Promise<
    | {
        id: number;
        value: string;
      }[]
    | null
  > => {
    const data = await apiService.getTvShowGenres();

    if (data === null) {
      return null;
    }

    const result: { id: number; value: string }[] = [];

    for (const genre of data.genres) {
      result.push({
        id: genre.id,
        value: genre.name,
      });
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
