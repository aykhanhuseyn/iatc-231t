import { Canvas } from './canvas.js';

export class Snake {
	#x = 0;
	#y = 0;
	#xSpeed = 1;
	#ySpeed = 0;
	#color = 'green';
	#total = 0;
	#tail = [];

	eat(fruit) {
		if (this.#x === fruit.x && this.#y === fruit.y) {
			fruit.update();
			this.#total++;
		}
	}

	#controlBorder() {
		if (this.#x < 0) {
			this.#x = Canvas.col;
		}
		if (this.#x > Canvas.col) {
			this.#x = 0;
		}
		if (this.#y < 0) {
			this.#y = Canvas.row;
		}
		if (this.#y > Canvas.row) {
			this.#y = 0;
		}
	}

	move() {
		this.#tail.unshift({ x: this.#x, y: this.#y });
		this.#tail.length = this.#total;

		this.#x += this.#xSpeed;
		this.#y += this.#ySpeed;

		this.#controlBorder();

		return !this.#tail.some((curr) => curr.x === this.#x && curr.y === this.#y);
	}

	get total() {
		return this.#total;
	}

	draw() {
		Canvas.drawRect(this.#x, this.#y, this.#color);

		for (let i = 0; i < this.#tail.length; i++) {
			Canvas.drawRect(this.#tail[i].x, this.#tail[i].y, this.#color);
		}
	}

	constructor() {
		document.addEventListener('keydown', (event) => {
			switch (event.key) {
				case 'ArrowLeft':
					if (this.#xSpeed !== 1) {
						this.#xSpeed = -1;
						this.#ySpeed = 0;
					}
					break;
				case 'ArrowUp':
					if (this.#ySpeed !== 1) {
						this.#xSpeed = 0;
						this.#ySpeed = -1;
					}
					break;
				case 'ArrowRight':
					if (this.#xSpeed !== -1) {
						this.#xSpeed = 1;
						this.#ySpeed = 0;
					}
					break;
				case 'ArrowDown':
					if (this.#ySpeed !== -1) {
						this.#xSpeed = 0;
						this.#ySpeed = 1;
					}
					break;
			}
		});
	}
}
