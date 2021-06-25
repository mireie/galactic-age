export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
  }
  
  getMercuryAge() {
    return this.solarAge * 1.24;
  }

  getVenusAge() {
    return this.solarAge * 1.62;
  
  }
  getMarsAge() {
    return this.solarAge * .88;
  }
}