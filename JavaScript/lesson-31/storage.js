// localStorage         largest     (10MB)          deleted when user clears browser data
// sessionStorage       medium      (5MB)           deleted when tab closed
// cookies              smallest    (4KB)           deleted when expires

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 30);
// localStorage.setItem('isMarried', true);

// localStorage.getItem('name');
// localStorage.getItem('age');
// localStorage.getItem('isMarried');

// localStorage.setItem('name', 'Jack');
// localStorage.setItem('age', 35);
// localStorage.setItem('isMarried', false);

// localStorage.removeItem('name');
// localStorage.removeItem('age');
// localStorage.removeItem('isMarried');

// localStorage.clear();

// const user = {
// 	name: 'John',
// 	age: 30,
// 	isMarried: true,
// };

// function saveData(key, value) {
// 	const JSONstring = JSON.stringify(value);
// 	localStorage.setItem(key, JSONstring);
// }

// function getData(key) {
// 	const JSONstring = localStorage.getItem(key);
// 	const data = JSON.parse(JSONstring);
// 	return data;
// }

// saveData('user', user);

// const userData = getData('user');
// console.log({ userData });

// document.cookie = 'name=John';

// function setCookie(
// 	key,
// 	value,
// 	expInDays = 1,
// 	domain = window.location.hostname,
// 	path = '/',
// ) {
// 	const expires = new Date();
// 	expires.setDate(expires.getDate() + expInDays * 24 * 60 * 60 * 1000);

// 	const cookie = `${key}=${value}; expires=${expires.toUTCString()}; domain=${domain}; path=${path}`;
// 	document.cookie = cookie;
// }

window.addEventListener('storage', (event) => {
	console.log(event);
});
