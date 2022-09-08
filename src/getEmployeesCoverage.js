const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function locations(responsible) {
  const especieResp = [];
  const indice = responsible[0];
  for (let index = 0; index < indice.length; index += 1) {
    const animais = species.filter((specie) => indice[index].includes(specie.id));
    const nomeAnimal = animais.map((animal) => animal.location);
    especieResp.push(nomeAnimal[0]);
  }
  return especieResp;
}

function locationsT(responsible) {
  const especieResp = [];
  for (let index = 0; index < responsible.length; index += 1) {
    const animais = species.filter((specie) => specie.id.includes(responsible[index]));
    const nomeAnimal = animais.map((animal) => animal.location);
    especieResp.push(nomeAnimal[0]);
  }
  return especieResp;
}

function buscaNome(colaborador) {
  const valueColab = Object.values(colaborador)[0];
  const firstLN = data.employees.filter((employee) => employee
    .firstName === valueColab || employee.lastName === valueColab);
  if (firstLN) {
    const responsible = firstLN.map((first) => first.responsibleFor);
    return {
      id: `${firstLN.map((first) => first.id)}`,
      fullName: `${firstLN.map((prim) => prim.firstName)} ${firstLN.map((prim) => prim.lastName)}`,
      species: species.filter(({ id }) => responsible[0].includes(id)).map(({ name }) => name),
      locations: locations(responsible),
    };
  }
}

function buscaId(colaborador) {
  const valueColab = Object.values(colaborador)[0];
  const relEmp = data.employees.filter((employee) => employee.id === valueColab);
  const responsible = relEmp.map((first) => first.responsibleFor);
  return {
    id: `${relEmp.map((first) => first.id)}`,
    fullName: `${relEmp.map((first) => first.firstName)} ${relEmp.map((first) => first.lastName)}`,
    species: species.filter(({ id }) => responsible[0].includes(id)).map(({ name }) => name),
    locations: locations(responsible),
  };
}

function buscaTodos() {
  const relEmployees = data.employees.filter((employee) => employee);
  const todos = [];
  for (let index = 0; index < relEmployees.length; index += 1) {
    const ind = relEmployees[index];
    todos.push({
      id: `${ind.id}`,
      fullName: `${ind.firstName} ${ind.lastName}`,
      species: species.filter(({ id }) => ind.responsibleFor.includes(id)).map(({ name }) => name),
      locations: locationsT(ind.responsibleFor),
    });
  }
  return todos;
}

function coberturaNome(colaborador) {
  if (species.map((specie) => specie.name.includes(colaborador))) {
    return buscaNome(colaborador);
  } 
  throw new Error ('Informações inválidas');
}

function coberturaId(colaborador) {

  if (employees.some((empl) => empl.id === colaborador.id)) {
    return buscaId(colaborador);
  } if (employees.some((empl) => empl.id !== colaborador)) {
    throw new Error ('Informações inválidas');
  }
}


function getEmployeesCoverage(colaborador) {
  if (colaborador === undefined) {
    return buscaTodos();
  } if (Object.keys(colaborador).includes('name')) {
    return coberturaNome(colaborador);
  } if (Object.keys(colaborador).includes('id')) {
    return coberturaId(colaborador);
  }
}

module.exports = getEmployeesCoverage;
