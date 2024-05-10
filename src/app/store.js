import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer
  },
});