

class RupiahValidation {

  static cleanRpString(splittedInput) {
    const detectRpString = this.detectChar(splittedInput, "r", "p");
    debugger;
    const withoutRpString = detectRpString ? splittedInput.splice(2,splittedInput.length) : splittedInput;
    return withoutRpString;
  }

  static detectChar(string, detect1, detect2) {
    if (string[0].toLowerCase() == detect1 && string[1].toLowerCase() == detect2) { return true; }
    else {return false; }
  }

  static detectMissingValue(splittedInput) {
    debugger;
    const missingValueCheckResult = splittedInput.length == 0 ? false : splittedInput;
    return missingValueCheckResult;
  }

  static cleanZeroOnFront(splittedInput) {
    debugger;
    if (splittedInput) {
      const lengthInput = splittedInput.length;
      for (let i = 0; i < lengthInput; i++) {
        if (splittedInput[0] == "0") { splittedInput.shift(); }
        else {i = lengthInput; } //end loop
      }
    }
    return splittedInput;
  }

  static detectSpaceString(splittedInput) {
    debugger;
    if (splittedInput) {
      let indexOfSpaceString = splittedInput.indexOf(' ');
      if (indexOfSpaceString > 0) {
        return false;
      } else if (indexOfSpaceString == 0) {
        splittedInput.shift();
      }
      return splittedInput;
    }
  }

  static cleanComaString(splittedInput) {
    debugger;
    let list = splittedInput;
    if (splittedInput) {
      let indexOfComa = list.indexOf(',');
      if (indexOfComa == list.length - 3 && list.length != 2) {
        this.popLoop(list,3); //Rp17.400,00 -> Rp17.400
      }
      else if (indexOfComa == -1 ) {
        //pass, no coma (',') detected
      }
      else { list = false; } // coma not in correct position
      return list;
    }

  }

  static popLoop(input, range) {
    for (let i = 0; i < range; i++) { input.pop(); }
    return input;
  }

  static checkDotString(input) {
    const splittedInput = input ;
    if (input) {
      let indexOfDot = splittedInput.indexOf('.');
      let freeDotNumbersAndListDotIndex = this.cleanDotStr(input);
      let freeDotNumbers = freeDotNumbersAndListDotIndex[0].input;
      let listIndexOfDots = freeDotNumbersAndListDotIndex[0].index;
      let lengthFreeDotNumber = freeDotNumbers.length;
      let listCorrectDotIndex = this.listClassificationOfCorrectDotIndex(listIndexOfDots[0], lengthFreeDotNumber);
      let isBothArrayIsTheSame = this.compareListObject(listIndexOfDots,listCorrectDotIndex);
      if (isBothArrayIsTheSame || indexOfDot == -1) {
        return splittedInput;
      }
      return false;
    }
    return splittedInput;
  }

  static cleanDotStr(inputs) {
    let length = inputs.length;
    let temp = [];
    let mainTemp = [];
    for (let i = 0; i < 6; i++) {
      let indexOfDot = inputs.indexOf('.');
      if (indexOfDot > 0) {
        temp.push(indexOfDot);
        inputs.splice(indexOfDot,1);
      }
      else if (indexOfDot == -1 && length > 3 ) {
        let lengthTemp = temp.length;
        let length2 = temp[lengthTemp-1] + 3;
        temp.push(length2);
        i = 6;
      }
      else {
        temp.push(1);
        i = 6;
      }
    }
    mainTemp.push({index: temp, input: inputs});
    return mainTemp;
  }

  static listClassificationOfCorrectDotIndex(firstDotIndex, length) {
    let temp = [];
    if (length > 3) {
      let iterateNumb = parseInt( (length - 1) / 3);
      let indexOfDot = firstDotIndex;
      for (let i = 0; i < iterateNumb; i++ ) {
        temp.push(indexOfDot);
        indexOfDot += 3;
      }
      temp.push(length);
      return temp;
    }
    temp.push(1);
    return temp;
  }

  static compareListObject(inputA, inputB) {
    if (inputA.length == inputB.length) {
      for (let i = 0; i < inputB.length; i++) {
        if (inputA[i] != inputB[i]) { return false; }
      }
      return true;
    }
    return false;
  }

  static parseStringToInteger(inputList) {
    let parseResult;
    if (inputList) {
      let joinedChar = inputList.join("");
      let integerResult = parseInt(joinedChar);
      let stringResult = integerResult.toString();
      return parseResult = stringResult != joinedChar ? false : integerResult;
    }
    return inputList;
  }

  static validateInput(input) {
      let splitted = input.split('');
      let withoutRp = this.cleanRpString(splitted);
      let missingValueChecked = this.detectMissingValue(withoutRp);
      let zeroOnFrontChecked = this.cleanZeroOnFront(missingValueChecked);
      let spaceChecked = this.detectSpaceString(zeroOnFrontChecked);
      let withoutRpComa = this.cleanComaString(spaceChecked);
      let withoutRpComaDot = this.checkDotString(withoutRpComa);
      let validationResult = this.parseStringToInteger(withoutRpComaDot);
      return validationResult;



  }

}
export default RupiahValidation;
