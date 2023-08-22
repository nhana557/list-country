import { CountryData } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	try {
		const result = await fetch(process.env.NEXT_PUBLIC_API_URI || '');
		const name = searchParams.get('name');
		if (result.ok) {
			const data = await result.json();

			const countriesData = data.filter((country: CountryData) =>
				country.name.common.toLowerCase().includes(name?.toLowerCase() ?? ''),
			);

			return NextResponse.json(countriesData);
		}
	} catch (error) {
		return NextResponse.error();
	}
}
