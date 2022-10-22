import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  selectAccessToken,
  setCredentials,
} from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = selectAccessToken(getState());
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  //   TODO: Handle expired token
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
  tagTypes: [], //TODO: Add tag types
});
