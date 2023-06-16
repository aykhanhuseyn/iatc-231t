// Array.from({ length: Math.ceil((2023 - 1990) / 4) }, (element, index) => {
//   return 1990 + ( index * 4 );
// })

// matrix
// let matrixA = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// let matrixB = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// let matrixC = matrixA.map((_element, index) => {
// 	return matrixA[index].map((_, innerIndex) => {
// 		return matrixA[index][innerIndex] + matrixB[index][innerIndex];
// 	});
// });

// Array Grouping

let array = [
	{ name: 'john', age: 18 },
	{ name: 'jane', age: 18 },
	{ name: 'jack', age: 22 },
];

// array.group((element) => element.age);

// let grouped = {
// 	18: [
// 		{ name: 'john', age: 18 },
// 		{ name: 'jane', age: 18 },
// 	],
// 	22: [{ name: 'jack', age: 22 }],
// };

// POLYFILL GROUP
if (!Array.prototype.group) {
	Array.prototype.group = function (callback) {
		let result = {};

		this.forEach((element, index, array) => {
			const key = callback(element, index, array);

			if (result[key]) {
				result[key].push(element);
			} else {
				result[key] = [element];
			}
		});

		return result;
	};
}

let grouped = array.group((element) => element.age);

let array2 = [
	{ name: 'john', age: 18 },
	{ name: 'jane', age: 18 },
	{ name: 'jack', age: 22 },
	{ name: 'joel', age: 18 },
	{ name: 'jay', age: 22 },
	{ name: 'jin', age: 18 },
	{ name: 'jin', age: 18 },
];

let filtered = array2.filter((element) => element.age === 18);

console.log(filtered);

let array3 = [1, 2, 3, null, undefined, 4, 5, '', 6, 0, 7];

// grouping by age with reduce
array2.reduce((accumulator, current) => {
	const key = current.age;

	if (key in accumulator) {
		accumulator[key].push(current);
	} else {
		accumulator[key] = [current];
	}

	return accumulator;
}, {});

// enhanced filter function

const filter = Array.prototype.filter;

// Array.prototype.filter = function (callback) {
// 	if (typeof callback === 'function') {
// 		return filter.call(this, (element, index, array) => {
// 			return callback(element, index, array);
// 		});
// 	}
// 	// { age: 18 }
// 	// { age: 22, name: 'jack' }
// 	if (typeof callback === 'object') {
// 		return filter.call(this, (element) => {
// 			return Object.keys(callback).every((key) => {
// 				return element[key] === callback[key];
// 			});
// 		});
// 	}
// };
