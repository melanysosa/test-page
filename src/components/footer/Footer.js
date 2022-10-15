import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	const toTerms = () => navigate('/terms');
	const toPrivacy = () => navigate('/privacy');
	const toCookies = () => navigate('/cookies');
	return (
		<div className='footer-page h-0  text-white flex flex-col sm:flex-row p-12 sm:justify-between tracking-widest '>
			<div className='flex flex-col items-center sm:items-start'>
				<p className='flex w-32 sm:w-1 py-4 text-xl'>
					ASSEMBLE'S TEST PAGE
				</p>
				<p>Philadelphia, Pensylvania</p>
				<p>+1 (000) 000 000</p>
				<p>contact@assemblestudio.com</p>
			</div>
			<div className='flex flex-col justify-end'>
				<div>
					<ul className='flex items-center md:flex-row flex-col justify-end mb-6'>
						<li onClick={toTerms} className='mx-2 '>
							Terms of use |
						</li>

						<li onClick={toPrivacy} className='mx-2 '>
							Privacy policy |
						</li>

						<li onClick={toCookies} className='mx-2 '>
							Cookies
						</li>
					</ul>
				</div>
				<div>
					<p className=' flex px-10 items-center sm:flex-row flex-col justify-end text-xs py-2'>
						Assemble & Partners, Digital Production Studio ©2022
						Copyright, All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
