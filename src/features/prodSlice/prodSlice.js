import { createSlice } from "@reduxjs/toolkit";
import { getProdsThunk } from "./prodThunks";

const initialState = {
    status: null, //El status de la peticion (pending - success - failure).
    productores: [], //Aca se van a guardar todos los productores y sus datos.
    error: '', //Si recibimos un error.
    response: '' //Si esperamos una respuesta sin datos.
}

export const prodSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Get Productores
        .addCase(getProdsThunk.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getProdsThunk.fulfilled, (state, action) => {
            state.status = 'success';
            state.productores = action.payload;
        })
        .addCase(getProdsThunk.rejected, (state, action) => {
            state.status = 'failure';
            state.error = action;
            state.response = action.payload.response;
        })
  },
});

export const { } = prodSlice.actions;
export default prodSlice.reducer;