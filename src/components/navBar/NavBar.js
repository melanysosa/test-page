import React from 'react';
import {useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();
	const toHome = () => navigate('/');
	const toAbout = () => navigate('/about');
	const toOurWork = () => navigate('/ourWork');
	const toOurServices = () => navigate('/ourServices');

	return (
		<div className='header-nav h-0 w-full text-white grid grid-cols-2 p-12 tracking-widest '>
			<label onClick={toHome} className=' flex w-1 text-xl'>
				ASSEMBLE'S TEST PAGE
			</label>
			<ul className='flex justify-end '>
				<li onClick={toAbout} className='mx-2 '>
					ABOUT |
				</li>

				<li onClick={toOurWork} className='mx-2 '>
					OUR WORK |
				</li>

				<li onClick={toOurServices} className='mx-2 '>
					OUR SERVICES
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
