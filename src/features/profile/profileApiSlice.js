import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const profileAdapter = createEntityAdapter();

const initialState = profileAdapter.getInitialState({
  status: "idle",
  error: null,
});

const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProfile: builder.mutation({
      query: (body) => ({
        url: "/profile",
        method: "POST",
        body,
      }),
    }),
    getUserProfile: builder.query({
      query: () => "/profile/me",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (response) => {
        return profileAdapter.upsertOne(initialState, response);
      },
    }),
  }),
});

export const { useCreateProfileMutation, useGetUserProfileQuery } =
  profileSlice;

export const selectProfileResult = profileSlice.endpoints.getUserProfile.select()