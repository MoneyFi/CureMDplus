import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    price: null,
    plan: null
  },
  reducers: {
    paymentGocuotas: (state, action) => {
        
    },
    priceToPay: (state, action) => {
      state.price = action.payload
    },
    planToPay: (state, action) => {
      state.plan = action.payload
    },
  },
});

export const { paymentGocuotas, priceToPay, planToPay } = paymentSlice.actions;
export default paymentSlice.reducer;