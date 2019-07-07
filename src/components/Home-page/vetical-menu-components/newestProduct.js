import React, {Component} from 'react';
import Content from './content';
import {storeProducts} from './../../../data';
import ProductItem from './../product-item';



export default class NewestProduct extends Component {

	constructor(props){
		super(props);
	}

	state={
		products:storeProducts
	}
	

	showItem = () => {
		
		return this.state.products.map(value=>
			 <ProductItem id={value.id} key={value.id} img={value.img}
					title={value.title}
					info={value.info.substring(0,100)+'...'} />
		);
	}


	render() {
		console.log(this.state.products);
		return(
			<>
			<Content>
				{this.showItem()}
			</Content>

			</>
		);
	}
	 
}