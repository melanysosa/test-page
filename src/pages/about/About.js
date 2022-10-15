import React from 'react';
import Card from '../../components/card/Card';
import photo5 from '../../assets/photo5.jpg'
import useStyles from './useStyles'

const About = () => {
	const styles= useStyles();

	return (
		
			<div className={styles.containerAbout}>
				<div>
					<p className={styles.titleAbout}>
						About
					</p>
					<p className={styles.infoAbout}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id. 
					</p>

					<p className={styles.infoAbout}>
						{' '}
						Lacus luctus accumsan tortor posuere ac. Eget nunc lobortis
						mattis aliquam faucibus purus in. Tempus egestas sed sed risus
						pretium quam. Lorem ipsum dolor sit amet. Bibendum neque
						egestas congue quisque egestas diam. Velit egestas dui id
						ornare arcu. {' '}
					</p>

					<p className={styles.infoAbout}>
						{' '}
						Mi tempus imperdiet nulla malesuada pellentesque elit. Nunc
						lobortis mattis aliquam faucibus purus in massa. Adipiscing
						tristique risus nec feugiat in fermentum posuere urna. Mi
						tempus imperdiet nulla malesuada pellentesque elit eget
						gravida. 
					</p>
				</div>
				<Card
					src={photo5}
					className={styles.cardAbout}
				/>
			</div>
		
	);
};

export default About;
