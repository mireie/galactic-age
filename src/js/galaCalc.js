const earthYearDays = 365.25;
export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
  }

  getMercuryAge() {
    let planetYearDays = .24 * earthYearDays;
    let planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getVenusAge() {
    let planetYearDays = .62 * earthYearDays;
    let planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getMarsAge() {
    let planetYearDays = 1.88 * earthYearDays;
    let planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  getJupiterAge() {
    let planetYearDays = 11.86 * earthYearDays;
    let planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }

}