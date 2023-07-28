interface User {
	name: string;
	age: number;
	// readonly age: number;
	id?: number;
}

// type User = {
// 	name: string;
// };

// union type
type Union = User | null;

let obj: Union = null;

if (Math.random() > 0.5) {
	obj = {
		name: 'John',
		age: 30,
	};
}

// intersection type
type Intersection = User & {
	age: number;
};

let obj2: Intersection = {
	name: 'John',
	age: 30,
};

// type guard
function isUser(obj: Union): obj is User {
	return obj !== null; // true
}

if (isUser(obj)) {
	obj.name = 'John';
}

// obj is possibly null
// obj.name = 'John';

type PartialUser = Partial<User>;
const obj3: User = {
	name: 'John',
	age: 30,
};
const obj4: PartialUser = {
	// name: 'John',
	age: 33,
};
obj3.name = 'Jack';
obj3.age = 33;

type ReadonlyUser = Readonly<User>;
const obj5: ReadonlyUser = {
	name: 'John',
	age: 30,
};
// obj5.name = 'Jack';

type RequiredUser = Required<User>;
const obj6: RequiredUser = {
	name: 'John',
	age: 30,
	id: 1,
};

type PickUser = Pick<User, 'name' | 'age'>;
const obj7: PickUser = {
	name: 'John',
	age: 30,
	// id: 1,
};

// drop id
type OmitUser = Omit<User, 'id'>;
const obj8: OmitUser = {
	name: 'John',
	age: 30,
	// id: 1,
};

type Role = 'admin' | 'user' | 'manager';
type Managers = Exclude<Role, 'user'>; // 'admin' | 'manager'
type Managers2 = Extract<Role, 'admin' | 'manager'>; // 'admin' | 'manager'
