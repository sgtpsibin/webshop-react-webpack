import React, {Component} from 'react';
import { NavLink} from "react-router-dom";
import logo from './../../public/images/logo.png';


export default class Navbar extends Component {
	render() {
		console.log('navbar reload');
		return(
			<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					<img src={logo}/>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/pricing">Pricing</NavLink>
						</li>
					</ul>
				</div>
			</nav>

			</>

			);
	}

}