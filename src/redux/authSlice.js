import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./auth-operations";
const initialState = {
    user: {
        name: '',
        email: null,
    },
    token: null,
    isLogged: false,
};

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
        [logoutUser.fulfilled](state, _) {
            state.user = {
                name: '',
                email: null,
            };
            state.token = null;
            state.isLogged = false;
        }
        // [registerUser.fulfilled]: (_, action) => {
        //     return {
        //         user: action.payload.user,
        //         token: action.payload.token,
        //         isLogged: true,
        //     }
        // },
        // [loginUser.fulfilled]: (_, action) => {
        //     return {
        //         user: action.payload.user,
        //         token: action.payload.token,
        //         isLogged: true,
        //     }
        // },
        // [logoutUser.fulfilled]: (state, action) => {
        //     return initialState;
        // }
    },
})