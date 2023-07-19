import { Snake } from './snake.js';
import { Fruit } from './fruit.js';

export class Canvas {
	static {
		this.block = 20;
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.row = Math.floor(this.height / this.block); // 500 / 20 = 25
		this.col = Math.floor(this.width / this.block); // 1000 / 20 = 50
	}

	static {
		const canvas = document.getElementById('canvas');
		canvas.width = this.width;
		canvas.height = this.height;

		document.body.appendChild(canvas);
		document.body.style.margin = 0;
		document.body.style.overflow = 'hidden';

		this.context = canvas.getContext('2d');
	}

	static clear() {
		this.context.clearRect(0, 0, this.width, this.height);
	}

	static drawRect(x, y, color) {
		this.context.fillStyle = color;
		this.context.fillRect(x * this.block, y * this.block, this.block, this.block);
	}

	static drawText(text, x, y, color) {
		this.context.fillStyle = color;
		this.context.font = '50px Arial';
		this.context.fillText(text, x, y);
	}

	static drawCenteredText(text, color) {
		const x = this.width / 2 - (text.length * 50) / 2;
		const y = (this.height - 50) / 2;

		this.drawText(text, x, y, color);
	}

	static init() {
		const snake = new Snake();
		const fruit = new Fruit();

		snake.draw();
		fruit.draw();

		const interval = setInterval(() => {
			Canvas.clear();

			const canMove = snake.move();
			if (canMove) {
				snake.eat(fruit);
				snake.draw();
				fruit.draw();
			} else {
				clearInterval(interval);
				console.log('Ate itself');

				Canvas.drawCenteredText('Game Over', 'red');
				Canvas.drawText(`Score: ${snake.total}`, 'red');
			}
		}, 100);
	}
}
