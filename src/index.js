//import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import './style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	{/* //<StrictMode> */}
			<App />
	{/* //</StrictMode> */}
	</BrowserRouter>
	

);