import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./Tokenslice";

const storee=configureStore({
    reducer:{
        loginstate:tokenSlice.reducer
    }
})
export default storee