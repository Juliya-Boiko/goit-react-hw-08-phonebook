import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "./auth-token";
import { customAxios } from "./axios";

export const registerUser = createAsyncThunk(
  'auth/register',
  async (info) => {
    try {
      const { data } = await customAxios.post('/users/signup', info);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (info) => {
    try {
      const { data } = await customAxios.post('/users/login', info);
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
      await customAxios.post('/users/logout');
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
        const response = await customAxios.get('/users/current'); 
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
)