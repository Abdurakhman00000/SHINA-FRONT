import { api as index } from "..";
import { DATA_TYPES } from "./types";
import qs from "qs";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getData: build.query<
      DATA_TYPES.GetDatasResponse,
      DATA_TYPES.GetDatasRequest
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
      providesTags: ["data"],
    }),
    getDataById: build.query<
      DATA_TYPES.GetDataByIdResponse,
      DATA_TYPES.GetDataByIdRequest
    >({
      query: (id) => ({
        url: `/tyres/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["data"],
    }),
  }),
});

export const { useGetDataQuery, useGetDataByIdQuery } = api;
