import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: JSON.parse(localStorage.getItem("access_token")) || null,
    refreshToken: JSON.parse(localStorage.getItem("refresh_token")) || null,
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.tokens.access;
      state.refreshToken = action.payload.tokens.refresh;
      state.user = action.payload.user;
      localStorage.setItem(
        "access_token",
        JSON.stringify(action.payload.tokens.access)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(action.payload.tokens.refresh)
      );
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
