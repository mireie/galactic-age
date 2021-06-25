const planetYearLength = [87.66, 226.46, 365.25, 686.67, 4331.87];

export class Planet {
  constructor(name, yearLength) {
    this.name = name;
    this.yearLength = yearLength;
  }
}
const Mercury = new Planet("Mercury",87.66);
const Venus = new Planet("Venus",226.46);
const Earth = new Planet("Earth",365.25);
const Mars = new Planet("Mars",686.67);
const Jupiter = new Planet("Jupiter",4331.87);
const Saturn = new Planet("Saturn",10,760.27);
const Uranus = new Planet("Uranus",30,684.65);
const Neptune = new Planet("Neptune",60,189.55);
const Pluto = new Planet("Pluto",90,797.50);

export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
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
  yearsLeft(expectency) {
    let yearsLeftArray = [];
    planetYearLength.forEach(e => {
      let expectedYears = expectency * planetYearLength[2] / e;
      let yearsRemain = expectedYears - this.solarAge * planetYearLength[2] / e;
      if (yearsRemain < 0) {
        yearsRemain *= -1;
      }
      yearsLeftArray.push(yearsRemain.toFixed(2));
    });

    return yearsLeftArray;
  }

  galactiCalc(expectency) {
    this.remain = this.yearsLeft(expectency);
    console.log(this);
    return this;
  }

  getPlanetAges() {
    let planetAgesArray = [];
    planetYearLength.forEach(e => {
      planetAgesArray.push((this.solarAge * planetYearLength[2] / e).toFixed(2));
    })
    return planetAgesArray;
  }
}