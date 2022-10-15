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
					Lorem ipsum dolor sit amet consectetur adipiscing elit ante
					faucibus, vel eleifend facilisi interdum ultrices consequat
					congue montes nec fringilla, fermentum penatibus netus nam orci
					magnis bibendum parturient. Laoreet mollis sodales morbi
					fringilla blandit eget porta, nam ullamcorper faucibus mauris
					ridiculus aptent, nulla montes felis enim ante fames. In luctus
					at inceptos urna nunc tellus metus, neque parturient condimentum
					habitant tincidunt conubia. Torquent libero aptent massa
					fermentum curabitur malesuada placerat vulputate, nisl nibh
					luctus dapibus pellentesque donec viverra, class senectus quisque
					ultrices ut purus sollicitudin. Varius integer senectus non
					vulputate sollicitudin, eros iaculis et lectus. Porttitor risus
					placerat vestibulum sociis congue penatibus ullamcorper cras
					curae phasellus dapibus habitant, quam lacinia pulvinar est in
					vivamus libero vel facilisi litora ut, blandit nec enim proin
					auctor diam cum nisi eleifend dictumst urna.
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
						facilisi etiam dignissim diam quis enim lobortis. Purus in
						massa tempor nec feugiat nisl pretium fusce id. Vitae congue
						mauris rhoncus aenean vel elit scelerisque mauris. Est sit
						amet facilisis magna etiam tempor orci eu lobortis. Lacus vel
						facilisis volutpat est..
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
						lobortis mattis aliquam faucibus purus in massa. Adipiscing
						tristique risus nec feugiat in fermentum posuere urna. Mi
						tempus imperdiet nulla malesuada pellentesque elit eget
						gravida. Arcu non sodales neque sodales. Aenean sed adipiscing
						diam donec
					</p>
				</div>
				<Card src={photo4} className={styles.cardHome2} />
			</div>
		</div>
	);
};

export default Home;
