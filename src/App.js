import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About-page';
import Pricing from './components/Pricing-page';
import HomePage from './components/Home-page';
import './App.css';


function App() {
	return (	
	<Router>	
		<div>
		<Navbar />	
			
			
			<Switch>
				<Route path='/about' exact component={About} />
				<Route path='/pricing' exact component={Pricing} />
				<Route path='/' component={HomePage} />
				
			</Switch>	
		</div>

	</Router>		
	);
}

export default App;