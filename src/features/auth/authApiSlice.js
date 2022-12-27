import { apiSlice } from "../../app/api/apiSlice";
import { logout } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    sendLogOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const resultAction = await queryFulfilled;
        if (resultAction.payload.status === "fulfilled") {
          dispatch(logout());
          dispatch(authApiSlice.util.resetApiState());
        }
      },
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    refreshToken: builder.mutation({
      query: (body) => ({
        url: "/auth/refresh",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useSendLogOutMutation,
  useRegisterUserMutation,
  useRefreshTokenMutation,
} = authApiSlice;
