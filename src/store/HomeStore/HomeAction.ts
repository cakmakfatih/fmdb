import { createAsyncThunk } from "@reduxjs/toolkit";
import IShow, { Shows } from "../../core/interfaces/IShow";
import { apiResponseToShow } from "../../core/helpers";
import apiService from "../../api";

export const homeLoadTrending = createAsyncThunk(
  "home/loadTrending",
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
