import React, {Component} from 'react';
import './Calc.css';

class Calc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentRate: 0,
		};
	}

	static getDerivedStateFromProps(props) {
		return {rate: props.rate};
	}

	calcRate = (e) => {
		e.preventDefault();
		let elements = e.target.elements;
		let currencyValue = elements['currency-value'].value;
		let currencyType = elements['currency-type'].value;
		this.setState({currentRate: currencyValue / this.state.rate[currencyType]})
	};

	render() {
		return (
			<div className={'calculator'}>
				<h3> Калькулятор обмена</h3>
				<div className="block">
					<div>
						<form onSubmit={this.calcRate}>
							<input name="currency-value" type="number" defaultValue={150}/>
							<select name="currency-type" id="">
								{Object.keys(this.props.rate).map(item => {
									return (
										<option value={item} key={item}>{item}</option>
									)
								})}

							</select>
							<input type={'submit'}/>
						</form>
					</div>
					<div>
						<h4>Результат</h4>
						<ul className="calc-res">
							<li>EUR {this.state.currentRate.toFixed(2)}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Calc;