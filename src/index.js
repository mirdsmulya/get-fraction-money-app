//import 'babel-polyfill';
import React, {propTypes} from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import FractionResult from './components/FractionResult';
import RupiahValidation from './lib/RupiahValidation';
import RupiahFraction from './lib/RupiahFraction';


class App extends React.Component {
	constructor(props, context) {
		super(props,context);
		this.state = {
			rupiahNumber: " ",
			result: []
		};
		this.onCalculate = this.onCalculate.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}

	onCalculate(event) {
		debugger;
		let data = Object.assign(this.state.rupiahNumber);
		let rupiahValid = RupiahValidation.validateInput(data);
		let result = RupiahFraction.fractionRupiah(rupiahValid);
		this.setState({result: result});

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
						value={this.state.rupiahNumber}/>
				</form>
				<button className="btn center-btn" onClick={this.onCalculate}>
					Calculate
				</button>
				<p className="center-text">
					Result:
				</p>
				{this.state.result.map(data => <FractionResult data={data} />)}
			</div>

			);
	}
}

render(
		<App />,
	document.getElementById('app')
);
