import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const 	slugify = (string) => {
		const a = 'àáäâãåăæąçćčđèéėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
		const b = 'aaaaaaaaacccdeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------'
		const p = new RegExp(a.split('').join('|'), 'g')

			return string.toString().toLowerCase()
	    .replace(/\s+/g, '-') // Replace spaces with -
	    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
	    .replace(/&/g, '-and-') // Replace & with 'and'
	    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
	    .replace(/\-\-+/g, '-') // Replace multiple - with single -
	    .replace(/^-+/, '') // Trim - from start of text
	    .replace(/-+$/, '') // Trim - from end of text
}


export default class ProductItem extends Component {

	constructor(props){
		super(props);
	}



	render() {
		return(
			
			<div className="col-lg-4 col-md-6">
				<div className="products mb-4">
					
					<div className="card">
						<Link to={'/product/' + slugify(this.props.title)} className="nav-link"><img src={this.props.img} className="card-img-top"/></Link>
						<div className="card-body">
							<Link to={'/product/' + slugify(this.props.title)} className="nav-link"><h4 className="card-title">{this.props.title}</h4></Link>
					
							<p className="card-text">{this.props.info}</p>
							<button className="btn btn-primary my-4">Buy</button>
						</div>
					</div>
					
				
				</div>
			</div>
			
		);
	}
	 
}