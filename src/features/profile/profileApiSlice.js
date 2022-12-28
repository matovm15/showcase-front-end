import { apiSlice } from "../../app/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
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
    overrideExisting: false,
  }),
});

export const { useCreateProfileMutation, useGetUserProfileQuery } =
  profileSlice;

export const selectProfileResult = profileSlice.endpoints.getUserProfile.select()