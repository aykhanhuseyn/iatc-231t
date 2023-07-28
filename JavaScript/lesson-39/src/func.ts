type GetUserFn = (id: number) => User | null;

const getUser: GetUserFn = (id) => {
	return Math.random() > 0.5
		? null
		: {
				name: 'John',
				age: 30,
		  };
};

// function overloading
function logUser(user: User): string;
function logUser(user: null): void;

function logUser(user: any): any {
	if (user === null) {
		console.log('User is null');
		return;
	}

	console.log(user.name);
	return 'test';
}

const user = getUser(1);

const res = logUser(null);

const res2 = logUser({
	name: 'John',
	age: 30,
});

type TypesFnOverload = {
	(id: number): User;
	(id: string): User;
	(id: null): null;
};

const getUser2: TypesFnOverload = (id: any): any => {
	if (typeof id === 'number') {
		return {
			name: 'John',
			age: 30,
		};
	}

	if (typeof id === 'string') {
		return {
			name: 'John',
			age: 30,
		};
	}

	return null;
};

const response = getUser2(1);
const response2 = getUser2('1');
const response3 = getUser2(null);

getUser2(null);
