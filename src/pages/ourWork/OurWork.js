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
			<div className='grid grid-cols-3 gap-8'>
				{!montains
					? 'Loading...'
					: montains.map((montain, index) => {
							return (
								<div key={index}>
									<h1>{montain.title}</h1>
									<img src={montain.image} alt='montain' />
									<p>{montain.description}</p>
								</div>
							);
					})}
			</div>
		</div>
	);
};

export default OurWork;
