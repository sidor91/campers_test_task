import { configureStore } from '@reduxjs/toolkit';
import campersReducer from "./campersSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
	reducer: {
		contacts: campersReducer,
		filters: filtersReducer,
	},
});