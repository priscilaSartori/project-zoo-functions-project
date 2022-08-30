const data = require('../data/zoo_data');
// A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];
const { species, employees, hours, prices} = require('../data/zoo_data');

// A função isManager deve retornar true se o ID passado for de uma pessoa gerente;
// A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;
const isManager = (id) => managers.some((manager) => manager === id);
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))

// A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manager2 = employees.filter((employee) => employee.managers.some((manager) => manager === managerId)
    )
    return manager2.map((manager) => `${manager.firstName} ${manager.lastName}`)
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

module.exports = { isManager, getRelatedEmployees };
