import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    toggleMenu: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
