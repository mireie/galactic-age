export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = parseFloat(solarAge);
  }
  
  getMercuryAge() {
    return this.solarAge * 1.24;
  }
}