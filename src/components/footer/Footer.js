import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './useStyles'

const Footer = () => {
	const navigate = useNavigate();
	const styles= useStyles();
	const toTerms = () => navigate('/terms');
	const toPrivacy = () => navigate('/privacy');
	const toCookies = () => navigate('/cookies');
	return (
		<div className={styles.containerFooter}>
			<div className={styles.containerFooterContact}>
				<p className={styles.titleFooter}>ASSEMBLE'S TEST PAGE</p>
				<p>Philadelphia, Pensylvania</p>
				<p>+1 (000) 000 000</p>
				<p>contact@assemblestudio.com</p>
			</div>
			<div className={styles.containerTerms}>
				<div>
					<ul className={styles.containerUlTerms}>
						<li onClick={toTerms} className={styles.liTerms}>
							Terms of use
							<span className={styles.spanTerms}>|</span>
						</li>

						<li onClick={toPrivacy} className={styles.liTerms}>
							Privacy policy
							<span className={styles.spanTerms}>|</span>
						</li>

						<li onClick={toCookies} className={styles.liTerms +`pr-6`}>
							Cookies
						</li>
					</ul>
				</div>
				<div>
					<p className={styles.copyRightFooter}>
						Assemble & Partners, Digital Production Studio ©2022
						Copyright, All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
