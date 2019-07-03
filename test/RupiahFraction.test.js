import RupiahFraction from '../src/lib/RupiahFraction';

test('Fraction Main Function', () => {
  const inputAccepted = 777777;
  const inputExceedNumber = 1e15 + 1;
  const inputInvalid = false;
  const result1 = [
    {rupiah: "Rp" + 100000, count: 7 + " x "},
    {rupiah: "Rp" + 50000, count: 1 + " x "},
    {rupiah: "Rp" + 20000, count: 1 + " x "},
    {rupiah: "Rp" + 5000, count: 1 + " x "},
    {rupiah: "Rp" + 2000, count: 1 + " x "},
    {rupiah: "Rp" + 500, count: 1 + " x "},
    {rupiah: "Rp" + 100, count: 2 + " x "},
    {rupiah: "Rp" + 50, count: 1 + " x "},
    {rupiah: "Left Rp " + 27 + " (No available fraction in Rupiah)", count: ""}
  ];
  const result2 = [{rupiah: "Invalid input!", count: ""}];
  const result3 = [{rupiah: "", count:"Exceed the possible input of number!"}];

  expect(RupiahFraction.fractionRupiah(inputAccepted)).toStrictEqual(result1);
  expect(RupiahFraction.fractionRupiah(inputInvalid)).toStrictEqual(result2);
  expect(RupiahFraction.fractionRupiah(inputExceedNumber)).toStrictEqual(result3);

});
