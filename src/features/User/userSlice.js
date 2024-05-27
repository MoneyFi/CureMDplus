import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./userThunks";

const initialState = {
    user: null, //Aca iria el token de inicion de sesion o el id del user.
    role: null, //Aca iria el rol del usuario cuando inicia sesion.
    status: null, //El status de la peticion (pending - success - failure)
    error: '', //Si recibimos un error
    response: '' //Si esperamos una respuesta sin datos
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Register
        .addCase(registerUserThunk.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(registerUserThunk.fulfilled, (state, payload) => {
            state.status = 'success';
            state.response = payload;
        })
        .addCase(registerUserThunk.rejected, (state, payload) => {
            state.status = 'failure';
            state.error = payload;
        })
    // Login
        .addCase(loginUserThunk.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(loginUserThunk.fulfilled, (state, payload) => {
            state.status = 'success';
            state.token = payload.token;
            state.role = payload.role;
        })
        .addCase(loginUserThunk.rejected, (state, payload) => {
            state.status = 'failure';
            state.error = payload;
        })
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;