// 1. Make a constructor function.
// Check it with instanceof operator
function User() {}

const user = new User();

console.log('user instanceof User', user instanceof User); // true

// 2. Write two functions, one for constructing User, other for Employee.
// Employee instance should be instance of User too

function User() {}
function Employee() {}

const e = new Employee();

console.log('e instanceof Employee', e instanceof Employee); // true
console.log('e instanceof User', e instanceof User); // true

// 3. Make function, which can create a new object with new keyword.
// But object should be instance of another object

function User() {}
function Weirdo() {}

const weirdo = new Weirdo();

console.log('weirdo instanceof Weirdo', weirdo instanceof Weirdo); // false
console.log('weirdo instanceof User', weirdo instanceof User); // true

// 4. Use generator function to generate 'count' numbers from 'start'

function* rangeGenerator(start, count, step) {}

function range(start, count, step) {}

range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(2020, 3); // [2020, 2021, 2022]

// 5. Make a function to return array of last 3 years: {years: month[]} or {years: quarters[]} or years[]

// type Year = 1970 ...;
// type Month = 0 ... 11;
// type Quarter = 1 ... 4;

function lastThreeYears(date, mode) {}

const date = new Date(2023, 5, 30);

lastThreeYears(date);
// const res = [2020, 2021, 2022]

lastThreeYears(date, 'year');
// const res = [2020, 2021, 2022]

lastThreeYears(date, 'month');
// const res = {
//   2020: [6, 7, 8, 9, 10, 11],
//   2021: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   2022: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   2023: [0, 1, 2, 3, 4, 5],
// }

lastThreeYears(date, 'quarter');
// const res = {
//   2020: [2, 3, 4],
//   2021: [1, 2, 3, 4],
//   2022: [1, 2, 3, 4],
//   2023: [1],
// }

// 6. What will we see in console

new Promise((resolve) => {
	setTimeout(() => {
		resolve();
	});
}).then(() => {
	console.log('promise');
});

setTimeout(() => {
	console.log('timeout');
});

console.log('hello');

requestIdleCallback(() => {
	console.log('requestIdleCallback');
});

// 7. What will we see in console

setTimeout(() => console.log('timeout 1'));

Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

Promise.resolve().then(() => console.log('promise 1'));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 3'));

// 8. What will we see in console

globalThis.name = 'foo';

function log(name) {
	new Function('\tconsole.log(name);')();
}

log('bar');

// 9. What will we see in console

const obj = {
	name: 'foo',
	log: function () {
		console.log(this.name);
	},
};

const log = obj.log;

log();

// 10. Write this function to make it work

const person = {
	name: 'foo',
	age: 20,
	[Symbol.toPrimitive](hint) {
		// your code here ...
	},
};

console.log(Number(person) + 10); // 30
`${person} is ${Number(person) > 18 ? 'adult' : 'child'}`; // 'foo is adult'
