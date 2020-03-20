import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			count: 0,
			oWinCount: 0,
			xWinCount: 0,
		};
		this.winerLine = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[0, 4, 8],
			[2, 4, 6],
			[2, 5, 8],
		]
	}

	//Выставляем Х или О в клетку.
	clickHandler = e => {
		//data - номер квадрата по которому кликнули.
		let data = e.target.getAttribute('data');
		let currentSquares = this.state.squares;
		let currentSymbol = (this.state.count % 2 === 0) ? 'X' : 'O';
		if (currentSquares[data] === null) {
			currentSquares[data] = currentSymbol;
			this.setState({count: this.state.count + 1});
			this.setState({squares: currentSquares});
		} else {
			alert('Так нельзя!');
		}
		this.isWinner(currentSymbol);
	};

	//Определяем победителя или ничью.
	isWinner(currentSymbol) {
		let s = currentSymbol;
		let win = false;
		for (let i = 0; i < this.winerLine.length; i++) {
			let line = this.winerLine[i];
			if (this.state.squares[line[0]] === s
				&& this.state.squares[line[1]] === s
				&& this.state.squares[line[2]] === s) {
				alert(s + " win!");
				win = true;
				this.showGlobalScore(s);
				this.timeout();
			}
		}
		if (!this.isDraw() && !win) {
			alert("Draw!");
			this.timeout();
		}
	}

	//Запускает очистку поля после победы или ничьи.
	timeout = () => {
		setTimeout(() => {
			this.setState({squares: Array(9).fill(null)});
			this.setState({count: 0});
		}, 2000);
	};

	//Добавьте в игру возможность "ничья" - когда количество ходов исчерпалось, и поле заполнено.
	isDraw = () => {
		return this.state.squares.some(item => item === null);
	};
	//Добавьте кнопку - начать новую игру, которая обнуляет и очищает поле.
	startNewGame = () => {
		this.setState({squares: Array(9).fill(null)});
		this.setState({count: 0});
		this.setState({xWinCount: 0});
		this.setState({oWinCount: 0});
	};

	//Добавьте глобальный счет - т.е. количество побед крестиков и ноликов - в течении нескольких партий.
	showGlobalScore = (symbol) => {
		if (symbol === 'X') {
			this.setState({xWinCount: this.state.xWinCount + 1});
		} else if (symbol === 'O') {
			this.setState({oWinCount: this.state.oWinCount + 1});
		}
	};

	//Добавьте возможность выбора крестиков или ноликов для первого хода.
	setFirstSymbol = (e) => {
		let squaresIsNotNull = (this.state.squares).every(square => square === null);
		if (squaresIsNotNull) {
			if (e.target.textContent === 'O') {
				this.setState({count: this.state.count + 1});
			}
		}
	};

	render() {
		return (
			<div className={'tic-tac-toe'}>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={0}>
					{this.state.squares[0]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={1}>
					{this.state.squares[1]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={2}>
					{this.state.squares[2]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={3}>
					{this.state.squares[3]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={4}>
					{this.state.squares[4]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={5}>
					{this.state.squares[5]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={6}>
					{this.state.squares[6]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={7}>
					{this.state.squares[7]}
				</div>
				<div className={'ttt-grid'} onClick={this.clickHandler} data={8}>
					{this.state.squares[8]}
				</div>
				<div className={'xScore'}>
					<p>X win</p>
					<p>{this.state.xWinCount}</p>
				</div>
				<div className={'oScore'}>
					<p>O win</p>
					<p>{this.state.oWinCount}</p>
				</div>
				<p>Choose first symbol:</p>
				<button className={'button setX'} onClick={this.setFirstSymbol}>X</button>
				<button className={'button setO'} onClick={this.setFirstSymbol}>O</button>
				<button className={'button newGameBtn'} onClick={this.startNewGame}>New game</button>
			</div>
		);
	}
}

export default App;