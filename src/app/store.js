import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer,
   form: formReducer
  },
});