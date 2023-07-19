// default import
// import salamDe from './module1.js';
// named import
// import { firstName, lastName } from './module1.js';

// import salamDe, { firstName, lastName } from './module1.js';

// namespace import
import * as module1 from './module1.js';

console.log(module1);

console.log('module2.js');

// salamDe();
module1.default();

// let firstName = 'Jack';

// console.log(firstName, lastName);
console.log(module1.firstName, module1.lastName);

// function sayHi() {
// 	console.log('hi from module2.js');
// }
