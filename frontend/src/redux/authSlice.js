import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";

const initialState = {
  isLoading: false,
  currentUser: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
  try {
    const formData = new FormData();

    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      "http://localhost:4000/auth/register",
      user,
      config
    );
    if (response) {
      console.log(response.data);
      dispatch(registerSuccess(response.data));
      history.push("/signIn");
      window.location.reload();
    } else {
      dispatch(registerFailure());
    }
  } catch (error) {
    dispatch(registerFailure());
  }
};

// export const signIn = (user) => async (dispatch) => {
//   try {

//     const response = await axios.post(
//       "http://localhost:4000/auth/signIn",
//       user
//     );
//     console.log(response);
//     if (response) {
//       localStorage.setItem("auth", JSON.stringify(response.data));
//       dispatch(loginSuccess(response.data));
//       history.push("/dashboard");
//       window.location.reload();
//     } else {
//       dispatch(loginFailure());
//     }
//   } catch (error) {
//     dispatch(loginFailure());
//   }
// };

export const signIn = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/auth/signIn",
      user
    );

    console.log(response);

    if (response.data) {
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      history.push("/dashboard");
      window.location.reload();
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
