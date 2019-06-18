

class RupiahFraction {

  static fractionRupiah(inputNumber) {
    let temp = [];
		const rupiahFractions= [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50, 50];

    if (inputNumber == false) {
      temp.push({rupiah: "input!", count: "Invalid "});
    }
    else {
      let fractionResult = this.operateFraction(inputNumber, rupiahFractions);
      temp = fractionResult;
    }
		return temp;
	}

  static operateFraction(inputNumber, rupiahFractions) {
    debugger;
    let temp = [];
    let inputTemp = inputNumber;
    for (let  i = 0 ; i < rupiahFractions.length; i++) {
			let rupiahFraction = rupiahFractions[i];
			//case: 15.000 mod 10.000 = 5.000
			if (inputTemp % rupiahFraction != inputTemp && inputTemp % rupiahFraction != 0) {
				let divideResult = this.divideInt(inputTemp, rupiahFraction);
				let multiplicationResult = this.multipleInt(rupiahFraction, divideResult);
				let subtractResult = this.substractInt(inputTemp, multiplicationResult);
				temp.push({rupiah: "Rp " + rupiahFraction, count: divideResult + " x"});
				inputTemp = subtractResult;
			}
			// case: 5000 mod 10000 = 5000
			else if ( inputTemp % rupiahFraction == inputTemp ){
				if (inputTemp < 50) {
					temp.push({rupiah: "Rp " + inputTemp + " (No available fraction in Rupiah)", count: "Left "});
					i = rupiahFractions.length;
				}
			}
			else { // case: 10.000 mod 5.000 = 0
				let fractionCount = inputTemp / rupiahFraction;
				temp.push({rupiah: "Rp " + rupiahFraction, count: fractionCount + " x"});
				i = rupiahFractions.length;
			}
		}
    return temp;
  }

	static multipleInt(iterNumber, hasilBagi) {
		let result = hasilBagi * iterNumber;
		return result;
	}

	static divideInt(number, iterate) {
		let divideResult = parseInt(number / iterate);
		return divideResult;
	}

	static substractInt(number, pengurang) {
		let result = number - pengurang;
		return result;
	}
}

export default RupiahFraction;
