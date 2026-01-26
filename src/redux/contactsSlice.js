import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
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
	name: "contacts",
	initialState: {
		items: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			// fetchContacts
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, handleRejected)

			// addContact
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(action.payload);
			})
			.addCase(addContact.rejected, handleRejected)

			// deleteContact
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.loading = false;
				state.items = state.items.filter((contact) => contact.id !== action.payload);
			})
			.addCase(deleteContact.rejected, handleRejected);
	},
});

// selectors
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, nameFilter) =>
	contacts.filter((contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase())),
);

export default slice.reducer;