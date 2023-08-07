const person = {
	name: 'Vladilen',
	age: 25,
	job: 'Fullstack',

	get hi() {
		return 'Hello!';
	},
};

const proxyPerson = new Proxy(person, {
	get(target, prop) {
		if (prop === 'name') {
			return 'Info is not available';
		} else if (prop in target === false) {
			return null;
		} else {
			return target[prop];
		}
	},
	set(target, prop, value) {
		if (prop in target) {
			if (prop === 'age' && typeof value !== 'number') {
				throw new Error('Age must be number');
			}

			// target[prop] = value;
			Reflect.set(target, prop, value);
		} else {
			throw new Error(`No ${prop} field in target`);
		}
	},
});
