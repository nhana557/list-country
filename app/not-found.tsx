import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex justify-center items-center w-full h-screen'>
			<div className='flex flex-col'>
				<div className='text-[#D63031] font-bold  text-center mt-5'>
					PAGE NOT FOUND
				</div>
				<div className='text-[#D63031] text-sm flex justify-center'>
					We will redirect you to the homepage
				</div>
				<div className='flex justify-center'>
					<Link href='/'>
						<button className='bg-[#D63031] hover:bg-red-800 hover:duration-300 text-white text-sm rounded-md py-2 px-3 mt-5'>
							Kembali ke halaman utama
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
