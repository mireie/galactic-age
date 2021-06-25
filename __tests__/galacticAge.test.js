import { GalacticAge } from "./../src/js/galaCalc.js";

describe('GalacticAge', () => {

  let earthAge;

test('it will return mercury age', () => {
  earthAge = new GalacticAge(33);
  expect(earthAge.getMercuryAge().toEqual(40.92))
});

});