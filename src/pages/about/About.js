import React from 'react';
import Card from '../../components/card/Card';

const About = () => {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 md:p-8 gap-8 m-5'>
				<div>
					<p className='text-lg font-bold mb-4 text-solid'>
						Cnsectatur adipiscing elit.
					</p>
					<p className='text-sm mb-2 font-semibold'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id. Vitae congue
						mauris rhoncus aenean vel elit scelerisque mauris. Est sit
						amet facilisis magna etiam tempor orci eu lobortis. Lacus vel
						facilisis volutpat est..
					</p>

					<p className='text-sm mb-2 font-semibold'>
						{' '}
						Lacus luctus accumsan tortor posuere ac. Eget nunc lobortis
						mattis aliquam faucibus purus in. Tempus egestas sed sed risus
						pretium quam. Lorem ipsum dolor sit amet. Bibendum neque
						egestas congue quisque egestas diam. Velit egestas dui id
						ornare arcu. Id volutpat lacus laoreet non curabitur gravida
						arcu ac tortor.{' '}
					</p>

					<p className='text-sm pb-2 font-semibold'>
						{' '}
						Mi tempus imperdiet nulla malesuada pellentesque elit. Nunc
						lobortis mattis aliquam faucibus purus in massa. Adipiscing
						tristique risus nec feugiat in fermentum posuere urna. Mi
						tempus imperdiet nulla malesuada pellentesque elit eget
						gravida. Arcu non sodales neque sodales. Aenean sed adipiscing
						diam donec
					</p>
				</div>
				<Card
					src={
						'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg'
					}
					className={'h-96 object-cover w-full'}
				/>
			</div>
		</div>
	);
};

export default About;
