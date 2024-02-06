export default function FilterRegionDropdown() {
	const regions = [
		'Filter by Region',
		'Africa',
		'America',
		'Asia',
		'Europe',
		'Oceania',
	];

	return (
		<select className='p-4 font-[600] bg-white rounded-md shadow-md shadow-[rgba(0,0,0,.3)]'>
			{regions.map((region, index) => (
				<option
					className='font-[600]'
					key={index}
					value={region}
				>
					{region}
				</option>
			))}
		</select>
	);
}
