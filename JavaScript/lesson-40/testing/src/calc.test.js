import { describe, test, assert, expect, should } from 'vitest';
import Calc from './calc.js';

should();

describe('testing calc functions', () => {
	test('tesing add func', () => {
		const calc = new Calc();
		assert(calc.add(1).value === 1, 'add func should return 3');

		assert.isNumber(calc.value, 'add func should return number');
	});

	test('tesing add func return values', () => {
		const calc = new Calc();

		const sum = calc.add(0.1).add(0.2).value;

		console.log({ sum });

		assert(sum === 0.3, 'add func should return 0.3');
	});
});

describe('testing calc formatted with expect', () => {
	test('tesing add func', () => {
		const calc = new Calc();
		calc.add(1);

		expect(calc.formatted).toBe('1,00');
	});

	test('tesing add func return values', () => {
		const calc = new Calc();

		const sum = calc.add(0.1).add(0.2).value;

		expect(sum).toBe(0.3);
	});

	test('tesing add func return type', () => {
		const calc = new Calc();

		const sum = calc.add(0.1).add(0.2).value;

		expect(sum).to.be.a('number');
	});

	test('tesing add func converting to pvimitive value', () => {
		const calc = new Calc(0, 0);

		console.log({ calc });

		const sum = calc.add(900).add(1000).add(10).add(8);

		const year = `year is ${sum}`;

		console.log({ year });

		expect(year).to.be.a('string').and.to.be.equal('year is 1918');
	});
});

describe('deep equals', () => {
	test('object equals', () => {
		const obj1 = { a: 1, b: 2 };
		const obj2 = { a: 1, b: 2 };

		expect(obj1).to.deep.equal(obj2);
	});

	test('array equals', () => {
		const arr1 = [1, 2, 3];
		const arr2 = [1, 2, 3];

		expect(arr1).to.deep.equal(arr2);

		expect(arr1).to.be.an('array').and.to.have.lengthOf(3);
	});
});

describe('testing calc formatted with should', () => {
	test('tesing add func', () => {
		const calc = new Calc();
		calc.add(1);

		calc.formatted.should.be.equal('1,00');
	});
});
