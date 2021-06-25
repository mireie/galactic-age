const earthYearDays = 365.25;
export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
  }

  getMercuryAge() {
    const planetYearDays = .24 * earthYearDays;
    const planetAge = this.solarAge * earthYearDays / planetYearDays;
    return parseFloat(planetAge.toFixed(2));
  }
  // getVenusAge() {
  //   const planetYearDays = .62 * earthYearDays;
  //   const planetAge = this.solarAge * earthYearDays / planetYearDays;
  //   return parseFloat(planetAge.toFixed(2));
  // }
  // getMarsAge() {
  //   const planetYearDays = 1.88 * earthYearDays;
  //   const planetAge = this.solarAge * earthYearDays / planetYearDays;
  //   return parseFloat(planetAge.toFixed(2));
  // }
  // getJupiterAge() {
  //   const planetYearDays = 11.86 * earthYearDays;
  //   const planetAge = this.solarAge * earthYearDays / planetYearDays;
  //   return parseFloat(planetAge.toFixed(2));
  // }
  // earthTimeLeft() {
  //   const lifeExpect = 72.56;
  //   return lifeExpect - this.solarAge;
  // }

}