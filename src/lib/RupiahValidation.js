

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
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < 5; i++ ) {
      let indexOfDot = splittedInput.indexOf('.');
      // define dot ('.') position
      if (indexOfDot == 1 + a || indexOfDot == 2 + b|| indexOfDot == 3 + c ) {
        splittedInput.splice(indexOfDot, 1 );
        if (i == 0) {a = 3; b = 3; c = 3;} // variable for input 100.000 / 100.000.000 / 100.000 /
        if (i == 1) {a = 7; b = 5; c = 6;} // 100.000.000
        if (i == 2) {a = 0; b = 6; c = 6;} // 100.000.000.000
      }
      else if (indexOfDot == -1 ) { i = 5; }
      else {
        splittedInput.push(",");
        i = 5;
      }
    }
    return splittedInput;
  }

  static detectSpaceString(splittedInput) {
    let indexOfSpaceString = splittedInput.indexOf(' ');
    if (indexOfSpaceString > 0) {
      splittedInput.push(',');
    }
    return splittedInput;
  }

  static cleanComaString(splittedInput) {
    let list = splittedInput;
    let indexOfComa = list.indexOf(',');
    if (indexOfComa == list.length - 3) {
      this.popLoop(list,3);
    }
    else if (indexOfComa == -1 ) {
      //pass
    }
    else { list = undefined; }
    return list;
  }

  static parseStringToInteger(withoutDotRpComa) {
    let result = 0;
    if (withoutDotRpComa != undefined) {
      let joinChar = withoutDotRpComa.join("");
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
