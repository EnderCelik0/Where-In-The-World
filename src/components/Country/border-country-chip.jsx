export default function BorderCountryChip({ country }) {
	return (
		<div className='px-8 py-[2px] rounded-sm shadow-sm shadow-black transition-colors hover:text-white  hover:bg-black cursor-pointer'>
			{country}
		</div>
	);
}
