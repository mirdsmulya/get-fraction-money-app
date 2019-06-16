
import 'babel-polyfill';
import React, {propTypes} from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


class App extends React.Component {
	constructor(props, context) {
		super(props,context);
		this.state = {
			rupiahNumber: " ",
			result: " "
		};
		this.onCalculate = this.onCalculate.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}


	onCalculate(event) {
		debugger;
		let data = Object.assign(this.state.rupiahNumber);
		this.setState({result: data});
	}

	updateInput(event) {

    let data = Object.assign({}, this.state.data);
    data = event.target.value;
    this.setState({rupiahNumber: data});
	}

	render() {
		debugger;
		let data = this.state.result;
		return(

			<div className="title center-text">
				<h1>Hello!</h1>
				<form>
					<p>Input number of Rupiah:</p>
					<input
						type="text"
						placeholder=" Rp xxx"
						onChange={this.updateInput}
						value={this.state.rupiahNumber}

					/>
				</form>
				<button
					className="btn center-btn"
					onClick={this.onCalculate}>Calculate</button>
				<p className="center-text">Result:</p>
				{this.state.rupiahNumber}
				<div>
				{this.state.result}
			</div>
			</div>

			);
	}
}

render(
		<App />,
	document.getElementById('app')
);

//{this.props.children}
//import configureStore from './stores/configureStore';
//import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
//import routes from './routes';
//import {loadDatas} from './actions/dataAction';
//import {loadAntrian} from './actions/antrianAction';
//import {loadStats} from './actions/statsAction';
/**

const store = configureStore();
store.dispatch(loadDatas());
store.dispatch(loadAntrian());
store.dispatch(loadStats());

**/
