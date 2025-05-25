import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from '../../components/App/App.types';

const initialState: FiltersState = {
  filter: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
