import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			count: 0,
			color: 'green',
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

	onMouseMoveFunc = () => {
		console.log('move');
		
	};

	showAtr = (e) => {
		console.log(e.target.getAttribute('data'));	
	};

	render() {
		return (
			<div>
				<button onClick={this.buttonClick}>Button</button>
				<p>{this.state.text}</p>
				<button onClick={this.countUp}>Count</button>
				<p>{this.state.count}</p>
				<button onClick={this.resetCount}>ResetCount</button>
				<div 
					style={{backgroundColor: this.state.color, width: '100px', height: '100px'}}
					onMouseMove={this.onMouseMoveFunc}
				></div>
				<button data='atr-1' onClick={this.showAtr}>atr1</button>
				<button data='atr-2' onClick={this.showAtr}>atr2</button>
			</div>
		);
	}

}

export default App;
