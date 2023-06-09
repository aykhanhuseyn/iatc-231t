// TASK: 5
// count the occurrence of a number in an array

// let arr1 = ['el', 'nikki', 'el', 'nik', 'nik', 'nik', 'el'];
// let arr2 = ['el', 'nikki', 'el', 'nik', 'nik', 'el', 'alba', 'messi'];
// let obj = {};

// for (let nm of arr1) {
// 	if (nm in obj) {
// 		obj[nm]++;
// 	} else {
// 		obj[nm] = 1;
// 	}
// }

// for (let nm of arr2) {
// 	if (nm in obj) {
// 		obj[nm]--;
// 	} else {
// 		obj[nm] = -1;
// 	}
// }

// console.log(obj);

// TASK: 6
// find the missing number in a given integer array of 1 to 100

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
// 	sum += arr3[i];
// }
// for (let i = 0; i < arr4.length; i++) {
// 	sum -= arr4[i];
// }
// console.log(sum);

// let obj = {};

// for (let el of arr3) {
// 	if (el in obj) {
// 		obj[el]++;
// 	} else {
// 		obj[el] = 1;
// 	}
// }

// for (let el of arr4) {
// 	if (el in obj) {
// 		obj[el]--;
// 	} else {
// 		obj[el] = -1;
// 	}
// }

// for (let [key, value] of Object.entries(obj)) {
// 	if (value) {
// 		console.log('key', key);
// 	}
// }

// console.log(obj);

// TASK: 7
// find the nth fibonacci number

let n = 10;

let first = 0,
	second = 1;

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

console.log(first);
console.log(second);

for (let i = 2; i < 10; i++) {
	// let next = first + second;
	// first = second;
	// second = next;

	// [first, second] = [second, first + second];

	// debugger;

	second = first + second;
	first = second - first;

	// console.log(first, second);
	console.log(second);
}

console.log(second);
