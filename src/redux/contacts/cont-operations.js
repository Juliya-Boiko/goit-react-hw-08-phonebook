import { fetchAllContacts, fetchAddContact, fetchDeleteContact} from "api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContactsAsync = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllContacts();
      //console.log('Request all contacts answer:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContactAsync = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const data = fetchAddContact(contact);
      //console.log('ADD answer:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);