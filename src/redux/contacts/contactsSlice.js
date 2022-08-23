// import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getAllContactsAsync,
  addNewContactAsync,
  deleteContactAsync,
  editContactAsync,
} from "./cont-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getAllContactsAsync.fulfilled](state, action) {
      state.items = [...action.payload];
    },
    [addNewContactAsync.fulfilled](state, action) {
      state.items = [...action.payload];
    },
    [deleteContactAsync.fulfilled](state, action) {
      state.items = [...action.payload]
    },
    [editContactAsync.fulfilled](state, action) {
      state.items = [...action.payload]
    }
  }
});