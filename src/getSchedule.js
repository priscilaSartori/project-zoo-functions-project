const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const tuesday = species.filter((specie) => specie.availability.includes('Tuesday'));
const wednesday = species.filter((specie) => specie.availability.includes('Wednesday'));
const thursday = species.filter((specie) => specie.availability.includes('Thursday'));
const Friday = species.filter((specie) => specie.availability.includes('Friday'));
const Saturday = species.filter((specie) => specie.availability.includes('Saturday'));
const sunday = species.filter((specie) => specie.availability.includes('Sunday'));
const dayWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animaisName = data.species.map((specie) => specie.name);

function semana() {
  const diaSemana = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
      exhibition: Saturday.map((tues) => tues.name) },
    Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
      exhibition: sunday.map((tues) => tues.name) },
    Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
      exhibition: thursday.map((tues) => tues.name) },
    Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
      exhibition: tuesday.map((tues) => tues.name) },
    Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
      exhibition: wednesday.map((tues) => tues.name) },
    Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
      exhibition: Friday.map((tues) => tues.name) },
  };
  return diaSemana;
}

function dias(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  } {
    const grade1 = Object.entries(data.hours).filter((dia) => dia);
    const horario = grade1.filter((diasGrade) => diasGrade[0] === scheduleTarget)
      .map((grade) => grade[1]).find((open) => open.open);
    const office = `Open from ${horario.open}am until ${horario.close}pm`;
    const availability = data.species
      .filter((specie) => specie.availability.includes(scheduleTarget))
      .map((availability1) => availability1.name);
    const resultado = { [scheduleTarget]: { officeHour: office, exhibition: availability } };
    return resultado;
  }
}

function animais(scheduleTarget) {
  const specieAnimais = species.filter((specie) => specie.name === scheduleTarget);
  const availability = specieAnimais.map((avaib) => avaib.availability);
  return availability[0];
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return semana();
  } if (dayWeek.includes(scheduleTarget)) {
    return dias(scheduleTarget);
  } if (animaisName.includes(scheduleTarget)) {
    return animais(scheduleTarget);
  } return semana();
}

module.exports = getSchedule;
