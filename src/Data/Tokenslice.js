import { createSlice } from "@reduxjs/toolkit";



var tokenSlice = createSlice({
  name: "token",
  initialState:{
    token: localStorage.getItem("idToken") || "",
    loggedIn: localStorage.getItem("idToken") ? true : false,
  },
  reducers: {
    logIn(state, action) {
      state.token = action.payload;
      state.loggedIn = true;
    },
    logOut(state, action) {
      state.token = "";
      state.loggedIn = false;
    },
  },
});

export const tokenSliceActions = tokenSlice.actions;
export default tokenSlice;
