import { createSlice } from "@reduxjs/toolkit";

var intialState={
    token:localStorage.getItem('idToken')|| "",
    loggedIn:localStorage.getItem('idToken')? true:false,
}
var tokenSlice=createSlice({
    name:"token",
    intialState,
    reducers:{
        logIn(state,action){
            state.token=action.payload
            state.loggedIn=true
        },
        logOut(state,action){
            state.token=""
            state.loggedIn=false
        }
    }
})

export const tokenSliceActions=tokenSlice.actions
export default tokenSlice