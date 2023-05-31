// console.log('Hello World!');

// firstName = 'John';
// secondName = 'Doe';

// console.log(firstName);
// console.log(secondName);

// paymentAmount = 5000;
// taxPercentage = 18;

// console.log((paymentAmount * taxPercentage) / 100);

// paymentAmount = 11430;

// console.log((paymentAmount * taxPercentage) / 100);

// isOlderThan18 = true;

// isOlderThan18 = false;

// declaration
// firstName = 'John';

console.log('firstName: ', firstName);
// console.log('lastName: ', lastName); // ferenceError: lastName is not defined

// declaration && initialization
// declaration
var firstName; // init with undefined
// initialization
firstName = 'John';

// declaration
var firstName = 'John';
var firstName = 'Jack';
var firstName = 'Jane';

var firstName = 'Jill';
firstName = 'Jason';

// tempral dead zone => TDZ
// console.log('middleName: ', middleName); // ReferenceError: Cannot access 'middleName' before initialization

let middleName = 'Doe';
// // declaration
// let middleName;
// // initialization
// middleName = 'Doe';

// let middleName = 'Doe'; // SyntaxError: Identifier 'middleName' has already been declared

console.log('middleName: ', middleName);

middleName = 'Dove';

console.log('middleName: ', middleName);

const motherland = 'Azerbaijan';
// motherland = 'Turkey'; // TypeError: Assignment to constant variable.
// const motherland = 'Turkey'; // SyntaxError: Identifier 'motherland' has already been declared

// declaration
let paymentAmount = 5000;
// declaration
const taxPercentage = 18;

console.log((paymentAmount * taxPercentage) / 100);

// expression
paymentAmount = 11430;

console.log((paymentAmount * taxPercentage) / 100);

// CONDITIONS

if (1) {
	console.log('1 is true');
}

if (0) {
	console.log('if 0 is true');
} else {
	console.log('else 0 is false');
}

let age = 18;

// if (age >= 18) {
// 	console.log('You are still young');
// } else if (age >= 10) {
// 	console.log('You are baby');
// } else if (age < 10) {
// 	console.log('You are child');
// } else {
// 	console.log('You will never see this message');
// }

// 0 - 3 => infant
// 3 - 5 => baby
// 6 - 11 => child
// 12 - 18 => young
// 18 - 25 => adult
// 25 - 60 => middle age
// 60 - 100 => old
// 100+ => died

// if (age >= 0 && age < 3) {
// 	console.log('infant');
// } else if (age >= 3 && age < 5) {
// 	console.log('baby');
// } else if (age >= 5 && age < 11) {
// 	console.log('child');
// } else if (age >= 11 && age < 18) {
// 	console.log('young');
// } else if (age >= 18 && age < 25) {
// 	console.log('adult');
// } else if (age >= 25 && age < 60) {
// 	console.log('middle age');
// } else if (age >= 60 && age < 100) {
// 	console.log('old');
// } else {
// 	console.log('died');
// }

let role = 'admin';

switch (role) {
	case 'super-admin':
		console.log('You are super admin');
	case 'admin':
		console.log('You are admin');
		break;
	case 'user':
		console.log('You are user');
	case 'guest':
		console.log('You are guest');
		break;
	default:
		console.log('You are not registered');
}

switch (age) {
	case 0:
	case 1:
	case 2:
		console.log('infant');
		break;
	case 3:
	case 4:
		console.log('baby');
		break;
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
		console.log('child');
		break;
	default:
		console.log('You are dead');
}

try {
	console.log('try block');
	// throw new Error('My Error');
	// throw 'My Error';
	// throw { message: 'My Error' };
	// throw true;
	// throw 1;
	// throw null;
	// throw undefined;
	// throw Symbol('My Error');
	// throw function () {};
	// throw ['My Error'];
	throw new Date();
	console.log('after throw');
	// throw new RegExp();
	// throw NaN;
	// throw Infinity;
	// throw -Infinity;
	// throw 0 / 0;
	// throw 1 / 0;
	// throw -1 / 0;
	// throw 1 / 'a';
	// throw
} catch (error) {
	console.log(error);
}
