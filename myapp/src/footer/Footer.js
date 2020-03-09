import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        let addresses = this.props.address;
        let phones = this.props.phone;
        return (
            <footer style={{background : '#2d3346', color : '#fff'}}>
                <h2>{this.props.title}</h2>
                <p>Lorem, ipsum dolor.</p>
                <table>
                    <tbody>
                    {addresses.map(address => {
                        return <tr>
                            <td>
                                {address}
                            </td>
                        </tr>
                    })}
                    {phones.map(phone => {
                        return <tr>
                            <td>
                                {phone}
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </footer>
        );
    }
}

export default Footer;
