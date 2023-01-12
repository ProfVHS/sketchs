import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    console.log("test");
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });

    router("/posts");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log("test");
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    router("/posts");
  } catch (err) {
    console.log(err);
  }
};
