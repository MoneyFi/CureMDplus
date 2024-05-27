import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiCallTest, base_s3 } from "../../Constants/Constants";

export const registerUserThunk = createAsyncThunk(
  "registerUser",
  async (body, { rejectWithValue }) => {
    try {
      const uploadData = new FormData();
      let userName =
        body.name.toLowerCase().trim() +
        "." +
        body.lastname.toLowerCase().trim();
      const user_registration_geolocation = {
        country: body.country,
        country_code: body.country_code,
        city: body.city,
        postal: "",
        latitude: "",
        longitude: "",
      };

      uploadData.append("name", body.name);
      uploadData.append("username", userName);
      uploadData.append("lastName", body.lastname);
      uploadData.append("email", body.email);
      uploadData.append("address", body.address);
      uploadData.append("mobile_number", body.mobile_number);
      uploadData.append("role", "user");
      uploadData.append("photo", "false");
      uploadData.append(
        "valueOfCountryInCode",
        body.country_code
      );
      uploadData.append("country", body.country);
      uploadData.append(
        "user_registration_geolocation",
        JSON.stringify(user_registration_geolocation)
      );
      uploadData.append("fcm_token", "");
      uploadData.append("city", body.city);
      uploadData.append("password", body.password);
      uploadData.append("google", 0);
      uploadData.append("apple", 0);
      uploadData.append("facebook", 0);
      uploadData.append("age", body.age);
      uploadData.append("dob", body.dob);
      uploadData.append("gender", body.gender);
      uploadData.append("cuil", body.cuil);
      uploadData.append("base", base_s3);

      const { data } = await axios.post(`${apiCallTest}?action=Add_user`, uploadData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
      });
      console.log(data);
      return data.response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "loginUser",
  async (body, { rejectWithValue }) => {
    try {
      const uploadinfo = new FormData();

      uploadinfo.append("email", body.email);
      uploadinfo.append("password", body.password);

      const { data } = await axios.post(
        `${apiCallTest}?action=login`,
        uploadinfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);