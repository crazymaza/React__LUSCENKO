import React from 'react';
import './Table.css';

class Table extends React.Component {
	render() {
		return (
			<div>
                <fieldset>
                    <legend>Form values</legend>
                    <table>
                        <tbody>
                            {Object.keys(this.props.form).map(key => {
								if(this.props.form[key] !== ''){
									return <tr key={key}>
										<td>{key}:</td>
										<td>{this.props.form[key]}</td>
									</tr>
								}
								return null;
                            })}
                        </tbody>
                    </table>
                </fieldset>
			</div>
		);
	}
}

export default Table;
