import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, fetchAddContact, fetchDeleteContact, fetchEditContact } from "api/contactsApi";

// ================== INITIAL STATE
const initialState = {
    items: [],
};

// ================== SELECTORS
export const getItems = state => state.contacts.items;

// ================== ASYNC OPERATIONS
export const getAllContactsAsync = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewContactAsync = createAsyncThunk(
  'contacts/addContacts',
  async (contact) => {
    try {
      await fetchAddContact(contact);
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await fetchDeleteContact(id);
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editContactAsync = createAsyncThunk(
  'contacts/editContact',
  async (contact) => {
    try {
      await fetchEditContact(contact);
      const data = fetchAllContacts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// ================== REDUSER
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