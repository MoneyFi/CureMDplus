import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'
import userReducer from '../features/User/userSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer,
   form: formReducer,
   user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});