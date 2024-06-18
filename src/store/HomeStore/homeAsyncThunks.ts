import { createAsyncThunk } from "@reduxjs/toolkit";
import IShow from "../../core/interfaces/IShow";
import { apiResponseToShow } from "../../core/helpers";
import apiService from "../../api/apiService";

export interface Shows {
  currentPage: number;
  nextPage: number;
  lastPage?: number;
  items: IShow[];
}

export const homeLoadTrending = createAsyncThunk(
  "home/homeLoadTrending",
  async (page?: number): Promise<Shows | null> => {
    const data = await apiService.getTrendingAllWeek(page);

    if (data === null) {
      return null;
    }

    return {
      currentPage: data.page,
      nextPage: data.total_pages > data.page ? data.page + 1 : data.page,
      lastPage: data.total_pages,
      items: data.results.map<IShow>((i) => apiResponseToShow(i)),
    };
  }
);

export const homeLoadPopular = createAsyncThunk(
  "home/homeLoadPopular",
  async (page?: number): Promise<Shows | null> => {
    const data = await apiService.getPopularShows(page);

    if (data === null) {
      return null;
    }

    return {
      currentPage: data.page,
      nextPage: data.total_pages > data.page ? data.page + 1 : data.page,
      lastPage: data.total_pages,
      items: data.results.map<IShow>((i) => apiResponseToShow(i)),
    };
  }
);
