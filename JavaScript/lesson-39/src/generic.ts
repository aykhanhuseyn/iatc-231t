enum ManagerRole {
	ADMIN = 'admin',
	MANAGER = 'manager',
}
enum DeveloperRole {
	SENIOR = 'senior',
	JUNIOR = 'junior',
}

interface Emp<T> extends Us {
	role: T;
}

const manager: Emp<ManagerRole> = {
	name: 'John',
	age: 30,
	role: ManagerRole.ADMIN,
};

const developer: Emp<DeveloperRole> = {
	name: 'John',
	age: 30,
	role: DeveloperRole.JUNIOR,
};

interface Us {
	name: string;
	age: number;
}

interface Emplo<T extends Us> {
	name: string;
	children: T[];
}

const emplo: Emplo<Emp<ManagerRole>> = {
	name: 'John',
	children: [
		{
			name: 'Jack',
			age: 30,
			role: ManagerRole.ADMIN,
		},
		{
			name: 'Jane',
			age: 30,
			role: ManagerRole.MANAGER,
		},
	],
};
