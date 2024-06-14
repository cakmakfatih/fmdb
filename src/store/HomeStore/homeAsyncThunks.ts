import { createAsyncThunk } from "@reduxjs/toolkit";
import IShow from "../../core/interfaces/IShow";
import { apiResponseToShow } from "../../core/helpers";
import apiService from "../../api/apiService";

export interface TrendingShows {
  currentPage: number;
  nextPage: number;
  lastPage?: number;
  items: IShow[];
}

export const homeLoadTrending = createAsyncThunk(
  "home/homeLoadTrending",
  async (page?: number): Promise<TrendingShows | null> => {
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
