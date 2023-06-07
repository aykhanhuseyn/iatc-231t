// HOIST
// 1
// 2 console.log('a', a); // reference error
// 3
// 4 let a = 5; // from 1 to 4 it is TDZ of a variable
// 5 console.log('a', a); // 5

// TDZ => temporal dead zone

// console.log('a', a);
// let a = 5;

// console.log('b', b); // undefined
// var b = 6;
