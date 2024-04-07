import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./Tokenslice";
import emailSlice from "./Emailstore";

const storee = configureStore({
  reducer: {
    loginstate: tokenSlice.reducer,
    emailState: emailSlice.reducer,
  },
});
export default storee;
