import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">MY<span>FOLIO</span></div>
                <nav>
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu">
                        <li><a href="#home">home</a></li>
                        <li><a href="#about-me">about ME</a></li>
                        <li><a href="#services">services</a></li>
                        <li><a href="#mywork">MY work</a></li>
                        <li><a href="#contact">contact ME</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;