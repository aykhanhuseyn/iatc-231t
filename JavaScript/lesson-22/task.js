// TASK 1: Greatest letter

// let letters = ['s', 'z', 'k']; // k, s, z
// let target = 'a';
// // result: 'k'

// let letters2 = ['s', 'z', 'k', 'a']; // a, k, s, z
// let target2 = 'k';
// // result: 's'

// let letters3 = ['a', 'c', 'e']; // a, B c, e
// let target3 = 'b';
// // result: 'c'

// let letters4 = ['a', 'b', 'c'];
// let target4 = 'x';
// // result: 'a'

// let targetCode = target4.charCodeAt(0);
// let min = Infinity;
// for (let char of letters4) {
// 	let charCode = char.charCodeAt(0);
// 	let diff = charCode - targetCode;

// 	if (diff > 0 && diff < min) {
// 		min = diff;
// 	}
// }

// let result =
// 	min === Infinity ? letters4[0] : String.fromCharCode(targetCode + min);

// console.log(result);

// TASK 2: Object Emplty or Not

// let obj = {
// 	name: 'John',
// 	age: 30,
// };
// let obj2 = {};
// console.log(Object.keys(obj).length === 0);
// console.log(Object.keys(obj2).length === 0);

// TASK 3: Clean nullish values from object

let obj = {
	name: 'John',
	age: null,
	phone: undefined,
	email: '',
	address: {
		street: null,
		city: undefined,
		country: '',
	},
};

console.log(obj);

// // function clean(object) {
// // 	for (let key in object) {
// // 		if (object[key] === null || object[key] === undefined) {
// // 			delete object[key];
// // 		}
// // 		if (typeof object[key] === 'object') {
// // 			clean(object[key]);
// // 		}
// // 	}
// // }

clean(obj);

// while (object) {
// 	for (let key in object) {
// 		if (object[key] === null || object[key] === undefined) {
// 			delete object[key];
// 		}
// 		if (typeof object[key] === 'object') {
// 			object = object[key];
// 			continue;
// 		}
// 	}
// 	object = null;
// }

// for (let key in obj) {
// if (obj[key] === null || obj[key] === undefined) {
// 	delete obj[key];
// }

// // obj[key] ?? delete obj[key];
// }

// TASK 4: Clean falsy values from object

// for (let key in obj) {
// 	if (!obj[key]) {
// 		delete obj[key];
// 	}

// 	// // obj[key] || delete obj[key];
// }

console.log(obj);
