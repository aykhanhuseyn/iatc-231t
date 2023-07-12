// OOP -> Object Oriented Programming

// 1. Encapsulation => data hiding
// 2. Inheritance => extends
// 3. Polymorphism => abstract class
// 4. Abstraction => abstract class

// 5. Composition => class inside class
// 6. Modularity => modules

// class User {
// 	#name = null;

// 	constructor(name, age) {
// 		// this.#private = 'private'; // SyntaxError: Private field '#private' must be declared in an enclosing class
// 		this.#name = name;
// 		this.age = age;
// 	}

// 	getName() {
// 		return this.#name;
// 	}
// 	setName(name) {
// 		this.#name = name;
// 	}

// 	getAge() {
// 		return this.age;
// 	}
// }

// let userName = null;

// function User(name, age) {
// 	userName = name;
// 	this.age = age;

// 	this.getName = function () {
// 		return userName;
// 	};
// 	this.setName = function (name) {
// 		userName = name;
// 	};

// 	this.getAge = function () {};
// }

// const user = new User('John', 25);

// console.log(user, user.getName());

// Inheritance

class Animal {
	constructor(name) {
		this.name = name;
	}

	say() {
		console.log(`I'm ${this.name}`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	say() {
		super.say();
		console.log(`I'm ${this.breed}`);
	}
}

// Polymorphism

/* abstract */ class Figure {
	constructor() {
		if (new.target === Figure) {
			throw new Error('Figure is abstract class');
		}
		this.type = 'figure';
	}

	area() {
		throw new Error('Method area() should be implemented');

		// if (this.type === 'figure') {
		//   throw new Error('Method area() should be implemented');
		// }
	}
}

class Square extends Figure {
	constructor(side) {
		super();
		this.side = side;
		this.type = 'square';
	}

	area() {
		return this.side ** 2;
	}
}

class Circle extends Figure {
	constructor(radius) {
		super();
		this.radius = radius;
		this.type = 'circle';
	}

	area() {
		return Math.PI * this.radius ** 2;
	}
}

// const figure = new Figure();
// figure.area();

const circle = new Circle(5);

// const figures = [new Figure(), new Square(10), new Circle(5)];
