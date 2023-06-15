import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "../slice/mobileMenuSidebarSlice";
import { productSlice } from "../slice/productSlice";
export const store = configureStore({
  reducer: {
    mobileSlice,
    products: productSlice,
  },
});
