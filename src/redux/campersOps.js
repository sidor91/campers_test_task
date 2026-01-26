import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
	try {
		const { data } = await api.getAllCampers();
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getCamperById = createAsyncThunk("campers/getCamperById", async (id, thunkAPI) => {
	try {
		const { data } = await api.getCamperById(id);
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
