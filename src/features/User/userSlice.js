import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./userThunks";

const initialState = {
    token: null, //Aca iria el token de inicion de sesion.
    user_id: null, //Aca iria el id del user.
    data: null, //Aca iria metadata del user.
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
        .addCase(registerUserThunk.fulfilled, (state, action) => {
            state.status = 'success';
            state.response = action.payload;
        })
        .addCase(registerUserThunk.rejected, (state, action) => {
            state.status = 'failure';
            state.error = action;
            state.response = action.payload.response;
        })
    // Login
        .addCase(loginUserThunk.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.status = 'success';
            state.response = action.payload.response;
            state.user_id = action.payload.user_id;
            state.token = action.payload.token;
            state.data = action.payload.data_user;
            state.role = action.payload.role;
        })
        .addCase(loginUserThunk.rejected, (state, action) => {
            state.status = 'failure';
            state.error = action;
            state.response = action.payload.response;
        })
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;