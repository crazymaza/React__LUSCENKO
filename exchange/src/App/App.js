import React, {Component} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Rate from "../Rate/Rate";
import About from "../About/About";
import Exchangers from "../Exchangers/Exchangers";

import {Switch, Route} from "react-router-dom";


class App extends Component {
	render() {

		return (
			<div className={'site'}>
				<Header/>
				<div className="container">
					<main>
						<Switch>
							<Route exact path={'/'} component={Rate} />
							<Route exact path={'/about'} component={About} />
							<Route exact path={'/exchangers'} component={Exchangers} />
						</Switch>

					</main>
				</div>

				<div className="container" id="cookie_info">
					<div className="site-content">
						<div className="well">На нашем сайте мы используем cookie для сбора информации технического
							характера.<br/>В
							частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
							местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
