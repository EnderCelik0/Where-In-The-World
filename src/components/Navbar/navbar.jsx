import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Navbar() {
	return (
		<nav className='w-screen'>
			<div className='flex items-center justify-between py-6 px-24 shadow-md '>
				<h1 className='font-extrabold text-3xl'>Where in the world?</h1>

				<div className='cursor-pointer'>
					<div className='flex items-center gap-2 font-extrabold text-lg'>
						<MdOutlineDarkMode className='text-2xl' />
						Dark Mode
					</div>
				</div>
			</div>
		</nav>
	);
}
