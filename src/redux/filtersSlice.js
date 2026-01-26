import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// action
export const { changeFilter } = slice.actions;

// selector
export const selectNameFilter = (state) => state.filters.name;

// reducer
export default slice.reducer;