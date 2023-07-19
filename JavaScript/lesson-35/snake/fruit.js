import { Canvas } from './canvas.js';

export class Fruit {
	x = 0;
	y = 0;
	#color = '';

	get #randomHex() {
		return Math.floor(Math.random() * 255).toString(16);
	}

	get #randomColor() {
		return `#${this.#randomHex}${this.#randomHex}${this.#randomHex}`;
	}

	constructor() {
		this.x = Math.floor(Math.random() * Canvas.col);
		this.y = Math.floor(Math.random() * Canvas.row);
	}

	update() {
		this.x = Math.floor(Math.random() * Canvas.col);
		this.y = Math.floor(Math.random() * Canvas.row);
		this.#color = this.#randomColor;
	}

	draw() {
		Canvas.drawRect(this.x, this.y, this.#color);
	}
}
