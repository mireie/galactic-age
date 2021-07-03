import { GalacticAge, Planet } from "./../src/js/galaCalc.js";

describe('GalacticAge', () => {

  let human = new GalacticAge(33, 75);
  let earthAge = new GalacticAge(33, 75);
  let testArray = earthAge.getPlanetAges();

  test('it will return Mercury age', () => {
    expect(parseFloat(testArray[0])).toBeCloseTo(137.50);
  });

  test('it will return Venus age', () => {
    expect(parseFloat(testArray[1])).toBeCloseTo(53.22);
  });

  test('it will return Mars age', () => {
    expect(parseFloat(testArray[3])).toBeCloseTo(17.55);
  });

  test('it will return Jupiter age', () => {
    expect(parseFloat(testArray[4])).toBeCloseTo(2.78);
  });

  test('it will return years left on Earth', () => {
    expect(parseFloat(earthAge.yearsLeft()[2])).toBeCloseTo(42);
  });

  test('it will return years left on each planet in an Array based on life expectency input', () => {
    ;
    expect(earthAge.yearsLeft()).toBeDefined();
  });

  test('it will return years surpassed expetency on each planet in an Array based on life expectency input', () => {
    let oldHuman = new GalacticAge(100,75);
    expect(oldHuman.yearsLeft()).toBeDefined();
  });

  test('it will return planet ages into an array', () => {
    expect(human.getPlanetAges()).toBeDefined();

  });
  test('it should swap the text if the age is over expectency', () => {
    let human2 = new GalacticAge(33, 12);
    let human3 = new GalacticAge(33, 55);
    expect(human2.deathSwap()).toEqual("Years cheated death ");
    expect(human3.deathSwap()).toEqual("Years left ");
  })
});

describe('Planets', () => {

  test('it will store planet info in an object', () => {
    let mercury = new Planet("Mercury", 87.66);
    expect(mercury.name).toEqual("Mercury");
    expect(mercury.yearLength).toBeDefined();

  });
});