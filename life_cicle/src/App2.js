import React from 'react';

class App2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			y1: this.props.z1,
		}
	}

	render() {
		const {z1} = this.props;
		return (
			<div>
				<h2>App2</h2>
				<p>Props: {z1}</p>
				<p>State y1: {this.state.y1 * 10}</p>
			</div>
		);
	}
}

export default App2;