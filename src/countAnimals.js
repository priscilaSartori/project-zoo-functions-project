const data = require('../data/zoo_data');

function contSex(animal) {
  if (Object.values(animal).includes('female')) {
    const specieName = data.species.find((specie) => specie.name.includes(animal.specie));
    return specieName.residents.filter((resident) => resident.sex === 'female').length;
  } if (Object.values(animal).includes('male')) {
    const specieName = data.species.find((specie) => specie.name.includes(animal.specie));
    return specieName.residents.filter((resident) => resident.sex === 'male').length;
  }
}

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((sum, specie) => ({
      ...sum, [specie.name]: specie.residents.length }), {});
  } if (Object.keys(animal).includes('sex')) {
    return contSex(animal);
  } return data.species.find((specie) => specie.name.includes(animal.specie)).residents.length;
}

module.exports = countAnimals;
