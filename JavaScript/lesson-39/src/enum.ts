import { Employee as BaseEmployee } from './index';
import type { Usercik } from './init';

enum Direction {
	Up,
	Down,
	Left,
	Right,
}

console.log(Direction); // { '0': 'Up', '1': 'Down', '2': 'Left', '3': 'Right', Up: 0, Down: 1, Left: 2, Right: 3 }

console.log(Direction.Up); // 0

const CreatedDirectionObject = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,

	'0': 'Up',
	'1': 'Down',
	'2': 'Left',
	'3': 'Right',
};

enum Month {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

export enum Role {
	USER = 'user',
	ADMIN = 'admin',
	MODERATOR = 'moderator',
}

type AuthUser = {
	name: string;
	role: Role;
};
const user: AuthUser = {
	name: 'John',
	role: Role.USER,
};

if (user.role === Role.USER) {
	console.log('User');
}

interface Employee extends BaseEmployee {
	role: Role;
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
	role: Role.USER,
};

Role.ADMIN; // 'admin'

// enum Name Should Be In Pascal Case and Singular
// enum VALUES SHOULD BE IN UPPER_CASE

const usercik: Usercik = {
	name: 'John',
};
