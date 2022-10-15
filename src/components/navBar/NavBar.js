import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const NavBar = () => {
	const navigate = useNavigate();
	const toHome = () => navigate('/');
	const toAbout = () => navigate('/about');
	const toOurWork = () => navigate('/ourWork');
	const toOurServices = () => navigate('/ourServices');

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='header-nav flex justify-between items-start text-white top-0 md:p-12  py-3 px-4 tracking-widest '>
			<p onClick={toHome} className=' flex w-1 cursor-pointer text-3xl'>
				ASSEMBLE'S TEST PAGE
			</p>
			<div className='flex items-center'>
				<ul className=' justify-end  hidden md:flex  text-white  text-lg'>
					<li onClick={toAbout} className='mx-2 cursor-pointer'>
						ABOUT |
					</li>

					<li onClick={toOurWork} className='mx-2 cursor-pointer'>
						OUR WORK |
					</li>

					<li onClick={toOurServices} className='mx-2 cursor-pointer'>
						OUR SERVICES
					</li>
				</ul>
			</div>
			{/** Hamburguer */}
			{!nav ? (
				<div onClick={handleClick} className='md:hidden '>
					<FaBars className='text-4xl' />
				</div>
			) : (
				<div className='nav-mobile' onClick={handleClick}>
					<ul className='md:hidden  top-0 left-0 w-full h-screen  flex flex-col   navbar-mobileBg fixed py-0 px-4 '>
						<div className='flex justify-between w-full py-5 mb-20'>
							<li
								onClick={toHome}
								className=' flex w-1  cursor-pointer text-3xl'
							>
								ASSEMBLE'S TEST PAGE
							</li>
							<FiX className='text-4xl' />
						</div>

						<li
							onClick={toAbout}
							className='mb-6 cursor-pointer py-6 text-3xl'
						>
							ABOUT
						</li>

						<li
							onClick={toOurWork}
							className='mb-6 cursor-pointer py-6 text-3xl'
						>
							OUR WORK
						</li>

						<li
							onClick={toOurServices}
							className=' cursor-pointer py-6 text-3xl'
						>
							OUR SERVICES
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
