import React, {Component} from 'react';

export default class Content extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="col-lg-9 mb-5">
			  <div className="p-5 bg-white d-flex align-items-center shadow-sm rounded h-100">
			    <div className="demo-content">
			    	{this.props.children}
			    </div>
			  </div>
			</div>
		);
	}


}