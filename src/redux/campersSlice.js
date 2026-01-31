import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./campersOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
	state.loading = true;
	state.error = null;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const slice = createSlice({
	name: "campers",
	initialState: {
		items: [],
		favorites: [],
		loading: false,
		error: null,
	},
	reducers: {
		toggleFavorite(state, action) {
			const id = action.payload;

			const index = state.favorites.indexOf(id);

			if (index === -1) {
				state.favorites.push(id);
			} else {
				state.favorites.splice(index, 1);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			// fetchCampers
			.addCase(fetchCampers.pending, handlePending)
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload.items;
			})
			.addCase(fetchCampers.rejected, handleRejected)

			// getCamperById
			.addCase(getCamperById.pending, handlePending)
			.addCase(getCamperById.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(getCamperById.rejected, handleRejected);
	},
});

// selectors
export const selectIsFavorite = (id) => (state) => state.campers.favorites.includes(id);
const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFilteredCampers = createSelector([selectCampers, selectNameFilter], (campers, nameFilter) =>
	campers.filter((camper) => camper.name.toLowerCase().includes(nameFilter.toLowerCase())),
);

// actions
export const { toggleFavorite } = slice.actions;

export default slice.reducer;
