import GalacticAge from '../src/js/galaCalc.js';

describe('GalacticAge', () => {

  let earthAge = new GalacticAge(33);

  test('it will return the user\'s age in mercury years', () => {
    expect(earthAge.getMercuryAge().toEqual(40.92));
  });


});