import React from 'react';
import './Form.css';

// Создайте форму. Форма должна содержать:
//
// input[text]
// input[number]
// input[range]
// textarea
// select
// input[submit]
// при нажатии кнопки - выводить под кнопкой таблицу в формате name - значение.

class Form extends React.Component {
    submitForm = (e) => {
		e.preventDefault();
    };

	render() {
		return (
			<div>
				<form action="#" onSubmit={this.submitForm}>
					<input type="text" name={'text'}/><br/>
					<input type="number" name={'number'}/><br/>
					<input
                        type="range"
                        name={'range'}
                        min={0}
                        max={50}
                        step={1}
                        defaultValue={25}
                    /><br/>
					<textarea
                        style={{resize: 'none'}}
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="10"
                    /><br/>
					<select name="select" id="select">
                        <option value="1">Choose 1</option>
                        <option value="2">Choose 2</option>
                        <option value="3">Choose 3</option>
                        <option value="4">Choose 4</option>
                        <option value="5">Choose 5</option>
                    </select><br/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default Form;
