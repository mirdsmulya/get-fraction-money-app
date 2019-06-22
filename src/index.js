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
			rupiahNumber: "",
			result: []
		};
		this.onCalculate = this.onCalculate.bind(this);
		this.updateInput = this.updateInput.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
	}

	enterPressed(event) {
		const code = event.keyCode || event.which;
		if (code === 13) { // work when hit enter
			event.preventDefault();
			this.onCalculate();
		}
	}

	onCalculate(event) {
		let data = Object.assign(this.state.rupiahNumber);
		let rupiahValid = RupiahValidation.validateInput(data);
		let result = RupiahFraction.fractionRupiah(rupiahValid);
		this.setState({result: result});
	}

	updateInput(event) {
    let data = event.target.value;
    this.setState({rupiahNumber: data});
	}

	render() {
		return(
			<div className="title center-text">
			<div className="jumbotron">
				<div className="container">

				<h1>Hello!</h1>
				<form>
					<p>Rupiah Denomination App</p>
					<input
						type="text"
						placeholder="Rp xxx"
						onChange={this.updateInput}
						value={this.state.rupiahNumber}
						onKeyPress={this.enterPressed}
					/>

				</form>
				<button
					className="btn center-btn"
					onClick={this.onCalculate}
					onKeyPress={this.enterPressed}>Calculate
				</button>
			</div>
		</div>
				<p className="center-text">Result:</p>
				{this.state.result.map(data => <FractionResult  data={data} />)}
			</div>


			);
	}
}

render(
		<App />,
	document.getElementById('app')
);
