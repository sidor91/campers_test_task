import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./campersOps";
import { selectNameFilter } from './filtersSlice';

const handlePending = (state) => {
  state.loading = true;
	state.error = null;
}

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const slice = createSlice({
	name: "campers",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			// fetchCampers
			.addCase(fetchCampers.pending, handlePending)
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchCampers.rejected, handleRejected)

			// getCamperById
			.addCase(getCamperById.pending, handlePending)
			.addCase(getCamperById.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(getCamperById.rejected, handleRejected)
	},
});

// selectors
export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector([selectCampers, selectNameFilter], (campers, nameFilter) =>
	campers.filter((camper) => camper.name.toLowerCase().includes(nameFilter.toLowerCase())),
);

export default slice.reducer;