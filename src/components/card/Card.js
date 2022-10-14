import React from 'react'

const Card = ({src,className}) => {
  return (
		<div>
			<div >
				<img
					src={src}
					alt='montain'
					className={className}
				/>
			</div>
		</div>
  );
}

export default Card