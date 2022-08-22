import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "api/axios";
import axios from "axios";

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values) => {
    try {
      const { data } = await axios.post('/users/signup', values);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values) => {
    try {
      const { data } = await axios.post('/users/login', values);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserData = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // console.log('TOKEN NULL');
      return thunkAPI.rejectWithValue();
    } else {
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current'); 
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  }
)