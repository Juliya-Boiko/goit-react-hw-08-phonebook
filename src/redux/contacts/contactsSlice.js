import { createSlice } from "@reduxjs/toolkit";
import { getAllContacts, addNewContact } from "./cont-operations";

const initialState = {
    items: [],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [getAllContacts.fulfilled](state, action) {
            state.items = action.payload;
        },
        [addNewContact.fulfilled](state, action) {
            state.items = [action.payload, ...state];
        },
    },
    reducers: {},
});