export class GalacticAge {
  constructor(solarAge) {
    this.solarAge = solarAge;
  }
  
  getMercuryAge() {
    return this.soalarAge * 1.24;
  }
}