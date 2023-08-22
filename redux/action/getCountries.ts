import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { CountryData } from '@/types';

export const countryApi = createApi({
	reducerPath: 'countryApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
	tagTypes: ['country'],
	endpoints: (builder) => ({
		search: builder.query<CountryData[], string>({
			query: (q) => `search?name=${q}`,
			providesTags: (result, error, search) => [{ type: 'country', search }],
		}),
	}),
});
