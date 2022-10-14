import React, { useEffect, useState } from 'react';
import { getApi } from '../../services/getApi';

const OurWork = () => {
	const [montains, setMontains] = useState();
	const fetchApi = () => {
		getApi().then((montains) => setMontains(montains));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<div>
			<div className='m-12'>
				<div>
					<p className='text-lg font-bold mb-4 '>Our Work</p>
				</div>
				<div>
					<p className='text-sm my-4'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id.
					</p>
				</div>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1 m-12 justify-center items-center'>
				{!montains
					? 'Loading...'
					: montains.map((montain, index) => {
							return (
								<div key={index}>
									<img
										src={montain.image}
										alt='montain'
										className='h-60 object-cover w-96'
									/>
								</div>
							);
					})}
			</div>
		</div>
	);
};

export default OurWork;
