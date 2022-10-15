import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import RouterApp from './routes/RouterApp';

function App() {
	return (
		<div className='tracking-widest'>
			<NavBar />
			<RouterApp />
			<Footer />
		</div>
	);
}

export default App;
