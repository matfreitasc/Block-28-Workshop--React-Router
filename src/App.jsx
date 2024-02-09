import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
	return (
		<div id='container'>
			<h1 className='title'>Hello React Router!</h1>
			<div id='navbar'>
				<Link to='red' className='redLink'>
					Red
				</Link>
				<Link to='blue' className='blueLink'>
					Blue
				</Link>
				<Link to='/' className='homeLink'>
					Home
				</Link>
			</div>
			<div id='main-section'>
				<Outlet />
			</div>
		</div>
	)
}

export default App
