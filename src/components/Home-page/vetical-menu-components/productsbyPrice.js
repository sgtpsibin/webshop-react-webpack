import React, {Component} from 'react';
import Content from './content';
import VeticalMenu from './../vetical-menu';

export default class ProductsbyPrice extends Component {


	render() {
		return(
			<>
			<div className="container-fluid">
				<div className="row">
					<VeticalMenu/>
					<Content>
						<h1>Product by price is comming...</h1>
					</Content>
				</div>
			</div>

			</>
		);
	}
	 
}