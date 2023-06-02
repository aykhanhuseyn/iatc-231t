// Scopes

// 1. Block Scope
// 2. Function Scope

// Block Scope
// let age = 30;
// if (age > 18) {
// 	let firstName = 'John';
// 	var secondName = 'Alemdar';
// 	console.log('this is block scope', firstName);
// }
// {
// 	let firstName = 'John';
// 	console.log('this is block scope', firstName);
// }

// console.log('this is global scope', firstName, age); // ReferenceError: firstName is not defined
// console.log('this is global scope', secondName);

// Function Scope
function calcAge(birthYear) {
	var age = 2023 - birthYear;

	console.log('this is function scope', age);
}

calcAge(1993);

console.log('this is global scope', age);
