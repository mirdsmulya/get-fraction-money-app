

class RupiahFraction {

  static fractionRupiah(inputIntegerNumber) {
    let temp = [];
		const rupiahFractions= [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50, 50];
    if (!inputIntegerNumber) {
      temp.push({rupiah: "Invalid input!", count: ""});
    }
    else if (inputIntegerNumber >= 1000000000000000) { //max number of input
      temp.push({rupiah: "", count:"Exceed the possible input of number!"});
    }
    else {
      let fractionResult = this.operateFraction(inputIntegerNumber, rupiahFractions);
      temp = fractionResult;
    }
		return temp;
	}

  static operateFraction(inputIntegerNumber, rupiahFractions) {
    let temp = [];
    let inputTemp = inputIntegerNumber;
    for (let  i = 0 ; i < rupiahFractions.length; i++) {
			let rupiahFraction = rupiahFractions[i];
			//case: 15.000 mod 10.000 = 5.000
			if (inputTemp % rupiahFraction != inputTemp && inputTemp % rupiahFraction != 0) {
				let numberOfFractionNeeded = parseInt(inputTemp / rupiahFraction);
				let numberOfTotalFraction = rupiahFraction * numberOfFractionNeeded;
				let residualNumber = inputTemp - numberOfTotalFraction;
				temp.push({rupiah: "Rp" + rupiahFraction, count: numberOfFractionNeeded + " x "});
				inputTemp = residualNumber;
			}
			// case: 5.000 mod 10.000 = 5000
			else if ( inputTemp % rupiahFraction == inputTemp ){
				if (inputTemp < 50) {
					temp.push({rupiah: "Left Rp " + inputTemp + " (No available fraction in Rupiah)", count: ""});
					i = rupiahFractions.length;
				}
			}
			else {
        // case: 10.000 mod 5.000 = 0
				let fractionCount = inputTemp / rupiahFraction;
				temp.push({rupiah: "Rp" + rupiahFraction, count: fractionCount + " x "});
				i = rupiahFractions.length;
			}
		}
    return temp;
  }
}

export default RupiahFraction;
