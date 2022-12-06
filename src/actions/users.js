import { REGISTER, CREATE_PROFILE, LOGIN } from "../types";
import * as api from "../app/api/index";

// Register user
export const userRegister = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    const role = data.user.role;
    const id = data.user.id;

    dispatch({
      type: REGISTER,
      payload: data,
    });

    if (role === "freelancer") {
      navigate(`/register/create-profile/${role}`);
    } else {
      navigate(`/dashboard/${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

// Create profile
export const createprofile = (formData, id, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createProfile(formData, id);

    const user_id = data.user.id;

    dispatch({
      type: CREATE_PROFILE,
      payload: data,
    });

    navigate(`/dashboard/${user_id}`);
  } catch (error) {
    console.log(error);
  }
};

// Login
export const userLogin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({
      type: LOGIN,
      payload: data,
    });

    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
