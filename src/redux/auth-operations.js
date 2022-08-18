import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://connections-api.herokuapp.com'

const customAxios = axios.create({
    baseURL: BASE_URL,
})

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

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
)

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
)


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
)