import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import './Header.css';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="top-bar animate-dropdown"></div>
				<div className="main-header">
					<div className="container">
						<h1 className="site-title">React Lite Level</h1>
					</div>
				</div>
				<Nav />
			</header>
		);
	}
}

export default Header;
