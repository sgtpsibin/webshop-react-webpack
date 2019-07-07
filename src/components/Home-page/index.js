import React, {Component} from 'react';
import VeticalMenu from './vetical-menu';
import NewestProduct from './vetical-menu-components/newestProduct';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default class HomePage extends Component {

	render() {
		return(
			<>		

					<div className="container-fluid">
						<div className="row">						
							<VeticalMenu />													
							<NewestProduct/>			

						</div>
					</div>
					

			
			</>
		);
	}
}