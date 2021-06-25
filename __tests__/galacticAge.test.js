import { GalacticAge } from "./../src/js/galaCalc.js";

describe('GalacticAge', () => {

  let earthAge;

test('it will return mercury age', () => {
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

});