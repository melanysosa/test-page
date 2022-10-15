import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useStyle from './useStyles';

const Accordion = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);
	const onClickInfo = () => setShowInfo(!showInfo);
	const style = useStyle();
	return (
		<div className={style.containerAccordion}>
			<div className={style.containerTitleButton}>
				<p className={style.titleAccordion}>{title}</p>
				<button  onClick={onClickInfo}>
					{showInfo ? (
						<AiOutlineMinus className={style.buttonAccordion} />
					) : (
						<AiOutlinePlus className={style.buttonAccordion} />
					)}
				</button>
			</div>
			{showInfo && <p className={style.infoAccordion}>{info}</p>}
		</div>
	);
};

export default Accordion;
