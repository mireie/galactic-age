export class GalacticAge {
  constructor(solarAge, expectancy) {
    this.solarAge = parseFloat(solarAge);
    this.expectancy = parseFloat(expectancy);
    this.planetYears = [87.66, 226.46, 365.25, 686.67, 4331.87, 10760.27, 30684.65, 60189.55, 90797.50];
  }

  yearsLeft() {
    let yearsLeftArray = [];
    this.planetYears.forEach(e => {
      let expectedYears = this.expectancy * this.planetYears[2] / e;
      let yearsRemain = expectedYears - this.solarAge * this.planetYears[2] / e;
      if (yearsRemain < 0) {
        yearsRemain *= -1;

      }
      yearsLeftArray.push(yearsRemain.toFixed(2));
    });

    return yearsLeftArray;
  }

  getPlanetAges() {
    let planetAgesArray = [];
    this.planetYears.forEach(e => {
      planetAgesArray.push((this.solarAge * this.planetYears[2] / e).toFixed(2));
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