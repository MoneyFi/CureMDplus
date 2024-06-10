import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiCallProd } from "../../Constants/Constants";

export const getProdsThunk = createAsyncThunk(
    "getProds",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${apiCallProd}?action=curemd_plus_productores`);
            console.log(data);
            return data.response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)