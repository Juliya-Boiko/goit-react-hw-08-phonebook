import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts,fetchAddContact } from "api/axios";

export const getAllContacts = createAsyncThunk(
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

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async (value, { rejectWithValue }) => {
      try {
        const data = fetchAddContact(value);
        //console.log('Request add contacts answer:', data);
        return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);