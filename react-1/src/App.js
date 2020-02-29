import React from 'react';
import './App.css';

function App() {
	return (
		<div class="container">
			<div class="row">
				<div class="col col-lg-12">
					<h1>First React APP</h1>
					<img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt=""/>
					<p>my first react app</p>
					<button class="button-primary">Default</button>
				</div>
			</div>
            <div className="row">
                <div className="col col-lg-12">
                    <h2>About me</h2>
                    <table>
                        <th>
                            Something about me
                        </th>
                        <tr>
                            <td>Age</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>Russia</td>
                        </tr>
                    </table>
                </div>
            </div>
		</div>
	);
}

export default App;
