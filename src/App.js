import React from 'react';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import About from './components/About-page';
import Pricing from './components/Pricing-page';
import HomePage from './components/Home-page';
import HotProduct from './components/Home-page/vetical-menu-components/hotProduct';
import ProductsbyPrice from './components/Home-page/vetical-menu-components/productsbyPrice';
import './App.css';


function App() {
	return (	
		<>
			<Navbar/>

			<Switch>	
				<Route exact path='/' component={HomePage} />	
				<Route exact path='/about'  component={About} />
				<Route exact path='/pricing'  component={Pricing} />
				<Route exact path="/hot"  component={HotProduct}/>			
				<Route exact path="/productsbyprice"  component={ProductsbyPrice}/>		
			</Switch>	
		</>	
	
	);
}

export default App;