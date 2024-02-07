import { FaArrowLeftLong } from 'react-icons/fa6';
import BorderCountryChip from './border-country-chip';

export default function CountryDetails() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='font-[600] flex items-center gap-3 shadow-lg shadow-[rgba(0,0,0,0.4)] max-w-36 justify-center rounded-md py-2 px-4 mb-14'>
				<FaArrowLeftLong />
				Back
			</div>
			<div className='flex gap-40'>
				<div>
					<img
						className='w-[650px] ull'
						src='https://flagcdn.com/w320/lt.png'
						alt='https://flagcdn.com/w320/lt.png'
					/>
				</div>
				<div className='flex flex-col gap-8'>
					<h1 className='text-4xl font-[600]'>Lithuania</h1>

					<div className='flex gap-32'>
						<div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col gap-4'>
									<div className='flex gap-2'>
										<span className='font-[600]'>Native Name:</span>
										<span>Lietuva</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Population:</span>
										<span>279,084</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Region:</span>
										<span>Europe</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Sub Region:</span>
										<span>Northern Europe</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Capital:</span>
										<span>Vilnius</span>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col gap-4'>
									<div className='flex gap-2'>
										<span className='font-[600]'>Top Level Domain:</span>
										<span>.lt</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Currencies:</span>
										<span>Euro</span>
									</div>
									<div className='flex gap-2'>
										<span className='font-[600]'>Languages:</span>
										<span>Lithuanian, English, Turkish</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='flex gap-2 items-center'>
							<span className='font-[600]'>Border Countries:</span>
							<span className='flex gap-2'>
								<BorderCountryChip country='Poland' />
								<BorderCountryChip country='Russia' />
								<BorderCountryChip country='Turkey' />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
