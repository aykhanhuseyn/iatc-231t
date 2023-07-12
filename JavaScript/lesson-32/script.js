// // for (let i = 0; i < 100_000_000; i++) {
// // 	console.log(i);
// // }

// console.log('Hello world!');

// // Uncaught TypeError: Cannot set properties of null (setting 'textContent')
// document.querySelector('h1').textContent = 'Hello world!';

// Class in JavaScript

// function User(name) {
// 	this.name = name;

// 	this.sayHello = function () {
// 		console.log(`Hello, ${this.name}!`);
// 	};
// }

class Human {
	constructor(name) {
		console.log('Human constructor');
		this.name = name;
	}

	sayHello() {
		console.log(`Hello, ${this.name}!`);
	}

	getAge() {
		return this.age;
	}
}

// inheritance
class User extends Human {
	// internal property
	age = Math.floor(Math.random() * 100);

	static age = Math.random();

	static {
		console.log('Static block');

		this.age = Math.random();
		this.type = 'USER';
		this.language = 'EN';

		this.think = () => {
			console.log('I am thinking');
		};
	}

	// private property
	#password = '123456';

	// static property
	static type = 'USER';

	constructor(name, age) {
		console.log('User constructor');
		super(name);
		// this.age = age;
	}
}

// console.log(typeof User);

// const user = new User('John', 22);

// console.log(user);
// console.log(user.name);
// console.log(user.sayHello());

class Animal {
	#id = crypto.randomUUID();
	#password;
	name;
	legs = 4;

	constructor(name, legs) {
		this.name = name;
		this.legs = legs;
	}

	eat() {
		console.log(`My name is ${this.name}, I am eating`);
	}

	getId(username, password) {
		if ((username === 'admin', password === '123456')) {
			return this.#id;
		} else {
			return null;
		}
	}

	setId(id) {
		this.#id = id;
	}

	// getter
	// calculated property
	get id() {
		return this.#id;
	}

	set id(id) {
		this.#id = id;
	}

	get password() {
		return atob(this.#password);
	}

	set password(password) {
		this.#password = btoa(password);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name, 4);
	}

	bark() {
		console.log('Bark!');
	}
}

const dog = new Dog('Bobik');

console.log(dog);
console.log(dog.name);
console.log(dog.bark());
console.log(dog.eat());

class Cat extends Animal {
	constructor(name) {
		super(name, 4);
	}

	meow() {
		console.log('Meow!');
	}
}

const cat = new Cat('Barsik');

console.log(cat);
console.log(cat.name);
console.log(cat.meow());
console.log(cat.eat());
