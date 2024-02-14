import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../features/profileSlice";


export const store = configureStore({
    reducer: {
      formSlice: formReducer,
    },
  });