
const planetYearLength = [
  87.66,
  226.46,
  365.25,
  686.67,
  4331.87,
  760.27,
  684.65,
  189.55,
  797.50
];

export class Planet {
  constructor(name, yearLength) {
    this.name = name;
    this.yearLength = yearLength;
  }
}
const mercury = new Planet("Mercury",87.66);
const venus = new Planet("Venus",226.46);
const earth = new Planet("Earth",365.25);
const mars = new Planet("Mars",686.67);
const jupiter = new Planet("Jupiter",4331.87);
const saturn = new Planet("Saturn",10,760.27);
const uranus = new Planet("Uranus",30,684.65);
const neptune = new Planet("Neptune",60,189.55);
const pluto = new Planet("Pluto",90,797.50);
const planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];

export class GalacticAge {
  constructor(solarAge, expectancy) {
    this.solarAge = parseFloat(solarAge);
    this.expectancy = parseFloat(expectancy);
  }
  getMercuryAge() {
    const planetYearDays = .24 * planetYearLength[2];
    const planetAge = this.solarAge * planetYearLength[2] / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getVenusAge() {
    const planetYearDays = .62 * planetYearLength[2];
    const planetAge = this.solarAge * planetYearLength[2] / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getMarsAge() {
    const planetYearDays = 1.88 * planetYearLength[2];
    const planetAge = this.solarAge * planetYearLength[2] / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getJupiterAge() {
    const planetYearDays = 11.86 * planetYearLength[2];
    const planetAge = this.solarAge * planetYearLength[2] / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  earthTimeLeft() {
    const lifeExpect = 72.56;
    return lifeExpect - this.solarAge;
  }
  yearsLeft() {
    let yearsLeftArray = [];
    planetYearLength.forEach(e => {
      let expectedYears =  this.expectancy * planetYearLength[2] / e;
      let yearsRemain = expectedYears - this.solarAge * planetYearLength[2] / e;
      if (yearsRemain < 0) {
        yearsRemain *= -1;
      
      }
      yearsLeftArray.push(yearsRemain.toFixed(2));
    });

    return yearsLeftArray;
  }

  galactiCalc(expectancy) {
    this.remain = this.yearsLeft(expectancy);
    return this;
  }

  getPlanetAges() {
    let planetAgesArray = [];
    planetYearLength.forEach(e => {
      planetAgesArray.push((this.solarAge * planetYearLength[2] / e).toFixed(2));
    });
    return planetAgesArray;
  }

  deathSwap() {
    if (this.solarAge > this.expectancy) {
      return "Years cheated death ";
    } else {
      return "Years left ";
    }
  }
}