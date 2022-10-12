import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
		<div className='header h-96 text-white'>
			<Link to='/'>
				<label className='my-6'>ASSEMBLE'S TEST PAGE </label>
			</Link>
			<ul className='flex justify-end  m-6 mx-12'>
				<Link to='/about'>
					<li className='mx-2 tracking-widest'>ABOUT |</li>
				</Link>
				<Link to='/ourWork'>
					<li className='mx-2 tracking-widest'>OUR WORK |</li>
				</Link>
				<Link to='/ourServices'>
					<li className='mx-2 tracking-widest'>OUR SERVICES </li>
				</Link>
			</ul>
		</div>
  );
}

export default NavBar