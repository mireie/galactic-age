import { GalacticAge, Planet } from "./../src/js/galaCalc.js";

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
    earthAge = new GalacticAge(33,75);
    expect(earthAge.yearsLeft()[0]).toEqual("175.00");
  });

  test('it will return years surpassed expetency on each planet in an Array based on life expectency input', () => {
    earthAge = new GalacticAge(33,25);
    expect(earthAge.yearsLeft()[0]).toEqual("33.33");
  });

  test('it will return information into the GalacticAge object', () => {
    let human = new GalacticAge(33);
    expect(human.galactiCalc(75)).toEqual(human);
  });

  test('it will return planet ages into an array', () => {
    let human = new GalacticAge(33);
    expect(human.getPlanetAges()[0]).toEqual("137.50");

  });
  test ('it should swap the text if the age is over expectency', () => {
    let human = new GalacticAge(33,12);
    let human2 = new GalacticAge(33,55);
    expect(human.deathSwap()).toEqual("Years cheated death ");
    expect(human2.deathSwap()).toEqual("Years left ");
  })
});

describe('Planets', () => {

  test('it will store planet info in an object', () => {
    let mercury = new Planet("Mercury", 87.66);
    expect(mercury.name).toEqual("Mercury");
    expect(mercury.yearLength).toEqual(87.66);

  });
});