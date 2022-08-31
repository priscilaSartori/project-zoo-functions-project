const { TestScheduler } = require('jest');
const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('sem parâmetros, retorna undefined', () => {
        const actual = handlerElephants();
        const expected = undefined;
        expect(actual).toBe(expected);
    })
    it('Verifica se o parâmetro é uma string', () => {
        const actual = handlerElephants(true);
        const actual2 = handlerElephants(1);
        const actual3 = handlerElephants({});
        const actual4 = handlerElephants([])
        const expected = 'Parâmetro inválido, é necessário uma string'
        expect(actual).toBe(expected);
        expect(actual2).toBe(expected);
        expect(actual3).toBe(expected);
        expect(actual4).toBe(expected);
    })

    it('retorna o id dos elefantes', () => {
        const elephantsId = "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5";
        const actual = handlerElephants("id");
        const expected = elephantsId;
        expect(actual).toBe(expected);
    })
    
    it('retorna a espécie', () => {
        const actual = handlerElephants("name");
        const expected = "elephants";
        expect(actual).toBe(expected);
    })
    it('retorna a popularidade dos elefantes', () => {
        const actual = handlerElephants("popularity");
        const expected = 5;
        expect(actual).toBe(expected);
    })
    it('retorna a localização dos elefantes dentro do Zoológico', () => {
        const actual = handlerElephants("location");
        const expected = "NW";
        expect(actual).toBe(expected);
    })
    it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
        const actual = handlerElephants("availability");
        const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
        expect(actual).toEqual(expected);
    })
    it('retorna um array com a relação com nome, sexo e idade dos elefantes', () => {
        const actual = handlerElephants("residents");
        const expected = [{name: 'Ilana', sex: 'female', age: 11,}, {name: 'Orval', sex: 'male', age: 15, }, { name: 'Bea', sex: 'female', age: 12, }, { name: 'Jefferson',sex: 'male', age: 4, },];
        expect(actual).toEqual(expected);
    })

    it('Verifica se retorna a quantidade de elefantes ', () => {
        const actual = handlerElephants("count");
        const expected = 4;
        expect(actual).toBe(expected);
    })

    it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
        const actual = handlerElephants("names");
        const expected = [ 'Ilana', 'Orval', 'Bea', 'Jefferson' ];
        expect(actual).toEqual(expected);
    })

    it('Verifica se retorna a média de idade dos elefantes', () => {
        const actual = handlerElephants("averageAge");
        const expected = 10.5;
        expect(actual).toEqual(expected);
    })

    it('retorna null se nenhum dos cases atenderem ao parâmetro', () => {
        const actual = handlerElephants("girafa");
        const expected = null;
        expect(actual).toEqual(expected);
    })
});
