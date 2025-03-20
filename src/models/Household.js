class Household {
  #connectedPlants = new Set();
  #connectedHouseholds = new Set();

  constructor(id) {
    this.id = id;
  }

  connectPowerPlant(plant) {
    this.#connectedPlants.add(plant);
  }

  disconnectPowerPlant(plant) {
    this.#connectedPlants.delete(plant);
  }

  connectHousehold(household) {
    if (household !== this) {
      this.#connectedHouseholds.add(household);
      household.#connectedHouseholds.add(this);
    }
  }

  disconnectHousehold(household) {
    this.#connectedHouseholds.delete(household);
    household.#connectedHouseholds.delete(this);
  }

  hasElectricity(visited = new Set()) {
    if (visited.has(this)) {
      return false;
    }
    visited.add(this);

    if ([...this.#connectedPlants].some((plant) => plant.isAlive)) {
      return true;
    }

    return [...this.#connectedHouseholds].some((household) =>
      household.hasElectricity(visited)
    );
  }

  getConnectedEntities() {
    return {
      connectedPlants: [...this.#connectedPlants].map((plant) => plant.id),
      connectedHouseholds: [...this.#connectedHouseholds].map(
        (household) => household.id
      ),
    };
  }
}

export default Household;
