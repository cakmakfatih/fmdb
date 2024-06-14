import axios from "axios";
import httpClient from "../core/httpClient";
import { IApiResponse } from "../core/interfaces/IApiResponse";

interface ApiService {
  GetTrendingAll(page?: number): Promise<IApiResponse | null>;
}

const apiService: ApiService = {
  async GetTrendingAll(page?: number) {
    if (typeof page === "undefined") {
      page = 1;
    }

    const response = await httpClient.get<IApiResponse>("/trending/all/week", {
      params: { page: page },
    });

    if (response.status !== axios.HttpStatusCode.Ok) {
      return null;
    }

    return response.data;
  },
};

export default apiService;
