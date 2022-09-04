const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const primeiroAnimal = data.employees.find((employee) => employee.id === id);
  const primeiroresp = primeiroAnimal.responsibleFor.find((employe) => employe);
  const especie1 = data.species.find((specie) => specie.id === primeiroresp).residents;
  const especie2 = especie1.map((espec) => Object.values(espec));
  return especie2.reduce((acc, curr) => {
    if (acc[2] > curr[2]) {
      return acc;
    } return curr;
  });
}

module.exports = getOldestFromFirstSpecies;
