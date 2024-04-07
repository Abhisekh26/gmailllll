import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: {
    changed: false,
    userMail: localStorage.getItem("userEmail") || "",
    items: [],
  },
  reducers: {
    replaceMails(state, action) {
      state.items = action.payload;
    },
    addMails(state, action) {
      state.items.push(action.payload);
      state.changed = true;
    },
    currentEmailUpdate(state, action) {
      state.userMail = action.payload;
    },
    deleteMail(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.changed = true;
    },
    clickedUpdate(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, clicked: "success" };
        }
        return item;
      });
      state.changed = true;
    },
  },
});
export const EmailSliceActions = emailSlice.actions;
export default emailSlice;