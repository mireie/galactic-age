const earthYearDays = 365.25;
const planetYearLength = [87.66, 226.46, 365.25, 686.67, 4331.87];
export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
  }

  getMercuryAge() {
    const planetYearDays = .24 * earthYearDays;
    const planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getVenusAge() {
    const planetYearDays = .62 * earthYearDays;
    const planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getMarsAge() {
    const planetYearDays = 1.88 * earthYearDays;
    const planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getJupiterAge() {
    const planetYearDays = 11.86 * earthYearDays;
    const planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  earthTimeLeft() {
    const lifeExpect = 72.56;
    return lifeExpect - this.solarAge;
  }
  yearsLeft(expectency) {
    let yearsLeftArray = [];
    planetYearLength.forEach(e => {
      let expectedYears = expectency * earthYearDays / e;
      let yearsRemain = expectedYears - this.solarAge * earthYearDays / e;
      if (yearsRemain < 0) {
        yearsRemain *= -1;
      }
      yearsLeftArray.push(yearsRemain.toFixed(2));
    });

    return yearsLeftArray;
  }

  galactiCalc() {
    
  }

}