import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const profileAdapter = createEntityAdapter();

const initialState = profileAdapter.getInitialState({
  status: "idle",
  error: null,
});

const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserViaToken: builder.query({
      query: (token) => `/users/token/${token}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (response) =>
        profileAdapter.setAll(initialState, response),
      providesTags: ["freelancer"],
    }),
  }),
});

export const { useGetUserViaTokenQuery } = profileSlice;

export const selectProfileResult =
  profileSlice.endpoints.getUserViaToken.select();

const selectProfileData = createSelector(
  selectProfileResult,
  (result) => result.data
);

export const {
  selectAll: selectAllProfiles,
  selectById: selectProfileById,
  selectIds: selectProfileIds,
} = profileAdapter.getSelectors(
  (state) => selectProfileData(state) ?? initialState
);
