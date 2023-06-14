// int[] array = new int[10];

// int 32bit
// length 10
// 32 x 10 = 320bit

// 0x00000000 => array[0]
// 0x00000004 => array[1]
// 0x00000008 => array[2]
// 0x0000000C => array[3]
// 0x00000010 => array[4]
// 0x00000014 => array[5]
// 0x00000018 => array[6]
// 0x0000001C => array[7]
// 0x00000020 => array[8]
// 0x00000024 => array[9]

// 0x00000000 => 0x00000028

// array[5] => 0x00000000 + 5 * 4 = 0x00000014

// array[11] = 10; // OutOfRangeException

// int[] newArray = new int[20];
// copy array to newArray
// newArray[0] = array[0];
// ...
// newArray[9] = array[9];
// array = null;

// java ArrayList
// c# List<T>

// Arrays in JavaScript

// var array = new Array(10);
// var array = new Array();
// var array = [];

const array1 = [1, 2, 3, 4];

const array2 = [];
array2[0] = 1;
array2[1] = 2;
array2[2] = 3;
array2[3] = 4;

const array3 = [];
array3.push(1);
array3.push(2);
array3.push(3);
array3.push(4);

array1.length; // 4
array2.length; // 4
array3.length; // 4

// console.log({ array1, array2, array3 });

// // delete array1[1];
// // delete array1[2];
// // array1.length; // 4
// // array1; // [1, undefined, undefined, 4] => [1, 4]
// // array1; // [1, empty x 2, 4] => [1, 4]
// // sparse array => array with empty elements
// // seyrək çoxluq => boş elementləri olan çoxluq

// // array1[1] = undefined;

// stack => LIFO
// queue => FIFO

// modify array
// array1.push(5); // add to end, and return new length O(1)
// array1.pop(); // remove from end, and return removed element O(1)

// modify array
// array1.unshift(0); // add to start, and return new length O(n)
// array1.shift(); // remove from start, and return removed element O(n)

let array = [];
// array.push(1, 2, 3, 54, 6, 7, 8, 9, 10);
array.push(
	{
		id: 1,
		name: 'Elmar',
		age: 20,
		salary: 1000,
	},
	{
		id: 2,
		name: 'Natig',
		age: 17,
		salary: 2000,
	},
	{
		id: 3,
		name: 'Nurlan',
		age: 60,
		salary: 3000,
	},
	{
		id: 4,
		name: 'Elmar',
		age: 18,
		salary: 4000,
	},
);

// array // [1, 2, 3, 54, 6, 7, 8, 9, 10]
// array.shift(); // 1
// array // [2, 3, 54, 6, 7, 8, 9, 10]

// { 0: 1, 1: 2, 2: 3, 4: 54, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10 }
// { 0: 2, 1: 3, 2: 54, 3: 6, 4: 7, 5: 8, 6: 9, 7: 10 }

// do not modify array
// array.slice(); // create copy of array O(n)
// array.slice(2, 4); // [3, 54] O(n)

// modify array
// array.splice(2, 1); // remove from index 2, and return removed element O(n)

// modify array
// sort array
// array.sort(); // O(n log n)
// array.sort((next, prev) => {
//   return prev - next;
// }) // in descending order
// array.sort((next, prev) => {
//   return  next - prev;
// }) // in ascending order

// modify array
// array.reverse(); // O(n)

// array.join(); // O(n)

// array.concat([11, 12, 13]); // O(n)
// concatenate => birləşdirmək
// return new array

// array.indexOf(54); // O(n) // return index, if not found return -1
// array.lastIndexOf(54); // O(n) // return index, if not found return -1
// array.includes(54, fromIndex); // O(n)

// array.find((item) => item === 54); // O(n)
// predicate => şərt
// return element, if not found return undefined
// array.find((obj) => {
//   if (obj.name === 'Elmar') {
//       return true;
//   }
//   return false;
// })
// array.findIndex((item) => item === 54); // O(n)

// array.filter((item) => item > 5); // O(n)
// return new array
// parameters: item, index, array

// array.forEach((item) => console.log(item)); // O(n)
// array.map((item) => item * 2); // O(n)

// array.reduce((acc, item) => acc + item, 0); // O(n)
// array.reduceRight((acc, item) => acc + item, 0); // O(n)

// array.every((item) => item > 5); // O(n)
// array.some((item) => item > 5); // O(n)

// array.fill(0); // O(n)
// let a = new Array(10).fill(0);

// array.copyWithin(0, 2, 4); // O(n)

// Array.from({ length: 10 }, (_, index) => index);

// Array.isArray(array); // O(1)
