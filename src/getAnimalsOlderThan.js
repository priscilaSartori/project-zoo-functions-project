// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
// Os animais devem ter essa idade ou serem mais velhos.
// Retorne um valor booleano.
const data = require('../data/zoo_data');
const { species, employees, hours, prices } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal)
     const animalVelho = animals.residents.every((resident) => resident.age >= age)
      return animalVelho
    }  

module.exports = getAnimalsOlderThan;
