import React from 'react';
// import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import './App.css';

class App extends React.Component {
  render() {
      let nav = this.props.nav;
      let address = this.props.address;
      let phone = this.props.phone;
      let title = this.props.title;
    return (
      <div className="App">
        {/*<Header />*/}
        <Nav nav={nav}/>
        <Main />
        <Footer address={address} phone={phone} title={title}/>
      </div>
    );
  }
}

export default App;
