import { createAsyncThunk } from "@reduxjs/toolkit";
import IShow, { MediaType, Shows } from "../../core/interfaces/IShow";
import { apiResponseToShow } from "../../core/helpers";
import apiService from "../../api";

export const tvShowLoadPopular = createAsyncThunk(
  "tvShow/loadPopular",
  async (page?: number): Promise<Shows | null> => {
    const data = await apiService.getPopularTvShows(page);

    if (data === null) {
      return null;
    }

    return {
      currentPage: data.page,
      nextPage: data.total_pages > data.page ? data.page + 1 : data.page,
      lastPage: data.total_pages,
      items: data.results.map<IShow>((i) => ({
        ...apiResponseToShow(i),
        mediaType: MediaType.Tv,
      })),
    };
  }
);

export const tvShowLoadTopRated = createAsyncThunk(
  "tvShow/loadTopRated",
  async (page?: number): Promise<Shows | null> => {
    const data = await apiService.getTopRatedTvShows(page);

    if (data === null) {
      return null;
    }

    return {
      currentPage: data.page,
      nextPage: data.total_pages > data.page ? data.page + 1 : data.page,
      lastPage: data.total_pages,
      items: data.results.map<IShow>((i) => ({
        ...apiResponseToShow(i),
        mediaType: MediaType.Tv,
      })),
    };
  }
);
