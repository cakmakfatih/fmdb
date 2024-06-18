import { IApiService } from "./IApiService";
import ApiServiceImpl from "./ApiServiceImpl";
import httpClient from "../core/httpClient";

const apiService: IApiService = new ApiServiceImpl(httpClient);
export default apiService;
