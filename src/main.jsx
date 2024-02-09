import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import './index.css'
import Blue from './pages/Blue.jsx'
import Red from './pages/Red.jsx'
import Index from './pages/Index.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: '/red',
				element: <Red />,
			},
			{
				path: '/blue',
				element: <Blue />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
