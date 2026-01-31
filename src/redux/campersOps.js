import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
import { VehicleFeatureFilterMap } from "../components/CamperFeature";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (filters, thunkAPI) => {
	try {
		const { locationFilter, featureFilters, vehicleTypeFilters, page=1, limit=10 } = filters;
		const params = new URLSearchParams();
		params.append("page", page);
		params.append("limit", limit);

		if (locationFilter) params.append("location", locationFilter);

		if (featureFilters.length) {
			featureFilters.forEach((featureFilter) => params.append(featureFilter, VehicleFeatureFilterMap[featureFilter]));
		}

		if (vehicleTypeFilters.length) {
			vehicleTypeFilters.forEach((typeFilter) => params.append("form", typeFilter));
		}

		const { data } = await api.getAllCampers(params);
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
