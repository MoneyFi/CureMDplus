import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        toasts: []
    },
    reducers: {
        createToast: (state, action) => {
            state.toasts.push({
                id: Date.now(),
                text: action.payload
            })
        },
        deleteToast: (state, action) => {
            state.toasts = state.toasts.filter(t => t.id !== Number(action.payload));
        },
    }
})

export const { createToast, deleteToast } = toastSlice.actions;
export default toastSlice.reducer;