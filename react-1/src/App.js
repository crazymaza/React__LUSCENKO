import React from 'react';
import logo from './logo.svg';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			count: 0,
			color: 'green',
			inputText: '',
			checked: false,
			radioValue: '',
			optionsValue: '',
			width: 100,
			rangeValue: '',
			imgDisplay: 'block',
		}
	}

	//1,2
	buttonClick = () => {
		this.setState({text: 'Button work!'})
	};

	//3
	// countUp = () => {
	// 	this.setState((state) => {
	// 		return {count: state.count += 1};
	// 	});
	// };
	//Деструктуризация
	countUp = () => {
		this.setState(({count}) => {
			return {count: count += 1};
		});
	};

	//4
	resetCount = () => {
		this.setState({count: 0});
	}

	//5
	onMouseMoveFunc = () => {
		console.log('move');

	};

	//6
	showAtr = (e) => {
		console.log(e.target.getAttribute('data'));
	};

	//7,8
	inputChange = (e) => {
		let value = e.target.value;
		if (value.length < 6) {
			this.setState({inputText: 'Длина меньше 6 символов.'});
		} else {
			this.setState({inputText: e.target.value});
		}
	};

	//9
	isChecked = () => {
		this.setState({checked: true});
	};

	//10
	getRadioValue = (e) => {
		this.setState({radioValue: e.target.getAttribute('value')});
	};

	//11
	changeSelect = (e) => {
		this.setState({optionsValue: e.target.value});
	};

	//12
	divWidthUp = () => {

		this.setState((state) => {
			return {width: state.width += 3};
		});
	};

	//13
	showRange =(e) => {
		this.setState({rangeValue: e.target.value});
	};

	//14
	hidenImage = () => {
		this.setState((state) => {
			return state.imgDisplay === 'none' ? 
			{imgDisplay: state.imgDisplay = 'block'} :
			{imgDisplay: state.imgDisplay = 'none'};
		})
	}

	render() {
		const divStyle = {
			paddingLeft: '20px',
			paddingTop: '10px',
			paddingBottom: '10px',
		};

		const divElemStyle = {
			backgroundColor: this.state.color,
			width: '100px',
			height: '100px'
		};

		return (
			<div style={divStyle}>
				<button onClick={this.buttonClick}>Button</button>
				<p>{this.state.text}</p>
				<button onClick={this.countUp}>Count</button>
				<p>{this.state.count}</p>
				<button onClick={this.resetCount}>ResetCount</button>
				<div
					style={divElemStyle}
					onMouseMove={this.onMouseMoveFunc}
				/>
				<button data='atr-1' onClick={this.showAtr}>atr1</button>
				<button data='atr-2' onClick={this.showAtr}>atr2</button>
				<br/>
				<input onInput={this.inputChange}/>
				<p>{this.state.inputText}</p>
				<input type={'checkbox'} checked={this.state.checked} onChange={this.isChecked}/>
				<br/>
				<input type={'radio'} name={'radio'} value={'first'} onChange={this.getRadioValue}/>
				<input type={'radio'} name={'radio'} value={'second'} onChange={this.getRadioValue}/>
				<input type={'radio'} name={'radio'} value={'third'} onChange={this.getRadioValue}/>
				<p>{this.state.radioValue}</p>
				<select onChange={this.changeSelect}>
					<option value={'Пункт 1'}>Пункт 1</option>
					<option value={'Пункт 2'}>Пункт 2</option>
					<option value={'Пункт 3'}>Пункт 3</option>
					<option value={'Пункт 4'}>Пункт 4</option>
				</select>
				<p>{this.state.optionsValue}</p>
				<div
					style={{height: '100px', width: this.state.width + 'px', backgroundColor: 'blue'}}
				/>
				<button onClick={this.divWidthUp}>Width UP</button>
				<input type = {'range'} 
					min = {'0'} 
					max = {'20'} 
					step = {'1'} 
					defaultValue = {'10'} 
					onChange = {this.showRange} />
					<p>{this.state.rangeValue}</p>
					<img 
						style={{display: this.state.imgDisplay, width: '100px', height: '100px'}}
						src={logo} 
						alt='React logo'
					 />
					<button onClick={this.hidenImage} >Hide image</button>
			</div>
		);
	}


}

export default App;
