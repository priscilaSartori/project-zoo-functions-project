const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const somaEntrada = { child: 0, adult: 0, senior: 0 };
  const age = entrants.map((entrant) => entrant.age);
  for (let index = 0; index < age.length; index += 1) {
    if (age[index] < 18) {
      somaEntrada.child += 1;
    } else if (age[index] < 50) {
      somaEntrada.adult += 1;
    } else if (age[index] >= 50) {
      somaEntrada.senior += 1;
    }
  }
  return somaEntrada;
}

function valor(entrants) {
  let pago = 0;
  const age = entrants.map((entrant) => entrant.age);
  for (let index = 0; index < age.length; index += 1) {
    if (age[index] < 18) {
      pago += data.prices.child;
    } else if (age[index] < 50) {
      pago += data.prices.adult;
    } else if (age[index] >= 50) {
      pago += data.prices.senior;
    }
  }
  return Number(parseFloat(pago).toFixed(2));
}

function calculateEntry(entrants) {
  let ingressos = 0;
  if (!entrants) {
    ingressos = 0;
  } else if (Object.entries(entrants).length === 0) {
    ingressos = 0;
  } else {
    const valorTotal = valor(entrants);
    return valorTotal;
  }
  return ingressos;
}

module.exports = { calculateEntry, countEntrants };
