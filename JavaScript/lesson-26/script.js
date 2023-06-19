// function getFactorial(n) {
// 	if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * getFactorial(n - 1);
// 	}
// }

// const getFactorial = function (n) {
// 	if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * getFactorial(n - 1);
// 	}
// };

// function name: 'getFactorial'
// function parameter: 'n'
// function parameter types: 5

// ARGUMENTS - array-like object

function getArgs() {
	console.log(arguments);
}

const getArgs = () => {
	console.log(arguments);
};

// arrow function does not have arguments
// arrow function does not have this
// arrow function does not have prototype
// arrow function can not be used as constructor
// arrow function can not be used as method
// arrow function can not be used as generator
// arrow function can not be used with new.target

// function getArguments() {
// 	// console.log('isArray', Array.isArray(arguments));
// 	// console.log('arguments 23', arguments);
// 	// arguments[0] = 100;
// 	// console.log('arguments 27', arguments);
// 	// for (let i = 0; i < arguments.length; i++) {
// 	// 	console.log(arguments[i], i, arguments);
// 	// }
// 	// const args = Array.from(arguments);
// 	// args.forEach(function (item, index, array) {
// 	// 	console.log({ item, index, array });
// 	// });
// }

// function sayHello(fname) {
// 	// can not redeclare fname
// 	// let fname = 'Jack';
// 	// var fname = 'Jack'; // var works

// 	// arguments[0] = 'Jack';
// 	// fname = 'Jack';

// 	// console.log(Object.prototype.toString.call(arguments)); // [object Arguments]

// 	console.log('Hello,', fname);
// }

// function spreadArgs(arg1, arg2, ...args) {
// 	console.log({ arg1, arg2, args });
// }

// function sum(a, b) {
//   // parameters
// 	return a + b;
// }

// let x = 1;
// let y = 2;
// sum(x, y); // arguments

// parameter vs argument
// parameter - variable in function declaration
// argument - value passed to function

// sum(1)(2)(3);
// sum(1, 2, 3);

// function sum(a, b, c) {
// 	// console.log(a + b + c);
// 	return a + b + c;
// }

// function createUser(username, password) {
// 	const user = {
// 		username: username,
// 		password: password,
// 	};
// 	return user;
// }

// function createGetAge(date) {
// 	return function (birthDate) {
// 		return date.getFullYear() - birthDate.getFullYear();
// 	};
// }

// const getAge = createGetAge(new Date());
// console.log(getAge(new Date(1990, 0, 1)));

// console.log(createGetAge(new Date())(new Date(1990, 0, 1)));

// CURRYING
// function sum(a) {
// 	return function (b) {
// 		return function (c) {
// 			return a + b + c;
// 		};
// 	};
// }
// console.log(sum(1)(2)(3));

// function createTaxCalculator(tax) {
// 	return function (price) {
// 		return price * tax;
// 	};
// }
// const calcTax = createTaxCalculator(0.2);
// console.log(calcTax(100));

// RECURSION
// function getFactorial(n) {
// 	debugger;
// 	if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * getFactorial(n - 1);
// 	}
// }
// getFactorial(3);

// HOF - Higher Order Function

// function getAge(fname, date) {
// 	const age = new Date().getFullYear() - date.getFullYear();
// 	console.log('getAge', fname, age);
// }

// function loggedGetAge(callback, fname, date) {
// 	console.log('loggedGetAge', fname, date);
// 	return callback(fname, date);
// }

// loggedGetAge(getAge, 'Jack', new Date(1990, 0, 1));

// CALLBACK
// [1, 2, 3].forEach(function (item, index, array) {
// 	console.log({ item, index, array });
// });

// function callbackFunction(item, index, array) {
// 	console.log({ item, index, array });
// }
// [1, 2, 3].forEach(callbackFunction);

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

// (function () {
// 	'use strict';

// 	console.log('IIFE');

// 	console.log(this);

// 	// this.name = 'Jack';

// 	const user = {
// 		fname: 'Jack',
// 		age: 30,
// 	};

// 	const { fname, age } = user;

// 	console.log(fname, age);
// })();

// NEW KEYWORD

// function User(fname, age) {
// 	// // this = {}
// 	// console.log(this);
// 	this.fname = fname;
// 	this.age = age;
// 	this.sayHello = function (hello) {
// 		console.log(this);
// 		console.log(`${hello}, ${this.fname}`);
// 	};
// 	this.sayBye = () => {
// 		console.log('Bye,', this.fname);
// 	};
// 	// // return this
// }

// const user = new User('Jack', 30);
// const user2 = new User('Jane', 55);

// console.log('user instance', user);

// const sayHello = user.sayHello;
// console.log(user.sayHello('salam'));
// console.log(sayHello('salam'));

// CALL METHOD
// console.log(sayHello.call(user, 'salam'));
// console.log(sayHello.call(user2, 'salam'));

// APPLY METHOD
// console.log(sayHello.apply(user, ['sagol']));
// console.log(sayHello.apply(user2, ['sagol']));

// BIND METHOD
// const user3 = new User('Polat', 40);
// const sayHelloToPolat = sayHello.bind(user3, 'selam');
// sayHelloToPolat('salam');

// DEFAULT PARAMETERS
// function sayHello(fname = 'John', helloStr = 'Hello') {
// 	console.log(`${helloStr}, ${fname}`);
// }
// function sayHello(fname, helloStr) {
// 	// fname = fname ?? 'John';
// 	// helloStr = helloStr ?? 'Hello';

// 	// arguments[0] = arguments[0] ?? 'John';
// 	// arguments[1] = arguments[1] ?? 'Hello';

// 	// console.log(`${helloStr}, ${fname}`);
// 	console.log(`${helloStr ?? 'Hello'}, ${fname ?? 'John'}`);
// }

// function sum(a = 0, b = 0) {
// 	console.log({ a, b });
// 	return a + b;
// }
// sum();
// sum(null, undefined);

// sayHello('Jack', 'Salam');
// sayHello('Jack');
// sayHello();
// console.log(sayHello.length);

// FUNCTION CONSTRUCTOR

// const sum = new Function('a', 'b', 'return a + b');
// const sum = Function('a', 'b', 'return a + b');
// Function(...parameters, functionBody);

// console.log(sum(1, 2));

// function sum(a, b) {
// 	return a + b;
// }
