import RupiahValidation from '../src/lib/RupiahValidation';


test('Clear Rp String', () => {
  let input = "Rp1";
  input = input.split('');
  const result = ["1"]
  expect(RupiahValidation.cleanRpString(input)).toStrictEqual(result);
});

test('Detect Rp Character', () => {
  let input = "Rp1";
  input = input.split('');
  expect(RupiahValidation.detectChar(input, "r", "p")).toStrictEqual(true);
});

test('Detect Missing Value', () => {
  const input = "";
  expect(RupiahValidation.detectMissingValue(input)).toStrictEqual(false);
});

test('Clean Zero On Front Number', () => {
  let input = "0001";
  input = input.split('');
  expect(RupiahValidation.cleanZeroOnFront(input)).toStrictEqual(["1"]);
});

test('Detect Unknown Space string', () => {
  let input = "1 1";
  input = input.split('');
  expect(RupiahValidation.detectSpaceString(input)).toStrictEqual(false);
});

test("Pop Array with Range", () => {
  let input = ["a","2","2"];
  let result = ["a"]
  expect(RupiahValidation.popLoop(input,2)).toStrictEqual(result);
})

test('Clean Coma String', () => {
  let input1 = "110,00";
  let input2 = "12,121";
  input1 = input1.split('');
  input2 = input2.split('');
  let result1 = ["1","1","0"]
  let result2 = false;
  expect(RupiahValidation.cleanComaString(input1)).toStrictEqual(result1);
  expect(RupiahValidation.cleanComaString(input2)).toStrictEqual(result2);

});


test("Checking Dot composition True Scheme", () => {

  const inputSampleTrue = [
                "1","10","100",
                "1.000", "10.000", "100.000",
                "1.000.000", "10.000.000","100.000.000",
                "1.000.000.000", "10.000.000.000", "100.000.000.000",
                "1.000.000.000.000","10.000.000.000.000","100.000.000.000.000",
                "1.000.000.000.000.000"
              ];
  const outputSampleTrue = [
                "1","10","100",
                "1000", "10000", "100000",
                "1000000", "10000000","100000000",
                "1000000000", "10000000000", "100000000000",
                "1000000000000","10000000000000","100000000000000",
                "1000000000000000"
              ];

  for (let i = 0; i <inputSampleTrue.length; i++) {
    let input = inputSampleTrue[i];
    input = input.split('');
    let result = outputSampleTrue[i];
    result = result.split('');
    expect(RupiahValidation.checkDotString(input)).toStrictEqual(result);

  }
})


test("Checking Dot composition FAlSE Scheme", () => {

  const inputSample = ["10.00000","100.000.0","173000.", "30.00",
                       "100..12", ".100", "1.000.0000"];
  for (let i = 0; i < inputSample.length; i++) {
    let input = inputSample[i];
    input = input.split('');
    const result = false;
    expect(RupiahValidation.checkDotString(input)).toStrictEqual(result);

  }
})


test("Parsing String to Integer", () => {
  let input = "100000";
  input = input.split('');
  let result = 100000;
  expect(RupiahValidation.parseStringToInteger(input)).toStrictEqual(result);

})


test("Test validateInput() main function", () => {
  let input = "Rp 100.000.000,00";
  let result = 100000000;
  expect(RupiahValidation.validateInput(input)).toStrictEqual(result);


})
