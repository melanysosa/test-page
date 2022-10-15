import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import OurServices from '../pages/ourServices/OurServices'
import OurWork from '../pages/ourWork/OurWork';


const RouterApp = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/ourServices' element={<OurServices />} />
				<Route path='/ourWork' element={<OurWork />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</div>
	);
};

export default RouterApp;
