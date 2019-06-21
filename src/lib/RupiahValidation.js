

class RupiahValidation {

  static cleanRpString(splittedInput) {
    let detectRpString = this.detectRpChar(splittedInput, "r", "p");
    if (detectRpString) {
      splittedInput.splice(0,2);
      if (splittedInput[0] == " ") {
        splittedInput.shift();
      }
    }
    return splittedInput;
  }

  static detectRpChar(string, detect1, detect2) {
    if (string.length > 1) {
      let string1 = string[0].toLowerCase();
      let string2 = string[1].toLowerCase();
      if (string1 == detect1 && string2 == detect2) {
        return true;
      }
    }
    return false;
  }

  static detectMissingValue(splittedInput) {
    if (splittedInput.length == 0) {
      splittedInput.push('error');
    }
    return splittedInput;
  }

  static cleanZeroOnFront(splittedInput) {
    let lengthInput = splittedInput.length;
    for (let i = 0; i < lengthInput; i++) {
      if (splittedInput[0] == "0") {
        splittedInput.shift();
      }
      else {i = lengthInput; } //end loop
    }
    return splittedInput;
  }

  static cleanDotString(splittedInput) {
    let a = 1, b = 2, c = 3; // for input 1.000 - 999.999
    for (let i = 0; i < 5; i++ ) {
      let indexOfDot = splittedInput.indexOf('.');
      if (indexOfDot == a || indexOfDot == b|| indexOfDot == c ) {
        splittedInput.splice(indexOfDot, 1 );
        if (i == 0) {a = 4 ; b = 5 ; c =  6;} // for input 1.000.000 - 999.999.999
        if (i == 1) {a = 7 ; b = 8 ; c =  9;} // for input 1.000.000.000 - 999G
        if (i == 2) {a = 10; b = 11; c = 12;} // for input 1.000.000.000.000 - 999T
        if (i == 3) {a = 13; b = 14; c = 15;} // for input 1.000.000.000.000.000 - etc
      }
      else if (indexOfDot == -1 ) { i = 5 ; } // i = 5 -> end loop
      else { splittedInput.push("error"); i = 5;}
    }
    return splittedInput;
  }

  static detectSpaceString(splittedInput) {
    let indexOfSpaceString = splittedInput.indexOf(' ');
    let inputLength = splittedInput.length;
    if (indexOfSpaceString > 0) {
      splittedInput.push('error');
    }
    return splittedInput;
  }

  static cleanComaString(splittedInput) {
    let list = splittedInput;
    let indexOfComa = list.indexOf(',');
    if (indexOfComa == list.length - 3 && list.length != 2) { //ex: Rp17.400,00
      this.popLoop(list,3);
    }
    else if (indexOfComa == -1 ) {
      //pass, no coma (',') detected
    }
    else { list = false; } // coma not in correct position
    return list;
  }

  static popLoop(input, range) {
    for (let i = 0; i < range; i++) {
      input.pop();
    }
    return input;
  }

  static parseStringToInteger(inputList) {
    let result = 0;
    if (inputList) {
      let joinedChar = inputList.join("");
      let integerResult = parseInt(joinedChar);
      let stringResult = integerResult.toString();
      if (stringResult != joinedChar) {
        result = false;
      }
      else { result = integerResult; }
    }
    else { result = false; }
    return result;
  }

  static validateInput(input) {
    let splitted = input.split('');
    let withoutRp = this.cleanRpString(splitted);
    let missingValueChecked = this.detectMissingValue(withoutRp);
    let zeroOnFrontChecked = this.cleanZeroOnFront(missingValueChecked);
    let withoutDotRp = this.cleanDotString(zeroOnFrontChecked);
    let spaceChecked = this.detectSpaceString(withoutDotRp);
    let withoutDotRpComa = this.cleanComaString(spaceChecked);
    let validationResult = this.parseStringToInteger(withoutDotRpComa);
    return validationResult;
  }

}
export default RupiahValidation;
