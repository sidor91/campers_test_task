import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./campersOps";

const handlePending = (state) => {
	state.loading = true;
	state.error = null;
};

const handleRejected = (state, action) => {
	state.loading = false;
	state.error = action.payload;
	state.items = [];
};

const slice = createSlice({
	name: "campers",
	initialState: {
		total: 0,
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
				const { append } = action.meta.arg;
				if (append) {
					state.items.push(...action.payload.items);
				} else {
					state.items = action.payload.items;
				}
				state.total = action.payload.total;
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
export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const getTotal = (state) => state.campers.total;

// actions
export const { toggleFavorite } = slice.actions;

export default slice.reducer;
