import { apiSlice } from "../../app/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProfile: builder.mutation({
      query: (body) => ({
        url: "/profile/create-profile",
        method: "POST",
        body,
      }),
    }),
    overrideExisting: false,
  }),
});

export const { useCreateProfileMutation } = profileApiSlice;
