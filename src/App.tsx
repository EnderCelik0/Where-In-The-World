import Navbar from './components/Navbar/navbar.jsx';
import SearchInput from './components/InputFilter/search-input';
import FilterRegion from './components/InputFilter/filter-region-dropdown';
import CountryCard from './components/Country/country-card.jsx';
import CountryDetails from './components/Country/country-details.jsx';
import { useEffect, useState } from 'react';

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
			const res = await fetch('https://restcountries.com/v3.1/all');
			const data = await res.json();
			setCountries(data);
		};
		fetchCountries();
	});

	return (
		<main className='flex flex-col gap-14 w-screen '>
			<Navbar />
			<div className='flex flex-col w-screen '>
				<div className='flex w-screen justify-between px-24 mb-14'>
					<SearchInput />
					<FilterRegion />
				</div>
				<div className=' px-24'>
					<div className='flex flex-wrap justify-between gap-10 '>
						{countries.map((country, index) => (
							<CountryCard
								key={index}
								countryName={country.name.common}
								name={country.name.common}
								population={country.population}
								region={country.region}
								capital={country.capital}
								flag={country.flags.png}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
