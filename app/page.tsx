import Navbar from '@/components/Navbar';
import CountryTable from '@/components/CountryTable';

export default async function Home() {
	return (
		<>
			<Navbar />
			<div className="flex-start flex-col my-28 md:mx-[96px]">
				<CountryTable />
			</div>
		</>
	);
}
