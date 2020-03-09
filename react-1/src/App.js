import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			count: 0,
		}
	}

	buttonClick = () => {
		this.setState({text: 'Button work!'})
	};

	countUp = () => {
		this.setState({count: this.state.count += 1});
	};

	resetCount = () => {
		this.setState({count: 0});
	}

	render() {
		return (
			<div>
				<button onClick={this.buttonClick}>Button</button>
				<p>{this.state.text}</p>
				<button onClick={this.countUp}>Count</button>
				<p>{this.state.count}</p>
				<button onClick={this.resetCount}>ResetCount</button>
			</div>
		);
	}

}

export default App;
