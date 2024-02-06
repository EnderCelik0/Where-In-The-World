export default function CountryCard() {
	return (
		<div className=' flex flex-col shadow-lg w-80 rounded-md'>
			<div className='rounded-t-md'>
				<img
					className='rounded-t-md'
					src='https://flagcdn.com/w320/lt.png'
					alt='https://flagcdn.com/w320/lt.png'
				/>
			</div>
			<div className='p-4'>
				<h1 className='text-xl font-bold mb-4'>Lithuania</h1>
				<div className='flex flex-col gap-1'>
					<div className='flex gap-1'>
						<p className='font-[600]'>Population: </p>
						<p>2,553,900</p>
					</div>
					<div className='flex gap-1'>
						<p className='font-[600]'>Region: </p>
						<p>Europe</p>
					</div>
					<div className='flex gap-1'>
						<p className='font-[600]'>Capital: </p>
						<p>Vilnius</p>
					</div>
				</div>
			</div>
		</div>
	);
}
