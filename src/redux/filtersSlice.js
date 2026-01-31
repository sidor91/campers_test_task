import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	locationFilter: "",
	featureFilters: [],
	vehicleTypeFilters: [],
	page: 1,
	limit: 10,
};

const slice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		searchByFilters: (state, action) => {
			const { locationFilter, featureFilters, vehicleTypeFilters } = action.payload;
			state.locationFilter = locationFilter;
			state.featureFilters = featureFilters;
			state.vehicleTypeFilters = vehicleTypeFilters;
			state.page = initialState.page;
			state.limit = initialState.limit;
		},
		nextPage: (state) => {
			state.page += 1;
		},
	},
});

// action
export const { searchByFilters, nextPage } = slice.actions;

// selector
export const selectedFilters = (state) => state.filters;

// reducer
export default slice.reducer;