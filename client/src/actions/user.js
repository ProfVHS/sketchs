import * as api from "../api";

export const getUser = () => async (dispatch) => {
  try {
    console.log("test");
    const { data } = await api.fetchUser();

    dispatch({ type: "FETCH_USER", payload: data });
  } catch (err) {
    console.log({ message: err.message });
  }
};
