import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { getApi } from '../../services/getApi';
import useStyles from './useStyles'

const OurWork = () => {
	const styles = useStyles();
	const [montains, setMontains] = useState();
	const fetchApi = () => {
		getApi().then((montains) => setMontains(montains));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<div className='md:m-7'>
			<div className={styles.containerInfoOurWork}>
				<div>
					<p className={styles.titleOurWork}>Our Work</p>
				</div>
				<div>
					<p className={styles.infoOurWork}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className={styles.galeryOurWork}>
				{!montains
					? 'Loading...'
					: montains.map((montain, id) => {
							return (
								<Card
									key={id}
									src={montain.image}
									className={styles.cardOurWork}
								/>
							);
					  })}
			</div>
		</div>
	);
};

export default OurWork;
