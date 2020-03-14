import React from 'react';
import './Table.css';

// Создайте форму. Форма должна содержать:
//
// input[text]
// input[number]
// input[range]
// textarea
// select
// input[submit]
// при нажатии кнопки - выводить под кнопкой таблицу в формате name - значение.

class Table extends React.Component {
	render() {
		return (
			<div>
                <fieldset>
                    <legend>Form values</legend>
                    <table>
                        <tbody></tbody>
                    </table>
                </fieldset>
			</div>
		);
	}
}

export default Table;
