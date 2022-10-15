import React from 'react';
import Card from '../../components/card/Card';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';
import useStyles from './useStyles';

const Home = () => {
	const styles = useStyles();
	return (
		<div className={styles.containerHome}>
			<div className={styles.containerPart1}>
				<p className={styles.titleHome}>
					Lorem ipsum dolor sit
					<span className={styles.spantitle}> amet.</span>
				</p>
				<p className={styles.infoHome1}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
					non diam phasellus vestibulum lorem sed risus. Eget nulla
					facilisi etiam dignissim diam quis enim lobortis. Purus in massa
					tempor nec feugiat nisl pretium fusce id. Vitae congue mauris
					rhoncus aenean vel elit scelerisque mauris. Mi tempus imperdiet
					nulla malesuada pellentesque elit.
				</p>
				<div className={styles.containerCards}>
					<Card src={photo1} className={styles.cardHome} />
					<Card src={photo2} className={styles.cardHome} />
					<Card src={photo3} className={styles.cardHome} />
				</div>
			</div>
			<div className={styles.containerPart2}>
				<div className={styles.containerInfoHome2}>
					<p className={styles.titleHome2}>Cnsectatur adipiscing elit.</p>
					<p className={styles.infoHome2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Eu non diam phasellus vestibulum lorem sed risus. Eget nulla
						facilisi etiam dignissim diam quis enim lobortis.
					</p>

					<p className={styles.infoHome2}>
						{' '}
						Lacus luctus accumsan tortor posuere ac. Eget nunc lobortis
						mattis aliquam faucibus purus in. Tempus egestas sed sed risus
						pretium quam. Lorem ipsum dolor sit amet. Bibendum neque
						egestas congue quisque egestas diam. Velit egestas dui id
						ornare arcu. Id volutpat lacus laoreet non curabitur gravida
						arcu ac tortor.{' '}
					</p>

					<p className={styles.infoHome2}>
						{' '}
						Mi tempus imperdiet nulla malesuada pellentesque elit. Nunc
						lobortis mattis aliquam faucibus purus in massa. 
					</p>
				</div>
				<Card src={photo4} className={styles.cardHome2} />
			</div>
		</div>
	);
};

export default Home;
