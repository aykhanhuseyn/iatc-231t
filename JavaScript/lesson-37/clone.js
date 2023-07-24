const worker = new Worker('w.js');

const user = {
	name: 'John',
	age: 30,
	children: [
		{
			name: 'Jane',
			age: 5,
		},
	],
};

console.log('user', user);

worker.postMessage(user);

// worker.addEventListener('message', function ({ data }) {
// 	console.log('message');
// 	console.log('data', data);
// 	console.log('user', user);
// 	console.log('user === data', user === data);
// });

const user2 = structuredClone(user);
console.log('user2', user2);

console.log('user === user2', user === user2);
console.log(
	'user.child === user2.child',
	user.children[0] === user2.children[0],
);

function shallowCopy(obj) {
	return { ...obj };
}
const user3 = shallowCopy(user);

console.log('user === user3', user === user3);
console.log(
	'user.child === user3.child',
	user.children[0] === user3.children[0],
);

// const obj = {
// 	name: 'John',
// };
// console.log('obj', obj);
// function changeName(obj) {
// 	obj.name = 'Jane';
// 	return obj;
// }
// const obj2 = changeName(obj);
// console.log('obj', obj2);
// console.log('obj === obj2', obj === obj2);
