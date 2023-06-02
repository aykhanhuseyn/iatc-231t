// Data types

// 1. Boolean => true, false (Boolean)
// console.log(1 > 2); // false
// console.log(1 < 2); // true
// Truthy => true, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Hello World", " ", {}, [], ...
// Falsy => false, null, undefined, "", 0, NaN
// console.log(Boolean(1)); // true

// 2. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 (Number)
// // Int => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// // Float => 1.1, 2.2, 3.3, 4.4, 5.5, 6.6
// Max Limit => 2 ** 53 - 1 => 9007199254740991
// Intersting Nese => 0.1 + 0.2 = 0.30000000000000004
// IEEE 754 => 0.1 + 0.2 = 0.30000000000000004
// FIX: 0.1 * 10 + 0.2 * 10 = cavab / 10
// 13_876_482_364_872_368

// 3. BigInt => 9007199254740991n (BigInt)
// console.log(9007199254740991n + 1n); // 9007199254740992n

// 4. String => "Hello World" (String)
// // Char => 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
// string is primitive type
// string is char array
// string is immutable
// let str = "Hello World";
// str = "Bye World";
// str[0] = "h";

// 5. Null => null (object)
// null is primitive type
// null is object
// null is immutable
// console.log(null === undefined); // false
// console.log(null == undefined); // true
// console.log(typeof null);
// 6. Undefined => undefined (undefined)

// 7. Symbol => Symbol("id") (Symbol)
// console.log(Symbol('id') === Symbol('id')); // false

// Complex Data Types
// 8. Object => { name: "John", age: 18 } (object)

// let age = 18; // Number
// let distanceToTheSun = 149600000n; // BigInt

// let firstName = null; // Null
// let lastName; // Undefined

// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1

// let b;
// console.log(b); // undefined

// complex data types
// reference type
// non-primitive type
// stored in heap
// var obj = { name: "John", age: 18 }
// 0x0000000000000001 => { name: "John", age: 18 }
// obj => 0x0000000000000001
// 0x0000000000000001 => { name: "John", age: 18 }

// // copying primitive data types
// let a = 1;
// let b = a;
// a = 2;
// console.log({ a, b }); // { a: 2, b: 1 }

// // Objects
// // copying complex data types
// let obj = {};
// let user = {
// 	name: 'John',
// 	age: 18,
// };
// let admin = user;
// // user => 0x0000000000000001
// // admin => 0x0000000000000001
// user.name = 'Jane';
// console.log({ user, admin }); // { user: { name: 'Jane', age: 18 }, admin: { name: 'Jane', age: 18 } }

let array = [];
// array = int[10]
// array => 0x0000000000000001
// 32 bit * 10 = 320 bit
// 0x0000000000000001 + 320 bit
// array[0] = 1;
// array[1] = 2;
// ...
// array[9] = 10;

// array in js
