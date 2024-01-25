import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slice/Apislice";
export const Store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
