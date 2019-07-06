import React from 'react';
import Navbar from './components/Navbar';
import {HashRouter, Route, Switch} from 'react-router-dom';
import About from './components/About-page';
import Pricing from './components/Pricing-page';
import HomePage from './components/Home-page';
import './App.css';

function App() {
	return (	
	<HashRouter>	
		<Navbar />	
			
			
			<Switch>
				<Route path='/about' exact component={About} />
				<Route path='/pricing' exact component={Pricing} />
				<Route path='/' component={HomePage} />
			</Switch>	

	</HashRouter>		
	);
}

export default App;