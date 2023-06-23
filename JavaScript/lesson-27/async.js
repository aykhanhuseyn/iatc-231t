// multi threading

// single threading

// JavaScript is single threaded

// concurrency

// call stack

function sayHi() {
	console.log('Hi');
}

async function sayHello() {
	console.log('Hello');
}

async function count(limit = 100) {
	let c = 1;

	for (let i = 1; i < limit; i++) {
		c *= i;
	}

	console.log('Done', c);
}

// const res = fetch('https://jsonplaceholde.typicode.com/todos/1')
// 	.then((response) => response.json())
// 	.then((json) => console.log(json))
// 	.then(() => console.log('Hello'))
// 	.catch((error) => console.log('this is error', error.message))
// 	.finally(() => console.log('finally, everything is finished 💕'));

async function fetchTodos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

		if (response.status === 404) {
			throw new Error('Not found');
		} else {
			const json = await response.json();
			console.log('json', json);
		}
	} catch (error) {
		console.log('error', error.message);
	} finally {
		console.log('finally');
	}
}

// fetchTodos();

// const res2 = sayHello();

// setTimeout(() => {
// 	console.log('setTimeout');
// }, 0);

// setInterval(() => {
// 	console.log('setInterval');
// }, 1000);

// console.log('res', res);
// console.log('res2', res2);

// count(4_000_000_000);

sayHi();

// async Function
// asynchronous

// await

// Promise

// pending
// fulfilled
// rejected

// event loop
// microtask queue / macrotask queue
// callstack

// setTimeout, setInterval

// Generator Function

// async Generator Function

// // Set, Map, WeakSet, WeakMap
