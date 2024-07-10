import axios from "axios";
import { apiCallProd, apiCallTest } from "../../Constants/Constants";
const API_CALL = apiCallProd;
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTransferThunk = createAsyncThunk(
  "create-transfer",
  async (body, { rejectWithValue }) => {
    try {
      const uploadData = new FormData();
      uploadData.append("user_email", body.user_email);
      uploadData.append("n_referencia", body.n_referencia);
      uploadData.append("monto", body.monto);
      uploadData.append("fecha_pago", body.fecha_pago);
      const { data } = await axios.post(API_CALL + '?action=curemd_plus_add_transfers', uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data.response
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);

export const updateTransferThunk = createAsyncThunk(
  "update-transfer",
  async (body, { rejectWithValue }) => {
    try {
      const uploadData = new FormData();
      uploadData.append("id", body.id);
      uploadData.append("status", body.status);
      const { data } = await axios.post(API_CALL + '?action=curemd_plus_update_transfers', uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data.response
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);

export const getPendingTransferThunk = createAsyncThunk(
  "get-pending-transfer",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(API_CALL + '?action=curemd_plus_pending_transfers', _, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data
    } catch (error) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  }
);
