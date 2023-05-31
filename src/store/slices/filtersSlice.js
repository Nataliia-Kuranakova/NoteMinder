import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    activeFilter: 'all',
    selectedFilterDscr: '',
    isSelectedFilter: false,
  },
  reducers: {
    filteredStickersList: (state, action) => {
      state.activeFilter = action.payload.value;
      state.selectedFilterDscr = action.payload.description;
      state.isSelectedFilter = true
    },
    deleteSelectedFilter: (state, action) => {
      state.isSelectedFilter = false;
      state.activeFilter = 'all'
    }
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { filteredStickersList, deleteSelectedFilter } = filtersSlice.actions;


