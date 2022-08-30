// A função countAnimals, caso não receba nenhum parâmetro, deve retornar todas as espécies e a quantidade de residentes de cada uma;
// A função countAnimals, caso receba como parâmetro um objeto com a chave specie, deve retornar a quantidade de animais daquela espécie;
// A função countAnimals, caso receba como parâmetro um objeto com as chaves specie e sex, deve retornar a quantidade de animais daquela espécie, no sexo selecionado.
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { residents } = require('../data/zoo_data').species;

function countAnimals(animal) {
  let animais = {};
  if (animal === undefined) {
    species.map((specie) => animais[specie.name] = specie.residents.length)
    return animais
  } else if (animal.sex === "female" || animal.sex === "male") {
    return species.find((specie) => specie.name.includes(animal.specie)).residents.filter((resident) => resident.sex === animal.sex).length
  } else if (animal.sex === undefined) {
    return species.find((specie) => specie.name.includes(animal.specie)).residents.length;
  }
}
    
console.log(countAnimals())

      
module.exports = countAnimals;
