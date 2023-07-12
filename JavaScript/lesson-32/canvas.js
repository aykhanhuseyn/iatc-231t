document.body.style.margin = 0;
document.body.style.padding = 0;

const canvas = document.createElement('canvas');

document.body.appendChild(canvas);

// width: 100%;
// height: 100%;
canvas.style = `
      overflow: hidden;
      background-color: #eee;
      display: block;
      margin: 0 auto;`;

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const context = canvas.getContext('2d');

// context.fillRect(x, y, width, height);
// const a = 800;
// context.fillStyle = '#7d0000a8';
// context.fillRect((width - a) / 2, (height - a) / 2, a, a);

// context.fillRect((width - a) / 2 + 300, (height - a) / 2 + 300, a, a);

// context.strokeStyle = '#7d0000a8';
// context.strokeRect((width - a) / 2, (height - a) / 2, a, a);

// context.clearRect(
// 	(width - a) / 2 + 50,
// 	(height - a) / 2 + 50,
// 	a - 100,
// 	a - 100,
// );

// window.addEventListener('resize', (e) => {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// });

// let isMouseDown = false;

// window.addEventListener('mousedown', ({ x, y }) => {
// 	isMouseDown = true;
// 	context.moveTo(x, y);
// });

// window.addEventListener('mouseup', () => {
// 	isMouseDown = false;
// });

// window.addEventListener('mousemove', ({ x, y }) => {
// 	context.strokeStyle = '#7d0000a8';
// 	context.lineWidth = 10;

// 	if (isMouseDown) {
// 		context.lineTo(x, y);
// 		context.stroke();
// 	}
// });

// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 100);
// context.lineTo(200, 200);
// context.lineTo(100, 200);
// context.lineTo(100, 100);
// context.fillStyle = '#0de318d7';
// context.fill();
// context.stroke();

// context.moveTo(300, 100);
// context.strokeText('Hello world', 300, 100);
// context.stroke();

// context.closePath();

context.beginPath();
context.arc(500, 500, 250, 0, Math.PI * 2);
context.stroke();
context.closePath();

context.beginPath();
context.fillStyle = '#0de318d7';
context.arc(300, 400, 150, Math.PI / 2, Math.PI);
context.fill();
context.closePath();

context.beginPath();
context.fillStyle = '#0de318d7';
context.moveTo(300, 400);
context.lineTo(300, 250);
context.lineTo(450, 400);
context.fill();
context.closePath();
