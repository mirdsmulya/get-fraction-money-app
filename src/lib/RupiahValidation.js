

class RupiahValidation {

  static validateInput(input) {

    let splitted = input.split('');
    let withoutRp = this.cleanRpString(splitted);
    let missingValueChecked = this.detectMissingValue(withoutRp);
    let zeroOnFrontChecked = this.cleanZeroOnFront(missingValueChecked);
    let withoutDotRp = this.cleanDotString(zeroOnFrontChecked);
    let spaceChecked = this.detectSpaceString(withoutDotRp);
    let withoutDotRpComa = this.cleanComaString(spaceChecked);
    let validationResult = this.parseStringToInteger(withoutDotRpComa);
    debugger;
    return validationResult;
  }

  static cleanRpString(splittedInput) {
    let detectRpString = this.detectChar(splittedInput, "R", "p");
    if (detectRpString) {
      splittedInput.splice(0,2);
      if (splittedInput[0] == " ") {
        splittedInput.shift();
      }
    }
    return splittedInput;
  }

  static detectMissingValue(splittedInput) {
    if (splittedInput.length == 0) {
      splittedInput.push(',');
    }
    return splittedInput;
  }

  static cleanZeroOnFront(splittedInput) {
    let input = splittedInput;
    for (let i = 0; i < splittedInput.length; i++) {
      if (input[0] == "0") {
        input.shift();
      }
      else {i = splittedInput.length; }
    }
    return input;
  }

  static cleanDotString(splittedInput) {
    let a = 1, b = 2, c = 3;
    for (let i = 0; i < 5; i++ ) {
      let indexOfDot = splittedInput.indexOf('.');
      // define dot ('.') position
      if (indexOfDot == a || indexOfDot == b|| indexOfDot == c ) {
        splittedInput.splice(indexOfDot, 1 );
        if (i == 0) {a = 4; b = 5; c = 6;} // variable for input 100.000 / 100.000.000 / 100.000 /
        if (i == 1) {a = 7; b = 8; c = 9;} // 100.000.000
        if (i == 2) {a = 10; b = 11; c = 12;} // 100.000.000.000
        if (i == 3) {a = 13; b = 14; c = 15;}
      }
      else if (indexOfDot == -1 ) { i = 5; }
      else {
        splittedInput.push("error");
        i = 5;
      }
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
    if (indexOfComa == list.length - 3 && list.length != 2) {
      this.popLoop(list,3);
    }
    else if (indexOfComa == -1 ) {
      //pass
    }
    else { list = undefined; }
    return list;
  }

  static parseStringToInteger(inputList) {
    let result = 0;
    if (inputList != undefined) {
      let joinChar = inputList.join("");
      let to_Integer = parseInt(joinChar);
      if (to_Integer.toString() != joinChar) {
        result = false;
      }
      else { result = to_Integer; }
    }
    else { result = false; }
    return result;
  }

  static detectChar(string, detect1, detect2) {
    if (string[0] == detect1 && string[1] == detect2) {
      return true;
    }
    else {return false;}
  }

  static popLoop(input, range) {
    for (let i = 0; i < range; i++) {
      input.pop();
    }
    return input;
  }

}
export default RupiahValidation;
