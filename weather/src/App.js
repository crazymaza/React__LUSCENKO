import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Error from './Error/Error';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {

  render() {
    const menu = {
      main: 'Main',
      about: 'About',
      contacts: 'Contacts',
    }
    return (
      <Router>
          <Header />
          <nav>
            <ul>
              {Object.keys(menu).map(item => <li><a href={item}>{menu[item]}</a></li>)}
            </ul>
          </nav>
          <Switch>
            <Route exact path='/main' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route component={Error}/>
          </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App;