import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from  "../../app/api/apiSlice"

const profileAdapter = createEntityAdapter();

const initialState = profileAdapter.getInitialState({
  status: "idle",
  error: null,
});

const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "/profile/me",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (response) =>
        profileAdapter.setAll(initialState, response),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useGetProfileQuery } = profileSlice;

export const selectProfileResult = profileSlice.endpoints.getProfile.select();

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
