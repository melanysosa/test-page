import React, { useState } from 'react';
import{AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

const Accordion = ({title,info}) => {
    const [showInfo,setShowInfo]=useState(false);
  return (
		<div className='border-b-2 pb-3 border-[#B9A1BB]'>
			<div className='flex justify-between items-center my-4'>
				<p className=' sm:p-0 font-bold'>{title}</p>
				<button className='flex ' onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? (
						<AiOutlineMinus className='text-[#65076A] text-4xl flex ' />
					) : (
						<AiOutlinePlus className='	text-[#65076A] text-4xl' />
					)}
				</button>
			</div>
			{showInfo && <p className='md:px-6 py-2'>{info}</p>}
		</div>
  );
}

export default Accordion
