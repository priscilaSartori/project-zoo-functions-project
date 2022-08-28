const data = require('../data/zoo_data');
// A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;
// A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;
// A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs.

function getSpeciesByIds(...ids) {
  const { species } = data;
    const especie = [];
    ids.forEach( (id) => {
        especie.push(species.filter((animal) => id === animal.id)[0])
    })
    return especie;
  }
  

module.exports = getSpeciesByIds;
