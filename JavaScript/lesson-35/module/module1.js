console.log('module1.js');

// named export
export let firstName = 'Jack';

export let lastName = 'Smith';

export function sayHi() {
	console.log('hi from module1.js');
}

const PI = 3.14;

export { PI };

// default export
export default sayHi;
