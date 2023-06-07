// const john = {
// 	name: 'John',
// 	age: 32,
// };

// const jane = new Object();
// jane.name = 'Jane';
// jane.age = 28;

// const azerbaijani = {
// 	motherLang: 'Azerbaijani',
// };

// const ganjali = Object.create(azerbaijani);
// ganjali.canDoSohbet = true;

// Prototype
// const jack = Object.create(ganjali);
// jack.name = 'Jack';
// jack.age = 30;

// Prototype
// jane.__proto__ = azerbaijani;

// console.log(john);
// console.log(jane);
// console.log(jack);

console.clear();

// const orphan = Object.create(null);
// orphan.name = 'Orphan';
// orphan.age = 2;
// console.log(orphan);

console.clear();

// Object.is()
// Object.is(1, 1); // true
// Object.is(1, '1'); // false
// Object.is(NaN, NaN); // true

console.clear();

// Object.hasOwn()
// Object.prototype.hasOwnProperty()
// jack.hasOwnProperty('name'); // true
// jack.hasOwnProperty('motherLang'); // false
// Object.hasOwn(jack, 'name'); // true
// Object.hasOwn(jack, 'motherLang'); // false
// 'name' in jack; // true
// 'motherLang' in jack; // true

console.clear();

// Object.assign()
// const lucas = { name: 'Lucas' };
// const secondReference = lucas;
// const elClone = Object.assign({}, lucas);
// const elClone2 = { ...lucas };

console.clear();

// Object.defineProperty()
// const user1 = {};
// Object.defineProperty(user1, 'name', {
// 	value: 'John',
// 	enumerable: true, // default false
// 	configurable: true, // default false
// 	writable: true, // default false
// });

// let key = 'my secret key';
// Object.defineProperty(user1, 'key', {
// 	get() {
// 		if (
// 			window.location.href ===
// 			'http://127.0.0.1:5500/JavaScript/lesson-21/index.html'
// 		) {
// 			return key.split('').reverse().join('');
// 		}
// 		return key;
// 	},
// 	set(value) {
// 		key = value;
// 	},
// 	enumerable: true,
// });

// Descriptor     => Attribute

// value          => data
// enumerable     => false => like hidden
// configurable   => false => can't delete
// writable       => false => can't change
// get            => () => value
// set            => (value) => void

// const user2 = { ...user1 };
// const user3 = Object.assign({}, user1);

// console.log({ user1, user2, user3 });

console.clear();

// Object.freeze()
// Object.seal()
// Object.preventExtensions()

// const user1 = {
// 	name: 'John',
// 	age: 32,
// };
// const user2 = Object.freeze(user1); // non-writable, non-configurable
// const user3 = Object.seal(user1); // non-configurable
// const user4 = Object.preventExtensions(user1); // non-extensible

// console.log(user1);

// console.log(Object.isFrozen(user2));
// console.log(Object.isSealed(user3));
// console.log(Object.isExtensible(user4));

console.clear();

// const user = {
// 	name: 'John',
// 	age: 32,
// };

// console.log('keys', Object.keys(user));
// console.log('values', Object.values(user));
// console.log('entries', Object.entries(user));

// const entries = [
// 	['name', 'John'],
// 	['age', 32],
// 	['job', 'Developer'],
// 	['salary', 3000],
// ];
// console.log(Object.fromEntries(entries));
// let obj = {};
// entries.forEach(([key, value]) => {
// 	obj[key] = value;
// });
// console.log(obj);

console.clear();

// const developer = {
// 	canWriteCode: true,
// };

// const user = Object.create(developer, {
// 	name: {
// 		value: 'John',
// 		enumerable: true,
// 		configurable: true,
// 		writable: true,
// 	},
// 	age: {
// 		value: 32,
// 	},
// });

// user.salary = 3000;
// Object.defineProperty(user, 'job', {
// 	value: 'Developer',
// });

// let key = 'salam';
// user[key] = 1;
// user[Symbol('id')] = 1;

// for (const k in user) {
// 	console.log('k', k);
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.getOwnPropertyDescriptor(user, 'job'));

// console.log(Object.getOwnPropertyDescriptors(user));

// console.log(Object.getOwnPropertyNames(user));

// console.log(Object.getOwnPropertySymbols(user));
