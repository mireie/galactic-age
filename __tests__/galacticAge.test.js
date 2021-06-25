import { GalacticAge } from "./../src/js/galaCalc.js";

describe('GalacticAge', () => {

  let earthAge;

test('it will return mercury age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getMercuryAge()).toEqual(40.92);
});

test('it will return Venus age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getVenusAge()).toEqual(53.46);
});

test('it will return Mars age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getMarsAge()).toEqual(29.04);
});

});