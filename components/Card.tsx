import Image from 'next/image';

const Card = ({ item, index }: any) => {
	return (
		<tr
			key={index}
			className=" border-b-2  border-gray-500"
		>
			<td className="py-3">
				<div className="relative w-[70px] h-14 left-10">
					<Image
						className="w-full rounded-md "
						src={item.flags.png || '/photo.jpg'}
						layout={'fill'}
						unoptimized={true}
						alt={item.flags.alt}
					/>
				</div>
			</td>
			<td>{item.name.common}</td>
			<td>{item.area}</td>
			<td>{item.population}</td>
			<td>{item.continents}</td>
		</tr>
	);
};

export default Card;
