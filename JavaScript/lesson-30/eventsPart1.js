const button = document.getElementById('button');

// let clickCount = 1;

// function buttonClickHandler(event) {
// 	// Remove event listener
// 	if (clickCount > 10) {
// 		this.removeEventListener('click', buttonClickHandler);
// 	} else {
// 		console.log('Click function', event);
// 		this.textContent = `clicked ${clickCount++} ${
// 			clickCount > 1 ? 'times' : 'time'
// 		}`;
// 	}
// }

// Pointer events
// button.addEventListener('click', buttonClickHandler);

// button.addEventListener('click', (event) => {
// 	console.log('Click arow function', event);
//   // this this is not button
// 	this.textContent = event.timeStamp;
// });

// Mouse events
// button.addEventListener('mouseenter', (event) => {
// 	console.log('Mouse enter', event);
// });
// button.addEventListener('mousemove', (event) => {
// 	console.log('Mouse move', event);
// });

// Touch events
// button.addEventListener('touchstart', (event) => {
// 	console.log('Touch start', event);
// });

// let commandPressedTS = 0;

// Keyboard events
// document.addEventListener('keydown', (event) => {
// 	event.preventDefault();

// 	if (event.key === 'Meta') {
// 		console.log('Command pressed');
// 		commandPressedTS = event.timeStamp;
// 	}
// 	if (event.key === 'a') {
// 		if (event.timeStamp - commandPressedTS < 100) {
// 			console.log('Select all');
// 		} else {
// 			console.log('failed to select all');
// 		}
// 	}
// });
// document.addEventListener('keypress', (event) => {
// 	console.log('Key press', event.key, event.code);
// });
// document.addEventListener('keyup', (event) => {
// 	console.log('Key up', event.key, event.code);
// });

// prevent default
anchor.addEventListener('click', (event) => {
	event.preventDefault();
	console.log('Anchor click', anchor.textContent);
});

function formSubmitHandler(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	console.log(
		'Form data',
		formData.get('email'),
		formData.get('password'),
		formData.get('remember'),
	);

	console.log('Form submit', event);
}

form.addEventListener('submit', formSubmitHandler);
