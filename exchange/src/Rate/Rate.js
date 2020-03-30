import React, {Component} from 'react';
import './Rate.css';
import Calc from "../Calc/Calc";

class Rate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: {},
			currencyRate: {},
			baseCurrency: '',
		};
		this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
	}

	componentDidMount() {
		this.getRate();
	}

	getRate = () => {
		fetch('https://api.exchangeratesapi.io/latest')
			.then(data => data.json())
			.then(data => {
				this.setState({date: data.date});
				let result = {};
				for (let i = 0; i < this.currency.length; i++) {
					result[this.currency[i]] = data.rates[this.currency[i]];
				}
				this.setState({currencyRate: result});
				this.setState({baseCurrency: data.base});
				let currentDate = this.createDate(data.date);
				this.setState({date: currentDate});
			});
	};

	createDate = (date) => {
		let dateArr = date.split('-');
		let months = {
			'01': 'января',
			'02': 'февраля',
			'03': 'марта',
			'04': 'апреля',
			'05': 'мая',
			'06': 'июня',
			'07': 'июля',
			'08': 'августа',
			'09': 'сентября',
			'10': 'октября',
			'11': 'ноября',
			'12': 'декабря'
		};
		dateArr[1] = months[Object.keys(months).filter(month => dateArr[1] === month)];
		return {year: dateArr[0], month: dateArr[1], day: dateArr[2]};
	};

	render() {
		let {currencyRate, baseCurrency} = this.state;
		let {year, month, day} = this.state.date;
		return (
			<div className={'rate'}>
				<h3> Курс валют на {day} {month} {year} </h3>
				<div className="flex-container">
					{Object.keys(currencyRate).map(item => {
							return (
								<div className="block flex-item" key={item}>
									<div className="currency-name">{item}</div>
									<div className="currency-in">
										{currencyRate[item].toFixed(2)}*
									</div>
									<p>*за 1 {baseCurrency}</p>
								</div>
							)
						}
					)}
				</div>
				<Calc rate={this.state.currencyRate}/>
			</div>
		);
	}
}

export default Rate;