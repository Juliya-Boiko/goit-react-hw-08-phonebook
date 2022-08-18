import { createReducer } from "@reduxjs/toolkit";

export const user = createReducer(
    {
        name: '',
        password: '',
    },
    {}
)