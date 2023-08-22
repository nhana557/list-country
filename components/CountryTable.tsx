'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { RootState, AppDispatch } from '@/redux/store';
import { countryApi } from '@/redux/action/getCountries';

import { CountryData } from '@/types';
import Card from './Card';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const CountryTable = () => {
	const dispatch = useAppDispatch();
	const search = useAppSelector((state) => state.search.search);
	const data = useAppSelector(
		(state) => state.countryApi.queries[`search("${search}")`]?.data as CountryData[],
	);
	useEffect(() => {
		dispatch(countryApi.endpoints.search.initiate(search));
	}, [dispatch, search]);
	return (
		<div className="w-full">
			{!data ? (
				<div className="text-white text-center">
					<h1>Loading</h1>
				</div>
			) : (
				<table className="table-auto w-full ">
					<thead className="text-center border-2 border-gray-500">
						<tr className="bg-gray-700 text-white ">
							<th>Flag</th>
							<th>name</th>
							<th>area</th>
							<th>population</th>
							<th>benua</th>
						</tr>
					</thead>
					<tbody className="text-center text-white border-2  border-gray-500">
						{data?.slice(0, 10).map((countrie: any, index) => (
							<Card
								item={countrie}
								i={index}
							/>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default CountryTable;
