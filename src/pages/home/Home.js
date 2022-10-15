import React from 'react'
import Card from '../../components/card/Card';

const Home = () => {
  return (
		<div className='grid grid-cols-1 '>
			<div className='sm:p-8'>
			<p className='flex justify-center text-xl font-bold m-6'>
				Lorem ipsum dolor sit amet.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing elit ante
				faucibus, vel eleifend facilisi interdum ultrices consequat congue
				montes nec fringilla, fermentum penatibus netus nam orci magnis
				bibendum parturient. Laoreet mollis sodales morbi fringilla blandit
				eget porta, nam ullamcorper faucibus mauris ridiculus aptent, nulla
				montes felis enim ante fames. In luctus at inceptos urna nunc tellus
				metus, neque parturient condimentum habitant tincidunt conubia.
				Torquent libero aptent massa fermentum curabitur malesuada placerat
				vulputate, nisl nibh luctus dapibus pellentesque donec viverra,
				class senectus quisque ultrices ut purus sollicitudin. Varius
				integer senectus non vulputate sollicitudin, eros iaculis et lectus.
				Porttitor risus placerat vestibulum sociis congue penatibus
				ullamcorper cras curae phasellus dapibus habitant, quam lacinia
				pulvinar est in vivamus libero vel facilisi litora ut, blandit nec
				enim proin auctor diam cum nisi eleifend dictumst urna.
			</p>
			<div className='grid  grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 my-3 justify-center items-center'>
				<Card
					src={
						'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aconcagua2016.jpg/600px-Aconcagua2016.jpg'
					}
					className={'h-60 object-cover w-96'}
				/>
				<Card
					src={
						'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/600px-Wonder_Lake_and_Denali.jpg'
					}
					className={'h-60 object-cover w-96'}
				/>
				<Card
					src={
						'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mont-Blanc_from_Planpraz_station.jpg/600px-Mont-Blanc_from_Planpraz_station.jpg'
					}
					className={'h-60 object-cover w-96'}
				/>
			</div>
			</div>
			<div className='grid  grid-cols-1 md:grid-cols-2 sm:p-8 '>
				<div>
					<p className='text-lg font-bold mb-4 text-solid'>
						Cnsectatur adipiscing elit.
					</p>
					<p className='text-sm mb-2'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id. Vitae congue
						mauris rhoncus aenean vel elit scelerisque mauris. Est sit
						amet facilisis magna etiam tempor orci eu lobortis. Lacus vel
						facilisis volutpat est..
					</p>

					<p className='text-sm mb-2'>
						{' '}
						Lacus luctus accumsan tortor posuere ac. Eget nunc lobortis
						mattis aliquam faucibus purus in. Tempus egestas sed sed risus
						pretium quam. Lorem ipsum dolor sit amet. Bibendum neque
						egestas congue quisque egestas diam. Velit egestas dui id
						ornare arcu. Id volutpat lacus laoreet non curabitur gravida
						arcu ac tortor.{' '}
					</p>

					<p className='text-sm'>
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
					className={'h-80 object-cover w-full'}
				/>
			</div>
		</div>
  );
}

export default Home