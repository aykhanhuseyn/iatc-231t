// generator

// function* generator() {
// 	console.log('start');
// 	yield 1;
// 	console.log('middle');
// 	yield 2;
// 	console.log('end');
// 	yield 3;
// 	console.log('finish');
// }

// const gen = generator();

// console.log(gen);

// console.log('1', gen.next()); // { value: 1, done: false }
// console.log('2', gen.next()); // { value: 2, done: false }
// console.log('3', gen.next()); // { value: 3, done: false }
// console.log('4', gen.next()); // { value: undefined, done: true }
// console.log('5', gen.next()); // { value: undefined, done: true }

// const array = Array.from(generator()); // [1, 2, 3]
// console.log('array', array);

// function* generator2(limit = 100) {
// 	for (let i = 1; i < limit; i++) {
// 		yield i;
// 	}
// 	// yield 1000;
// }

// const gen2 = generator2(10);

// console.log('1', gen2.next());
// console.log('2', gen2.next());
// console.log('3', gen2.next());
// console.log('4', gen2.next());
// console.log('5', gen2.next());
// console.log('6', gen2.next());
// console.log('7', gen2.next());
// console.log('8', gen2.next());
// console.log('9', gen2.next());
// console.log('10', gen2.next());
// console.log('11', gen2.next());

// const array2 = Array.from(generator2(10));
// console.log('array2', array2);

// function* fibonacci() {
// 	let first = 0;
// 	let second = 1;

// 	yield 1;

// 	while (true) {
// 		const current = first + second;
// 		first = second;
// 		second = current;

// 		yield current;
// 	}
// }

// const fib = fibonacci();

// console.log('1', fib.next());
// console.log('2', fib.next());
// console.log('3', fib.next());
// console.log('4', fib.next());
// console.log('5', fib.next());
// console.log('6', fib.next());
// console.log('7', fib.next());
// console.log('8', fib.next());
// console.log('9', fib.next());
// console.log('10', fib.next());
// console.log('11', fib.next());
// console.log('12', fib.next());
// console.log('13', fib.next());

// const array3 = Array.from(fibonacci());

// console.log('array3', array3);

// async generator

// async function* asyncGenerator() {
// 	console.log('start');
// 	yield fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
// 		res.json(),
// 	);
// 	console.log('middle');
// 	yield fetch('https://jsonplaceholder.typicode.com/todos/2').then((res) =>
// 		res.json(),
// 	);
// 	console.log('end');
// 	yield fetch('https://jsonplaceholder.typicode.com/todos/3').then((res) =>
// 		res.json(),
// 	);
// 	console.log('finish');
// }

// const asyncGen = asyncGenerator();

// console.log('1', asyncGen.next().then(console.log));
// console.log('2', asyncGen.next().then(console.log));
// console.log('3', asyncGen.next().then(console.log));
// console.log('4', asyncGen.next().then(console.log));
// console.log('5', asyncGen.next().then(console.log));

// async function fakeAsync() {
// 	// return new Promise((resolve) => {
// 	// 	setTimeout(() => {
// 	// 		resolve(1);
// 	// 	}, 1000);
// 	// });

// 	return setTimeout(() => {
// 		return 1;
// 	}, 1000);
// }

// fakeAsync().then(console.log);

// let i = 0;

// const interval = setInterval(() => {
// 	console.log('interval', i++);
// }, 1000);

// setTimeout(() => {
// 	console.log('timeout', interval);
// 	clearInterval(interval);
// }, 10000);
