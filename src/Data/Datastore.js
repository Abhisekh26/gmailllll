import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./Tokenslice";

const storee=configureStore({
    reducer:{
        login:tokenSlice.reducer
    }
})
export default storee