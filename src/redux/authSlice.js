import { Notify } from "notiflix";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "api/axios";
import axios from "axios";

// ================== INITIAL STATE
const initialState = {
  user: {
    name: '',
    email: null,
  },
  token: null,
  isLogged: false,
  isRefreshing: false,
};

// ================== SELECTORS
export const getUserName = state => state.auth.user.name;
export const getLogging = state => state.auth.isLogged;
export const getToken = state => state.auth.token;
export const getRefreshing = state => state.auth.isRefreshing;

// ================== ASYNC OPERATIONS
export const registerUser = createAsyncThunk(
  'auth/register',
  async (values) => {
    try {
      const { data } = await axios.post('/users/signup', values);
      token.set(data.token);
      return data;
    } catch (error) {
      Notify.failure(error.message);
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
      Notify.failure(error.message);
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
      Notify.failure(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      Notify.failure("Please login!");
    } else {
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current'); 
        return data;
      } catch (error) {
        Notify.failure(error.message);
      }
    }
  }
)

// ================== REDUSER
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logoutUser.fulfilled](state) {
      state.user = {
        name: '',
        email: null,
      };
      state.token = null;
      state.isLogged = false;
    },
    [getUserData.pending](state) {
      state.isRefreshing = true;
      state.isLogged = false;
    },
    [getUserData.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLogged = true;
      state.isRefreshing = false;
    },
    [getUserData.rejected](state) {
      state.isRefreshing = false;
      state.isLogged = false;
    },
  },
})