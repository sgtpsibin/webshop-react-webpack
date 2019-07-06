import React, {Component} from 'react';
import VeticalMenu from './vetical-menu';
import NewestProduct from './vetical-menu-components/newestProduct';
import HotProduct from './vetical-menu-components/hotProduct';
import ProductsbyPrice from './vetical-menu-components/productsbyPrice';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default class HomePage extends Component {

	render() {
		return(
			<>
			

					<div className="container-fluid">
						<div className="row">
							<VeticalMenu />
							<Switch>
							
								<Route path="/newest" exact component={NewestProduct}/>
								<Route path="/hot" exact component={HotProduct}/>						
								<Route path="/productsbyprice" exact component={ProductsbyPrice}/>	
							</Switch>					

						</div>
					</div>
					

			
			</>
		);
	}
}