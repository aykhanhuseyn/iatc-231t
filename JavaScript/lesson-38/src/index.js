import greet from './greet.js';
import './styles/index.scss';

const array = [1, 2, 3, 4, 5];

array.forEach((_, index) => console.log(array.at(index)));

console.log('Hello, world!');

greet('John');

// @isTestable(true)
// class MyClass {}

// function isTestable(value) {
// 	return function decorator(target) {
// 		target.isTestable = value;
// 	};
// }

const tuple = #[1, 'hello', true];

console.log(tuple);
