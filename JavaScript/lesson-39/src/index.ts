// import type { Role } from './enum';
import { Role } from './enum';

// Role is not value, it is type
console.log({ Role });

type Person = {
	name: string;
	age: number;
	getAge: () => number;
	getName: () => string;
	role?: Role;
};

// type Person = {
// 	name: string;
// 	age: number;
// 	getAge: () => number;
// 	getName: () => string;
// };

const person: Person = {
	name: 'John',
	age: 30,
	getAge() {
		return this.age;
	},
	getName() {
		return this.name;
	},
	// role: Role.USER,
};

const age = person.getAge();
console.log(age);

const firstName = person.getName?.();
console.log(firstName);

interface User {
	name: string;
	age: number;
	getAge: () => number;
}

export interface Employee extends User {
	id: number;
	salary: number;
}

const employee: Employee = {
	name: 'John',
	age: 30,
	getAge() {
		return this.age;
	},
	id: 1,
	salary: 1000,
	getName() {
		return this.name;
	},
};

// it extends first User interface
interface User {
	// age: bigint;
	getName: () => string;
}
