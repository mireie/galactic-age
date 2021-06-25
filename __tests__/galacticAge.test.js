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
  expect(earthAge.yearsLeft(expectency)).toEqual([(175.00).toFixed(2),(67.74.toFixed(2)),(42.00.toFixed(2)),(22.34.toFixed(2)),(3.54.toFixed(2))]);
});

test('it will return years surpassed expetency on each planet in an Array based on life expectency input', () => {
  earthAge = new GalacticAge(33);
  const expectency = 25;
  expect(earthAge.yearsLeft(expectency)).toEqual([(33.33).toFixed(2),(12.90.toFixed(2)),(8.00.toFixed(2)),(4.26.toFixed(2)),(0.67.toFixed(2))]);
});

test('it will return information into the GalacticAge object', () => {
  let human = new GalacticAge(33);
  expect(human.galactiCalc()).toEqual(human);
});

});