import { REGISTER, CREATE_PROFILE, LOGIN } from "../types";

let initialState = {
  user: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
