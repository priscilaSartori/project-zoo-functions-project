const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parâmetros, retorna grade de horários', () => {
    const grade = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    const expected = grade;
    expect(actual).toEqual(expected);
  });

  it('Verifica se o zoo está aberto ou fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const actual1 = getOpeningHours('Tuesday', '09:00-AM');
    const actual2 = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    const expected1 = 'The zoo is open';
    const expected2 = 'The zoo is closed';
    expect(actual).toBe(expected);
    expect(actual1).toBe(expected1);
    expect(actual2).toBe(expected2);
  });

  it('caso não haja nenhum dia da semana especificados deverá ser lançado um error', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('caso não haja abreviação igual a AM ou PM especificados deverá ser lançado um error', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Se a hora passada não for número retorna error', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Se a hora não for entre 0 e 12 retona error', () => {
    expect(() => getOpeningHours('Friday', '15:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Se os minutos não forem entre 0 e 59 retona error', () => {
    expect(() => getOpeningHours('Friday', '11:70-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
