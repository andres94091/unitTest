const { assert } = require('chai');
const controller = require('../api/playGround/controller');
const dummyData = require('../api/playGround/dummy');

describe('controllador de dummy test', () => {
	before(() => {
		console.log('antes de las pruebas');
	});
	after(() => {
		console.log('despues de las pruebas');
	});
	describe('Return funcion average', () => {
		before(() => {
			console.log('antes de las pruebas de average');
		});
		after(() => {
			console.log('despues de las pruebas de averagge');
		});
		beforeEach(() => {
			console.log('antes de cada prueba');
		});
		afterEach(() => {
			console.log('despues de cada prueba');
		});
		it('should return a averrage of array of numbers', () => {
			const result = controller.average(dummyData.ArrayAverrage);
			assert.equal(result, 2.5);
		});
		it('return of averrage should be a number', () => {
			const result = controller.average(dummyData.ArrayAverrage);
			assert.typeOf(result, 'number');
		});
	});
});
