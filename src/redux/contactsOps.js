import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
	try {
		const { data } = await api.getAllContacts();
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
	try {
		const { data } = await api.addContact(newContact);
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
	try {
		await api.deleteContact(contactId);
		return contactId;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
