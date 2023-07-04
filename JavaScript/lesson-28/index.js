Promise.resolve().then(() => console.log(1)); // micro 1

queueMicrotask(() => console.log(12)); // micro 2

requestIdleCallback(() => {
	console.log(11);
}); // idle

setTimeout(() => console.log(2)); // macro 1

setTimeout(console.log, 0, 3); // macro 2

Promise.reject(4).catch(console.log); // micro 3

Promise.resolve(5).then(console.log); // micro 4

new Promise((resolve, reject) => {
	console.log(6); // main

	setTimeout(() => {
		console.log(7); // macro 3
		resolve(8); // macro 4
	}, 0);

	setTimeout(() => {
		console.log(9); // macro 5
		reject(10); // will not exec
	}, 1);
})
	.then(console.log) // micro 5 after macro 4
	.catch(console.log); // will not exec

//

// main
// 6

// micro
// 1
// 12
// 4
// 5

// macro
// 2
// 3
// 7

// micro
// 8

// macro
// 9

// idle
// 11
