import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path='/dashboard' element={<Dashboard/>}/>
					{/* futher route in development */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
