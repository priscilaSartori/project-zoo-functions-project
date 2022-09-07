const data = require('../data/zoo_data');

const NE = data.species.filter(({ location }) => location === 'NE');
const NW = data.species.filter(({ location }) => location === 'NW');
const SE = data.species.filter(({ location }) => location === 'SE');
const SW = data.species.filter(({ location }) => location === 'SW');

const sexFNE = NE.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'female').map(({ name }) => name) }));
const sexFNW = NW.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'female').map(({ name }) => name) }));
const sexFSE = SE.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'female').map(({ name }) => name) }));
const sexFSW = SW.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'female').map(({ name }) => name) }));
const sexMNE = NE.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'male').map(({ name }) => name) }));
const sexMNW = NW.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'male').map(({ name }) => name) }));
const sexMSE = SE.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'male').map(({ name }) => name) }));
const sexMSW = SW.map((e) => ({ [e.name]: e.residents.filter((resident) => resident
  .sex === 'male').map(({ name }) => name) }));

const sortFNE = NE.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'female')
  .map(({ name }) => name).sort() }));
const sortFNW = NW.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'female')
  .map(({ name }) => name).sort() }));
const sortFSE = SE.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'female')
  .map(({ name }) => name).sort() }));
const sortFSW = SW.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'female')
  .map(({ name }) => name).sort() }));
const sortMNE = NE.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'male')
  .map(({ name }) => name).sort() }));
const sortMNW = NW.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'male')
  .map(({ name }) => name).sort() }));
const sortMSE = SE.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'male')
  .map(({ name }) => name).sort() }));
const sortMSW = SW.map((e) => ({ [e.name]: e.residents.filter(({ sex }) => sex === 'male')
  .map(({ name }) => name).sort() }));

function semParametro(options) {
  return {
    NE: NE.map(({ name }) => name),
    NW: NW.map(({ name }) => name),
    SE: SE.map(({ name }) => name),
    SW: SW.map(({ name }) => name),
  };
}

function includeNames(options) {
  const objNE = [];
  const objNW = [];
  const objSE = [];
  const objSW = [];
  NE.forEach((e) => objNE.push({ [e.name]: e.residents.map((resident) => resident.name) }));
  NW.forEach((e) => objNW.push({ [e.name]: e.residents.map((resident) => resident.name) }));
  SE.forEach((e) => objSE.push({ [e.name]: e.residents.map((resident) => resident.name) }));
  SW.forEach((e) => objSW.push({ [e.name]: e.residents.map((resident) => resident.name) }));
  return {
    NE: objNE,
    NW: objNW,
    SE: objSE,
    SW: objSW,
  };
}

function sorted(options) {
  const objNE = [];
  const objNW = [];
  const objSE = [];
  const objSW = [];
  NE.forEach((e) => objNE.push({ [e.name]: e.residents.map((resident) => resident.name).sort() }));
  NW.forEach((e) => objNW.push({ [e.name]: e.residents.map((resident) => resident.name).sort() }));
  SE.forEach((e) => objSE.push({ [e.name]: e.residents.map((resident) => resident.name).sort() }));
  SW.forEach((e) => objSW.push({ [e.name]: e.residents.map((resident) => resident.name).sort() }));
  return {
    NE: objNE,
    NW: objNW,
    SE: objSE,
    SW: objSW,
  };
}

function includesSex(options) {
  if (options.sex === 'female') {
    return {
      NE: sexFNE,
      NW: sexFNW,
      SE: sexFSE,
      SW: sexFSW,
    };
  } if (options.sex === 'male') {
    return {
      NE: sexMNE,
      NW: sexMNW,
      SE: sexMSE,
      SW: sexMSW,
    };
  }
}

function includesSort(options) {
  if (options.sex === 'female') {
    return {
      NE: sortFNE,
      NW: sortFNW,
      SE: sortFSE,
      SW: sortFSW,
    };
  } if (options.sex === 'male') {
    return {
      NE: sortMNE,
      NW: sortMNW,
      SE: sortMSE,
      SW: sortMSW,
    };
  }
}

function semIncludeNames(options) {
  if (options.sorted) {
    return semParametro(options);
  } if (options.sex) {
    return semParametro(options);
  }
}

function sexSort(options) {
  if (!options.sex) {
    return includeNames(options);
  }
  if (options.sex) {
    return includesSex(options);
  }
}

function sortSex(options) {
  if (options.sex) {
    return includesSort(options);
  }
  if (!options.sex) {
    return sorted(options);
  }
}

function comIncludesNames(options) {
  if (!options.sorted) {
    return sexSort(options);
  } if (options.sorted) {
    return sortSex(options);
  }
}

function getAnimalMap(options) {
  if (!options) {
    return semParametro(options);
  } if (!options.includeNames) {
    return semIncludeNames(options);
  } if (options.includeNames) {
    return comIncludesNames(options);
  }
}

module.exports = getAnimalMap;
