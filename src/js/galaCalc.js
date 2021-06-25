const planetYearLength = [87.66, 226.46, 365.25, 686.67, 4331.87];

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