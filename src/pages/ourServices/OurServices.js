import React from 'react';
import Accordion from '../../components/accordion/Accordion';

const OurServices = () => {
	const info = [
		{
			id: 1,
			title: 'Labore et dolore',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			id: 2,
			title: 'Cayus et Macena',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.',
		},
		{
			id: 3,
			title: 'Gravitas atsequim',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus. Eget nulla facilisi etiam dignissim diam quis enim lobortis.',
		},
	];
	return (
		<div className='m-4 md:p-8 '>
			<div>
				<p className='text-lg font-bold mb-4 '>Our Services</p>
			</div>
			<div>
				<p className='text-sm my-4 font-semibold'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
					non diam phasellus vestibulum lorem sed risus. Eget nulla
					facilisi etiam dignissim diam quis enim lobortis. Purus in massa
					tempor nec feugiat nisl pretium fusce id.
				</p>
			</div>
			<div className='py-14'>
				{info.map((accordion) => {
					return <Accordion key={accordion.id} {...accordion} />;
				})}
			</div>
		</div>
	);
};

export default OurServices;
