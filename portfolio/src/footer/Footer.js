import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <a 
                    href="http://vk.com/valnev" 
                    target="blank"
                >
                    &copy; Вальнев Игорь
                    </a>
                    <div className="up">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
            </footer>
            
        );
    }
}

export default Footer;