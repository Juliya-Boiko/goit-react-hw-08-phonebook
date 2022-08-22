// import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getAllContactsAsync, addNewContactAsync, deleteContactAsync } from "./cont-operations";
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
      state.items = [action.payload, ...state.items];
    },
    [deleteContactAsync.fulfilled](state, action) {
      state.items = [...state.items.filter(item => item.id !== action.payload)]
    },
  }
});