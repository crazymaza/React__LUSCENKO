import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
	render() {
		const menu = {
			'/': 'Главная',
			'/about': 'О нас',
			'/exchangers': 'Пункты обмена',
		};
		return (
			<div className="header-nav">
				<div className="container">
					<nav>
						<ul>
							{Object.keys(menu).map(item => {
								return(
									<li key={item}>
										<Link key={item} to={item}>{menu[item]}</Link>
									</li>
								)
							})}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default Nav;
