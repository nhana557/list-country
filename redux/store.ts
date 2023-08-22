import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './action/searchSlice';
import { countryApi } from './action/getCountries';

export const store = configureStore({
	reducer: {
		search: searchReducer,
		countryApi: countryApi.reducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware({
			serializableCheck: false,
		}).concat(countryApi.middleware);
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
