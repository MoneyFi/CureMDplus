import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: true,
  reducers: {
    paymentGocuotas: (state, action) => {
        
    },
  },
});

export const { paymentGocuotas } = paymentSlice.actions;
export default paymentSlice.reducer;