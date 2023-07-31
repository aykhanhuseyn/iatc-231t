class Calc {
	#value = 0;
	#precision = 2;

	constructor(value = 0, precision = 2) {
		this.#value = value;
		this.#precision = precision;
	}

	add(number) {
		this.#value += number;
		return this;
	}

	get value() {
		return parseFloat(this.#value.toFixed(this.#precision));
	}

	get formatted() {
		// 0.34343 => 0.34 => 0,34
		return this.#value.toFixed(this.#precision).replace(/\./g, ',');
	}

	[Symbol.toPrimitive](hint) {
		if (hint === 'number') {
			return this.value;
		}

		return this.formatted;
	}
}

export default Calc;
