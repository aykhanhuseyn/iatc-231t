// (function () {
// 	'use strict';

// 	function sayHello(firstName) {
// 		// firstName = 'John';
// 		// var firstName = 'John';

//     // let firstName = 'John';
// 		// const firstName = 'John';

// 		console.log('Hello', firstName);
// 	}

// 	sayHello('Jack');

// 	// function sayHello() {
// 	// 	console.log('this', this);
// 	// 	console.log('Hello');
// 	// }
// 	// sayHello();

// 	// const sayHello2 = () => {
// 	// 	console.log('this', this);
// 	// 	console.log('Hello');
// 	// };
// 	// sayHello2();

// 	// const Person = () => {}
// 	// const person = new Person() // TypeError: Person is not a constructor

// 	// function Person() {
// 	// 	// const person = {}
// 	// 	// const person = Object.create(Person.prototype);
// 	// 	console.log('this', this);
// 	// 	this.name = 'John';
// 	// 	// person.name = 'John';
// 	// 	this.age = 30;
// 	// 	// person.age = 30;

// 	// 	// return person;
// 	// }

// 	// const person = new Person();

// 	// console.log('person', person);
// 	// console.log('person instanceof Person', person instanceof Person);
// 	// console.log('person instanceof Object', person instanceof Object);
// 	// console.log(
// 	// 	'person.__proto__ === Person.prototype',
// 	// 	person.__proto__ === Person.prototype,
// 	// );
// 	// console.log(
// 	// 	'person.__proto__ === Object.prototype',
// 	// 	person.__proto__ === Object.prototype,
// 	// );

// 	// delete in use strict mode
// 	// const person = {};
// 	// Object.defineProperty(person, 'name', {
// 	// 	value: 'John',
// 	// 	writable: false,
// 	// 	enumerable: false,
// 	// 	configurable: false,
// 	// });
// 	// console.log('person', person);
// 	// delete person.name;
// 	// console.log('delete person.name', delete person.name);
// 	// console.log('person', person);
// })();

// (function () {
// 	function sayHello() {
// 		console.log('this', this);

// 		console.log('Hello');
// 	}

// 	sayHello();

// 	const sayHello2 = () => {
// 		console.log('this', this);
// 		console.log('Hello');
// 	};
// 	sayHello2();

// 	// delete in non use strict mode
// 	// const person = {};
// 	// Object.defineProperty(person, 'name', {
// 	// 	value: 'John',
// 	// 	writable: false,
// 	// 	enumerable: false,
// 	// 	configurable: false,
// 	// });
// 	// console.log('person', person);
// 	// delete person.name;
// 	// console.log('delete person.name', delete person.name);
// 	// console.log('person', person);
// })();
