import React from 'react';
import App2 from "./App2";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s1: '',
            s2: '',
	        s3: props.a1 * props.a2,
        }
    }

	static getDerivedStateFromProps(props, state){
    	return {s1: props.a1, s2: props.a2};
	}

    render() {
        const {a1, a2} = this.props;
        return (
			<div>
				<h2>App</h2>
                <p>Props: {a1} + {a2}</p>
                <p>State: {this.state.s1} + {this.state.s2}</p>
                <p>State s3: {this.state.s3}</p>
				<App2 z1 = {this.state.s3}/>
			</div>
		);
	}
}

export default App;
