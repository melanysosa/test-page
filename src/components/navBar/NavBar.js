import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
		<div className='header h-96 text-white'>
			<ul className='flex justify-end p-3'>
				<Link to='/'>
					<li className=''>Home | </li>
				</Link>
				<Link to='/about'>
					<li>About</li>
				</Link>
				<Link to='/ourServices'>
					<li>Our Services</li>
				</Link>
			</ul>
		</div>
  );
}

export default NavBar