const seedrandom = require("seedrandom");
const capitalize = require("capital-case").capitalCase;
const animalNames = require("./animalNames");

const numAnimalNames = animalNames.length;

module.exports = (seed = undefined) => {
  if (seed === undefined) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return capitalize(
      "anonymous " + animalNames[getRandomInt(0, numAnimalNames - 1)]
    );
  } else {
    const random = seedrandom(seed);
    return capitalize(
      "anonymous " + animalNames[Math.floor(random() * (numAnimalNames - 1))]
    );
  }
};
