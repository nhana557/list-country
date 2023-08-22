import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CountryData } from '@/types';

export interface SearchState {
	search: string;
	startupCountry: CountryData[];
}

const initialState: SearchState = {
	search: '',
	startupCountry: [],
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setStartupCountry: (state, action: PayloadAction<CountryData[]>) => {
			state.startupCountry = action.payload;
		},
	},
});

export const { setSearch, setStartupCountry } = searchSlice.actions;
export default searchSlice.reducer;
