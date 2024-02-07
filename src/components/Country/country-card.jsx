export default function CountryCard({
	flag,
	countryName,
	population,
	region,
	capital,
}) {
	return (
		<div className=' flex flex-col shadow-lg w-80 rounded-md hover:shadow-2xl cursor-pointer'>
			<div className='rounded-t-md h-56'>
				<img
					className='rounded-t-md w-full h-full object-cover'
					src={flag}
					alt={flag}
				/>
			</div>
			<div className='p-4 pb-14'>
				<h1 className='text-xl font-bold mb-4'>{countryName}</h1>
				<div className='flex flex-col gap-1'>
					<div className='flex gap-1'>
						<p className='font-[600]'>Population: </p>
						<p>{population}</p>
					</div>
					<div className='flex gap-1'>
						<p className='font-[600]'>Region: </p>
						<p>{region}</p>
					</div>
					<div className='flex gap-1'>
						<p className='font-[600]'>Capital: </p>
						<p>{capital}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
