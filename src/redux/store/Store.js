import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "../slice/mobileMenuSidebarSlice";
export const store = configureStore({
  reducer: {
    mobileSlice,
    productSlice: [1, 2, 3, 4, 5],
  },
});
