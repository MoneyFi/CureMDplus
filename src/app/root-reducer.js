import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from '../features/themeSlice/themeSlice'
import formReducer from '../features/formSlice/formSlice'
import userReducer from '../features/User/userSlice'
import paymentReducer from '../features/paymentSlice/paymentSlice'
import toastReducer from '../features/toastSlice/toastSlice'
import prodReducer from '../features/prodSlice/prodSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'payment', 'prod'],
};

const combinedReducers = combineReducers({
    theme: themeReducer,
    user: userReducer,
    form: formReducer,
    payment: paymentReducer,
    toast: toastReducer,
    prod: prodReducer
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;