import { GalacticAge } from "./../src/js/galaCalc.js";

describe('GalacticAge', () => {

  let earthAge;

test('it will return Mercury age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getMercuryAge()).toEqual(137.50);
});

test('it will return Venus age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getVenusAge()).toEqual(53.23);
});

test('it will return Mars age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getMarsAge()).toEqual(17.55);
});

test('it will return Jupiter age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getJupiterAge()).toEqual(2.78);
});

test('it will return years left on Earth', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.earthTimeLeft()).toEqual(39.56)
});

test('it will return years left on each planet in an Array based on life expectency input', () => {
  earthAge = new GalacticAge(33);
  const expectency = 75;
  expect(earthAge.yearsLeft(expectency)).toEqual([175.00,67.74,42.00,22.34,3.54]);
});

});