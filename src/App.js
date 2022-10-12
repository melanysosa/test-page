import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import RouterApp from './RouterApp';

function App() {
	return (
		<div>
			<NavBar/>
			<RouterApp/>
			<Footer/>
		</div>
	);
}

export default App;
