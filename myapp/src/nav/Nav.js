import React from 'react';
import './Nav.css';

class Nav extends React.Component {
	render() {
		let nav = this.props.nav;
		return (
			<div>
				<ul>
					{Object.keys(nav).map(key => {
						return <li><a href={nav[key]}>{key}</a></li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Nav;