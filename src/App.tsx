import Navbar from './components/Navbar/navbar.jsx';
import SearchInput from './components/InputFilter/search-input';
import FilterRegion from './components/InputFilter/filter-region-dropdown';
import CountryCard from './components/Country/country-card.jsx';
import CountryDetails from './components/Country/country-details.jsx';

function App() {
	return (
		<main className='flex flex-col gap-14 w-screen '>
			<Navbar />
			<div className='flex flex-col w-screen '>
				{/* <div className='flex w-screen justify-between px-24 mb-14'>
					<SearchInput />
					<FilterRegion />
				</div> */}
				<div className=' px-24'>
					{/* <CountryCard /> */}
					<CountryDetails />
				</div>
			</div>
		</main>
	);
}

export default App;
