'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { RootState, AppDispatch } from '@/redux/store';
import { setSearch } from '@/redux/action/searchSlice';
import { countryApi } from '@/redux/action/getCountries';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Navbar = () => {
	const dispatch = useAppDispatch();
	const search = useAppSelector((state) => state.search.search);

	useEffect(() => {
		dispatch(countryApi.endpoints.search.initiate(search));
	}, [dispatch, search]);
	return (
		<>
			<div className="fixed top-0 z-40 flex md:items-center items-start w-full md:h-24 h-16 bg-white  md:gap-4 md:bg-[#1e293b] md:bg-opacity-70 md:backdrop-filter md:backdrop-blur-md md:px-14 ">
				<button className="hidden md:block">
					<div className="flex items-center w-full gap-x-2">
						<p className="mr-8 text-sm font-semibold text-white whitespace-nowrap">LIST COUNTRIES</p>
					</div>
				</button>

				<div className="flex flex-col justify-center w-full h-full gap-2 py-4">
					{/* searchbox deskop*/}
					<div className="px-4 hidden md:block">
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="absolute z-10 flex items-center justify-center ml-3 translate-y-2">
								<svg
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.2322 12.0639L17.9904 16.8221C18.1576 16.9895 18.2515 17.2164 18.2514 17.453C18.2513 17.6896 18.1573 17.9165 17.9899 18.0838C17.8226 18.251 17.5956 18.3449 17.359 18.3448C17.1224 18.3447 16.8955 18.2507 16.7283 18.0833L11.9701 13.3251C10.5477 14.4268 8.75901 14.9453 6.96792 14.775C5.17683 14.6047 3.51788 13.7585 2.32856 12.4085C1.13923 11.0585 0.508865 9.30615 0.565699 7.50788C0.622533 5.70961 1.3623 4.00054 2.6345 2.72834C3.9067 1.45614 5.61577 0.716374 7.41404 0.65954C9.21231 0.602706 10.9647 1.23307 12.3147 2.4224C13.6647 3.61172 14.5109 5.27067 14.6812 7.06176C14.8514 8.85285 14.333 10.6415 13.2313 12.0639H13.2322ZM7.6382 13.0377C9.04558 13.0377 10.3953 12.4786 11.3905 11.4834C12.3857 10.4883 12.9447 9.13854 12.9447 7.73116C12.9447 6.32378 12.3857 4.97404 11.3905 3.97887C10.3953 2.9837 9.04558 2.42462 7.6382 2.42462C6.23082 2.42462 4.88108 2.9837 3.88591 3.97887C2.89075 4.97404 2.33167 6.32378 2.33167 7.73116C2.33167 9.13854 2.89075 10.4883 3.88591 11.4834C4.88108 12.4786 6.23082 13.0377 7.6382 13.0377Z"
										fill="#AEAEAE"
									/>
								</svg>
							</div>
							<input
								className="p-2 w-full bg-[#F2F2F2] rounded-full pl-10 items-center focus:outline-none text-xs md:text-sm"
								placeholder="countries, city..."
								type="text"
								value={search}
								onChange={(e) => dispatch(setSearch(e.target.value))}
							/>
						</form>
					</div>
				</div>
				{/* end search box */}

				<div className="hidden md:h-6 md:border-r md:border-white" />
			</div>
		</>
	);
};

export default Navbar;
