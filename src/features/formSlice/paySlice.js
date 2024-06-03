import { createSlice } from "@reduxjs/toolkit";

export const payForm = createSlice({
  name: "pay",
  initialState: {amount:'',plan:''},
  reducers: {
    changePay: (state, action) => {
        console.log(action.payload)
        state.amount = action.payload.amount
        state.plan = action.payload.plan
    }
  },
});

export const { changePay } = payForm.actions;
export default payForm.reducer;