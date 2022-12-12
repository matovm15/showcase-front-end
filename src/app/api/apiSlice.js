import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  selectAccessToken,
  setCredentials,
} from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = selectAccessToken(getState());
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken.token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const { init, response } = result.error;
    if (
      response?.status === 401 &&
      response?.data?.message === "Token expired"
    ) {
      const refreshToken = JSON.parse(localStorage.getItem("refresh_token")).token;
      if (refreshToken) {
        const refreshResult = await baseQuery(
          { url: "/auth/refresh", method: "POST", body },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(setCredentials(refreshResult.data));
          return baseQuery(args, api, extraOptions);
        }
      }
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
  tagTypes: ["Users"], //TODO: Add tag types
});
