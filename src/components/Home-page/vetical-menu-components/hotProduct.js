import React, {Component} from 'react';
import Content from './content';
import VeticalMenu from './../vetical-menu';

export default class HotProduct extends Component {


	render() {
		return(
			<>
			<div className="container-fluid">
				<div className="row">
					<VeticalMenu/>
					<Content>
						<h1>Hot Product is comming...</h1>
					</Content>
				</div>
			</div>
			

			</>
		);
	}
	 
}