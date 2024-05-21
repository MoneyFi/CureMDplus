import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: false,
  reducers: {
    changeForm: (state, action) => {
        return state = action.payload
    }
  },
});

export const { changeForm } = formSlice.actions;
export default formSlice.reducer;