import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import useStyles from './useStyles';

const NavBar = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const toHome = () => navigate('/');
	const toAbout = () => navigate('/about');
	const toOurWork = () => navigate('/ourWork');
	const toOurServices = () => navigate('/ourServices');

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className={styles.containerNav}>
			<p onClick={toHome} className={styles.titleNav}>
				ASSEMBLE'S TEST PAGE
			</p>
			<div className={styles.containerMenu}>
				<ul className={styles.ulMenu}>
					<li onClick={toAbout} className={styles.liMenu}>
						ABOUT |
					</li>

					<li onClick={toOurWork} className={styles.liMenu}>
						OUR WORK |
					</li>

					<li onClick={toOurServices} className={styles.liMenu}>
						OUR SERVICES
					</li>
				</ul>
			</div>
			{/** Hamburguer */}
			{!nav ? (
				<div onClick={handleClick} className={styles.containerFaBars}>
					<FaBars className={styles.faBars} />
				</div>
			) : (
				<div className='nav-mobile' onClick={handleClick}>
					<ul className={styles.containerMenuMobile}>
						<div className={styles.containerTitleMobile}>
							<li onClick={toHome} className={styles.titleMenuMobile}>
								ASSEMBLE'S TEST PAGE
							</li>
							<FiX className={styles.fix} />
						</div>

						<li onClick={toAbout} className={styles.itemMenuMobile}>
							ABOUT
						</li>

						<li onClick={toOurWork} className={styles.itemMenuMobile}>
							OUR WORK
						</li>

						<li onClick={toOurServices} className={styles.itemMenuMobile}>
							OUR SERVICES
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
