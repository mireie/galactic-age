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
    earthAge = new GalacticAge(33);
    const expectency = 75;
    expect(earthAge.yearsLeft(expectency)).toEqual([175.00, 67.74, 42.00, 22.34, 3.54]);
  });

  test('it will return years surpassed expetency on each planet in an Array based on life expectency input', () => {
    earthAge = new GalacticAge(33);
    const expectency = 25;
    expect(earthAge.yearsLeft(expectency)).toEqual([33.33, 12.90, 8.00, 4.26, 0.67]);
  });

  test('it will return information into the GalacticAge object', () => {
    let human = new GalacticAge(33);
    expect(human.galactiCalc(75)).toEqual(human);
  });

  test('it will return planet ages into an array', () => {
    let human = new GalacticAge(33);
    expect(human.getPlanetAges()).toEqual([137.5, 53.22, 33.00, 17.55, 2.78]);

  });
});

describe('Planets', () => {

  test('it will store planet info in an object', () => {
    let mercury = new Planet("Mercury", 87.66);
    expect(mercury.name).toEqual("Mercury");
    expect(mercury.yearLength).toEqual(87.66);

  });
});