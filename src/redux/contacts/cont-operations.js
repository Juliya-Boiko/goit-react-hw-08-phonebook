import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact
} from "api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContactsAsync = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    try {
      const data = await fetchAllContacts();
      //console.log('Request all contacts answer:', data);
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
      //console.log('ADD answer:', data);
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
      //console.log('DELETE answer:', data);
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
      //console.log('EDIT answer:', data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);