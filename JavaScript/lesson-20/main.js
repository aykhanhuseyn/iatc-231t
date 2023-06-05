// Operators

// 1. Assignment operators
// =, +=, -=, *=, /=, %=

// let a = 55;
// console.log('a   ', a);
// console.log('a = 6   ', (a = 6));
// console.log('a += 6 => a = a + 6  ', (a += 6));
// console.log('a -= 6   ', (a -= 6));
// console.log('a *= 6   ', (a *= 6));
// console.log('a /= 6   ', (a /= 6));
// console.log('a %= 6   ', (a %= 6));

// 2. Comparison operators
// ==, ===, !=, !==, >, <, >=, <=
// equal, loose equal => equal => type conversion
// strict equal => equal and type
// not equal => loose not equal => ! =
// strict not equal => ! = =
// greater than => >
// less than => <
// greater than or equal => >=
// less than or equal => <=

// console.log('5 == 5   ', 5 == 5);
// console.log('5 === 5   ', 5 === 5);
// console.log('5 == "5"   ', 5 == '5');
// console.log('5 === "5"   ', 5 === '5');

// 3. Arithmetic operators
// +, -, *, /, %, ++, --
// post increment => a++
// pre increment => ++a

// 4. Bitwise operators
// &, |, ^, ~, <<, >>, >>>
// & => and
// | => or
// ^ => xor
// ~ => not
// << => left shift
// >> => right shift
// >>> => zero fill right shift => unsigned right shift

// 0b101 => binary => 5
// 0o101 => octal => 65
// 0x101 => hex => 257

// 5 > 2 => 101
// &
// 7 > 2 => 111
// =
// 5 > 2 => 101

// bitwise numbers max 32 bit

// console.log(0b10110 & 0b11100);
// console.log(0b10110 | 0b11100);
// console.log(0b10110 ^ 0b11100);
// console.log(~0b10110, '=>', 0b01001);
// console.log(0b10110 >> 1);
// console.log(0b10110 << 1);
// console.log(0b10110 >>> 1);

// 5. Logical operators
// &&, ||, !
// and => && => short circuit
// or => ||
// not => !

// 6. String operators
// +, +=
// + => concatenation

// 7. Conditional (ternary) operator
// condition ? expr1 : expr2

// 8. Comma operator
// , => comma operator => evaluates each of its operands (from left to right) and returns the value of the last operand.

// 9. Unary operators
// delete, typeof, void

// 10. Relational operators
// in, instanceof

// in => returns true if the specified property is in the specified object or its prototype chain.
// console.log('name' in { name: 'John' });

// instanceof => returns true if the specified object is of the specified object type.
// console.log([] instanceof Array);

// 11. Spread operator
// ...

// 12. Destructuring assignment
// {a, b} = {a: 1, b: 2}
// [a, b] = [1, 2]
// [a, b, ...rest] = [1, 2, 3, 4, 5]
// ({a, b} = {a: 1, b: 2})
// ({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4})

// 12.1 Rest operator

// 13. Grouping operator
// ( )

// 14. new
// new

// String and Number

// Operations on Arrays and Objects

let arr = [1, 2, 3, 4, 5];

// classic for
// for (let i = 0; i < arr.length; i++) {
// 	console.log('index', i, arr[i]);
// }

// for..of => value
// for (let item of arr) {
// 	console.log(item);
// }

// for..in => index
// for (let item in arr) {
// 	console.log(item);
// }

// forEach
// arr.forEach((item, index) => {
// 	console.log(item, index);
// });

let obj = { name: 'John', age: 25 };

// for..in => index
// for (let key in obj) {
// 	console.log(key, obj[key]);
// }

// string
let str1 = 'Hello World';
let str2 = 'Hello World';
let str3 = `Hello World`;
let str4 = new String('Hello World');
