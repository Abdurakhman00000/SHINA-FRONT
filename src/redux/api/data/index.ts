import {api as index} from ".."
import { DATA_TYPES } from "./types"

const api = index.injectEndpoints({
    endpoints: (build) => ({
        getData: build.query<DATA_TYPES.GetDatasResponse, DATA_TYPES.GetDatasRequest>({
            query: () => ({
                url: "/tyres",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            providesTags: ["data"]
        })
    })
})

export const {useGetDataQuery} = api;