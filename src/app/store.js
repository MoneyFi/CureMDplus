import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'
import userReducer from '../features/User/userSlice'
import paymentReducer from '../features/paymentSlice/paymentSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer,
   user: userReducer,
   form: formReducer,
   payment: paymentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});