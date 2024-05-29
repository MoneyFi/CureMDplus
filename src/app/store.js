import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'
import userReducer from '../features/User/userSlice'
import paymentReducer from '../features/paymentSlice/paymentSlice'
import toastReducer from '../features/toastSlice/toastSlice'
import payFormReducer from '../features/formSlice/paySlice'




export const store = configureStore({
  reducer: {
   theme: themeReducer,
   user: userReducer,
   form: formReducer,
   payment: paymentReducer,
   toast: toastReducer,
   pay: payFormReducer
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});