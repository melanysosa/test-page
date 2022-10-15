import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	const toTerms = () => navigate('/terms');
	const toPrivacy = () => navigate('/privacy');
	const toCookies = () => navigate('/cookies');
	return (
		<div className='footer-page h-0  text-white flex flex-col md:flex-row p-12 sm:justify-between '>
			<div className='flex flex-col items-center md:items-start'>
				<p className='flex w-32 md:w-1 py-4 text-xl'>
					ASSEMBLE'S TEST PAGE
				</p>
				<p>Philadelphia, Pensylvania</p>
				<p>+1 (000) 000 000</p>
				<p>contact@assemblestudio.com</p>
			</div>
			<div className='flex flex-col justify-end'>
				<div>
					<ul className='flex items-center md:flex-row flex-col justify-end mb-6 pl-8 md:px-0'>
						<li onClick={toTerms} className='mx-2 '>
							Terms of use
							<span className=' md:visible invisible pl-2'>|</span>
						</li>

						<li onClick={toPrivacy} className='mx-2 '>
							Privacy policy
							<span className=' md:visible invisible pl-2'>|</span>
						</li>

						<li onClick={toCookies} className='mx-2 pr-6 '>
							Cookies
						</li>
					</ul>
				</div>
				<div>
					<p className=' flex pl-10 items-center sm:flex-row flex-col justify-end text-xs py-2 pr-6'>
						Assemble & Partners, Digital Production Studio ©2022
						Copyright, All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
