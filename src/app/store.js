import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'
import paymentReducer from '../features/paymentSlice/paymentSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer,
   form: formReducer,
   payment: paymentReducer
  },
});