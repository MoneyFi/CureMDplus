import { createSlice } from "@reduxjs/toolkit";
import { addTransferThunk, getPendingTransferThunk, updateTransferThunk } from "./paymentThunks";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    price: null,
    plan: null,
    transferencias_pendientes: [],
    response: '',
    status: '',
    error: null
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
  extraReducers: (builder) => {
    builder
    //Create Transferencias Bancarias
    .addCase(addTransferThunk.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(addTransferThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.response = action.payload.response;
    })
    .addCase(addTransferThunk.rejected, (state, action) => {
      state.status = 'error';
      state.response = action.payload.response;
      state.error = action.payload;
    })
    //Update Transferencias Bancarias
    .addCase(updateTransferThunk.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(updateTransferThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.response = action.payload.response;
    })
    .addCase(updateTransferThunk.rejected, (state, action) => {
      state.status = 'error';
      state.response = action.payload.response;
      state.error = action.payload;
    })
    //Get Transferencias Bancarias Pendientes
    .addCase(getPendingTransferThunk.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getPendingTransferThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.transferencias_pendientes = action.payload.data;
      state.response = action.payload.response;
    })
    .addCase(getPendingTransferThunk.rejected, (state, action) => {
      state.status = 'error';
      state.response = action.payload.response;
      state.error = action.payload;
    })
  }
});

export const { paymentGocuotas, priceToPay, planToPay } = paymentSlice.actions;
export default paymentSlice.reducer;