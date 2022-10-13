import React from 'react';

const About = () => {
	return (
		<div className='grid grid-cols-2 p-12 gap-8'>
			<div>
				<p className='text-lg font-bold mb-4'>About</p>
				<p className='text-sm mb-2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
					non diam phasellus vestibulum lorem sed risus. Eget nulla
					facilisi etiam dignissim diam quis enim lobortis. Purus in massa
					tempor nec feugiat nisl pretium fusce id. Vitae congue mauris
					rhoncus aenean vel elit scelerisque mauris. Est sit amet
					facilisis magna etiam tempor orci eu lobortis. Lacus vel
					facilisis volutpat est..
				</p>

				<p className='text-sm mb-2'>
					{' '}
					Lacus luctus accumsan tortor posuere ac. Eget nunc lobortis
					mattis aliquam faucibus purus in. Tempus egestas sed sed risus
					pretium quam. Lorem ipsum dolor sit amet. Bibendum neque egestas
					congue quisque egestas diam. Velit egestas dui id ornare arcu. Id
					volutpat lacus laoreet non curabitur gravida arcu ac tortor.{' '}
				</p>

				<p className='text-sm'>
					{' '}
					Mi tempus imperdiet nulla malesuada pellentesque elit. Nunc
					lobortis mattis aliquam faucibus purus in massa. Adipiscing
					tristique risus nec feugiat in fermentum posuere urna. Mi tempus
					imperdiet nulla malesuada pellentesque elit eget gravida. Arcu
					non sodales neque sodales. Aenean sed adipiscing diam donec
				</p>
			</div>
			<div>
				<img
					src='https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg'
					alt='img'
				/>
			</div>
		</div>
	);
};

export default About;
