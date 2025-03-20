import { nanoid } from 'nanoid';
import Household from './models/Household.js';
import PowerPlant from './models/PowerPlant.js';

/**
 * This class is just a facade for your implementation, the tests below are using the `World` class only.
 * Feel free to add the data and behavior, but don't change the public interface.
 */

export class World {
  #households;
  #powerPlants;

  constructor() {
    this.#households = [];
    this.#powerPlants = [];
  }

  createPowerPlant() {
    const powerPlant = new PowerPlant(`P_${nanoid()}`);
    this.#powerPlants.push(powerPlant);
    return powerPlant;
    //throw new Error("Not Implemented");
  }

  createHousehold() {
    const household = new Household(`H_${nanoid()}`);
    this.#households.push(household);
    return household;
    //throw new Error("Not Implemented");
  }

  connectHouseholdToPowerPlant(household, powerPlant) {
    if (
      this.#households.includes(household) &&
      this.#powerPlants.includes(powerPlant)
    ) {
      household.connectPowerPlant(powerPlant);
    } else {
      console.log('Household or PowerPlant not found in the world');
    }
    //throw new Error("Not Implemented");
  }

  connectHouseholdToHousehold(household1, household2) {
    if (
      household1 !== household2 &&
      this.#households.includes(household1) &&
      this.#households.includes(household2)
    ) {
      household1.connectHousehold(household2);
    } else {
      console.log('Invalid household connection');
    }
    //throw new Error("Not Implemented");
  }

  disconnectHouseholdFromPowerPlant(household, powerPlant) {
    if (
      this.#households.includes(household) &&
      this.#powerPlants.includes(powerPlant)
    ) {
      household.disconnectPowerPlant(powerPlant);
    } else {
      console.log('Household or PowerPlant not found in the world');
    }
    //throw new Error("Not Implemented");
  }

  killPowerPlant(powerPlant) {
    if (this.#powerPlants.includes(powerPlant)) {
      powerPlant.kill();
    } else {
      console.log('PowerPlant not found in the world');
    }
    //throw new Error("Not Implemented");
  }

  repairPowerPlant(powerPlant) {
    if (this.#powerPlants.includes(powerPlant)) {
      powerPlant.repair();
    } else {
      console.log('PowerPlant not found in the world');
    }
    //throw new Error("Not Implemented");
  }

  householdHasEletricity(household) {
    if (this.#households.includes(household)) {
      return household.hasElectricity();
    } else {
      console.log('Household not found in the world');
    }
    //throw new Error("Not Implemented");
  }
}
