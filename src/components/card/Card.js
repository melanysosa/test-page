import React from 'react'

const Card = ({src,className,alt}) => {
  return (
		<div>
			<div >
				<img
					src={src}
					alt={alt}
					className={className}
				/>
			</div>
		</div>
  );
}

export default Card