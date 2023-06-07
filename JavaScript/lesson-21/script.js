// calculate the sum of the numbers from 1 to 10

let age = 0;

const calc = {
	value: 0,

	add(number) {
		console.log(this);

		this.value += number;

		return this;
	},

	// [Symbol.toPrimitive](tag) {
	// 	console.log(tag);

	// 	return this.value;
	// },

	// toString() {
	// 	return `this.value: ${this.value}`;
	// },
	get [Symbol.toStringTag]() {
		return 'AwesomeCalculator';
	},

	get age() {
		return age;
	},
	set age(value) {
		age = value;
	},
};

const val = calc.add(1).add(2).add(3).add(4).value;

// console.log(String(val));
// console.log(Number(val));
// console.log(val + 1);

console.log(val);
