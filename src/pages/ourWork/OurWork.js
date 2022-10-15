import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
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
			<div className='m-4 md:p-8'>
				<div>
					<p className='text-lg font-bold mb-4 '>Our Work</p>
				</div>
				<div>
					<p className='text-sm my-4 font-semibold'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id.
					</p>
				</div>
			</div>
			<div className='grid  grid-cols-1 gap-5 md:grid-cols-3 m-5 justify-center items-center'>
				{!montains
					? 'Loading...'
					: montains.map((montain, id) => {
							return (
								<Card
									key={id}
									src={montain.image}
									className={
										'h-80 w-full sm:h-60 object-cover md:w-96 '
									}
								/>
							);
					  })}
			</div>
		</div>
	);
};

export default OurWork;
