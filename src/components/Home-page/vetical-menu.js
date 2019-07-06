import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class VeticalMenu extends Component {


	render() {
		return(
			<div className="col-lg-3 mb-4 mb-lg-0">
				<nav className="nav navbar-dark flex-column bg-primary text-white font-weight-bold shadow-sm rounded p-3">
					<NavLink activeStyle={{color:'yellow'}} to="/newestproduct" className="nav-link px-4 rounded-pill">
						<i className="fa fa-bar-chart mr-2" />
						Sản phẩm mới nhất
						<span className="badge badge-success px-2 rounded-pill ml-2">45</span>
					</NavLink>
					<NavLink activeStyle={{color:'yellow'}} to="/hot" className="nav-link px-4 rounded-pill">
						<i className="fa fa-pie-chart mr-2" />
						Sản phẩm hot
						<span className="badge badge-danger px-2 rounded-pill ml-2">12</span>
					</NavLink>
					<NavLink activeStyle={{color:'yellow'}} to="/productsbyprice" className="nav-link px-4 rounded-pill">
						<i className="fa fa-line-chart mr-2" />
						Sản phẩm theo giá
						<span className="badge badge-warning px-2 rounded-pill ml-2">17</span>
					</NavLink>
				</nav>
			</div>

			);
	}

}