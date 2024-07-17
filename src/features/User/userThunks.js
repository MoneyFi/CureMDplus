import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiCallProd, apiCallTest, base_s3 } from "../../Constants/Constants";

let apiCall = apiCallProd;

export const registerUserThunk = createAsyncThunk(
  "registerUser",
  async (body, { rejectWithValue }) => {
    try {
      const uploadData = new FormData();
      let userName =
        body.nombre.toLowerCase().trim() +
        "." +
        body.apellido.toLowerCase().trim();
      const user_registration_geolocation = {
        country: body.pais,
        country_code: "",
        city: body.ciudad,
        postal: "",
        latitude: "",
        longitude: "",
      };

      const dateNow = new Date();
      const dob = new Date(body.fecha_de_nacimiento);
      let age = dateNow.getFullYear() - dob.getFullYear();
      const monthDiff = dateNow.getMonth() - dob.getMonth();
      const dayDiff = dateNow.getDate() - dob.getDate();
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      uploadData.append("name", body.nombre);
      uploadData.append("username", userName);
      uploadData.append("lastName", body.apellido);
      uploadData.append("email", body.mail);
      uploadData.append("address", body.direccion);
      uploadData.append("mobile_number", body.telefono);
      uploadData.append("photo", "false");
      uploadData.append("valueOfCountryInCode", "");
      uploadData.append("country", body.pais);
      uploadData.append(
        "user_registration_geolocation",
        JSON.stringify(user_registration_geolocation)
      );
      uploadData.append("fcm_token", "");
      uploadData.append("city", body.ciudad);
      uploadData.append("password", body.contraseña);
      uploadData.append("google", 0);
      uploadData.append("apple", 0);
      uploadData.append("facebook", 0);
      uploadData.append("age", age);
      uploadData.append("dob", body.fecha_de_nacimiento);
      uploadData.append("gender", body.genero);
      uploadData.append("cuil", body.cuil);
      uploadData.append("base", base_s3);
      uploadData.append("dni_productor", body.dni_productor);
      uploadData.append("curemd", "curemd_plus");
      uploadData.append("status_curemd_plus", body.status);
      uploadData.append("nombre_plan_curemd_plus", body.plan);
      uploadData.append("descuento_curemd_plus", body.descuento);
      uploadData.append("fecha_cobro_curemd_plus", body.fecha_cobro);
      uploadData.append("declaracion_jurada", body.declaracion_jurada);

      const { data } = await axios.post(
        `${apiCall}?action=Add_user`,
        uploadData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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

      const { data } = await axios.post(`${apiCall}?action=login`, uploadinfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const userData = JSON.stringify(data);
      localStorage.setItem("login", userData);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "updateUser",
  async (body, { rejectWithValue }) => {
    try {
      const uploadinfo = new FormData();
      uploadinfo.append("id", body.id);
      const { dni_productor, cuil, status, plan, declaracion_jurada } = body;
      if (dni_productor) {
        uploadinfo.append("dni_productor", body.dni_productor);
      }
      if (cuil) {
        uploadinfo.append("cuil", body.cuil);
      }
      if (status) {
        uploadinfo.append("status_curemd_plus", body.status);
      }
      if (plan) {
        uploadinfo.append("nombre_plan", body.plan);
        uploadinfo.append("fecha_cobro_curemd_plus", body.fecha_cobro);
      }
      if (declaracion_jurada) {
        uploadinfo.append("declaracion_jurada", body.declaracion_jurada);
      }
      const login = JSON.parse(localStorage.getItem("login"));
      let token = login?.token || body.user_token;
      const { data } = await axios.post(
        `${apiCall}?action=curemd_plus_update`,
        uploadinfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );
      return data.response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const uploadPdfThunk = createAsyncThunk(
  "uploadPdf",
  async (file, { rejectWithValue }) => {
    try {
      const uploadinfo = new FormData();
      uploadinfo.append("file", file);
      const { data } = await axios.post(
        `${apiCall}?action=curemd_plus_upload_pdf`,
        uploadinfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      localStorage.setItem("d_jurada", data.url)
      return data.response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const uploadCertificateThunk = createAsyncThunk(
  "uploadCertificate",
  async (body, { rejectWithValue }) => {
    try {
      const filesArray = Array.from(body.files);

      const uploadPromises = filesArray.map(async (file) => {
        const uploadinfo = new FormData();
        uploadinfo.append("file", file); // Asegúrate de que la clave sea 'file'
        uploadinfo.append("month", body.month);
        uploadinfo.append("year", body.year);

        const { data } = await axios.post(
          `${apiCall}?action=curemd_plus_upload_certificado_pdf`,
          uploadinfo,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return data;
      });

      const results = await Promise.all(uploadPromises);
      console.log(results);
      //Recorrer el array de resultados para comprobar que se han subido correctamente los archivos
      const findError = results.filter((result) => result.response === "fail");
      if (findError.length > 0) {
        return { response: "fail", files: findError };
      } else {
        return { response: "success" };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getNominasThunk = createAsyncThunk(
  "getNominas",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${apiCall}?action=curemd_plus_nominas`);
      const dataJson = JSON.stringify(data.data);
      localStorage.setItem("nominas", dataJson);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
)