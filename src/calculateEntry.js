const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let somaEntrada = {};
  somaEntrada = { child: 0, adult: 0, senior: 0 };
  entrants.filter((entrant) => {
    if (entrant.age < 18) {
      somaEntrada.child += 1;
    } else if (entrant.age < 50) {
      somaEntrada.adult += 1;
    } else if (entrant.age >= 50) {
      somaEntrada.senior += 1;
    }
  });
  return somaEntrada;
}

function valor(entrants) {
  let pago = 0;
  entrants.filter((entrant) => {
    if (entrant.age < 18) {
      pago += data.prices.child;
    } else if (entrant.age < 50) {
      pago += data.prices.adult;
    } else if (entrant.age >= 50) {
      pago += data.prices.senior;
    }
  });
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
