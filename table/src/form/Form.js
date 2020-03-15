import React from 'react';
import './Form.css';
import Table from "../table/Table";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			number: 0,
			range: 25,
			textarea: 'Anything about yourself',
			select: '',
		};
		this.a = {};
	}

	submitForm = (e) => {
		e.preventDefault();
		Object.assign(this.a, this.state);
    };

	changeFormField = (e) => {
		this.setState({[e.target.name] : e.target.value});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm} name='form'>
					<input type='text' name='text' onChange={this.changeFormField}/><br/>
					<input type='number' name='number' onChange={this.changeFormField}/><br/>
					<input
                        type='range'
                        name='range'
                        min={0}
                        max={50}
                        step={1}
                        defaultValue={this.state.range}
                        onChange={this.changeFormField}
                    /><br/>
					<textarea
                        style={{resize: 'none'}}
                        name='textarea'
                        id='textarea'
                        cols='30'
                        rows='10'
                        placeholder={'Anything about yourself'}
                        onChange={this.changeFormField}
                    /><br/>
					<select name='select' id='select' defaultValue={'Choose 1'} onChange={this.changeFormField}>
                        <option value='Choose 1'>Choose 1</option>
                        <option value='Choose 2'>Choose 2</option>
                        <option value='Choose 3'>Choose 3</option>
                        <option value='Choose 4'>Choose 4</option>
                        <option value='Choose 5'>Choose 5</option>
                    </select><br/>
					<input type='submit' />
				</form>
				<Table form = {Object.keys(this.a).length === 0 ?
					{'':'Таблица ещё не заполнена :'}
					: this.a}/>
			</div>
		);
	}
}

export default Form;
