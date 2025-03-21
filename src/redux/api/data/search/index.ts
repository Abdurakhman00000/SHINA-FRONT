import { api as index } from "../..";
import qs from "qs";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    searchData: build.query<
      SEARCH_DATA_TYPES.searchDataResponse,
      SEARCH_DATA_TYPES.searchDataRequest
    >({
      query: (queryString) => {
        const queryParams = qs.stringify(queryString, {
          arrayFormat: "repeat",
        });
        return {
          url: `/tyres?${queryParams}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["search"],
    }),
  }),
});

export const { useSearchDataQuery } = api;
