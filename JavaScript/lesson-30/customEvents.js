const button = document.getElementById('button');

form.style.display = 'none';

// button.addEventListener('click', (e) => {
// 	// e.stopPropagation();
// 	// e.stopImmediatePropagation();
// 	console.log('click button 1');
// });
// button.addEventListener('click', (e) => {
// 	console.log('click button 2');
// });

// document.body.addEventListener('click', (e) => {
// 	e.stopPropagation();
// 	console.log('click body 1');
// });
// document.body.addEventListener('click', () => {
// 	console.log('click body 2');
// });

// document.addEventListener('click', () => {
// 	console.log('click document');
// });

// bubbling is the default behavior
// start from the target element and go up to the outermost element

// capturing is the opposite of bubbling
// start from the outermost element and go down to the target element

// event.stopPropagation() - stop bubbling
// event.stopImmediatePropagation() - stop bubbling and other listeners on the same element
// event.preventDefault() - stop default behavior

// custom events

// const build = new CustomEvent('build', {
// 	bubbles: true,
// 	cancelable: false,
// 	composed: true,
// 	detail: { name: 'John' },
// });

// button.addEventListener('click', () => {
// 	button.dispatchEvent(build);
// });

// button.addEventListener('build', (event) => {
// 	console.log('build', event);
// });

// const tripleClick = new CustomEvent('trplClick', {
// 	bubbles: true,
// 	cancelable: false,
// 	composed: true,
// });

// let clickTS = [];
// button.addEventListener('click', (e) => {
// 	clickTS.push(e.timeStamp);
// 	if (clickTS.length > 3) {
// 		clickTS.shift();
// 	}
// 	if (clickTS.length === 3 && clickTS[2] - clickTS[0] < 500) {
// 		clickTS.length = 0;
// 		button.dispatchEvent(tripleClick);
// 	}
// });

// button.addEventListener('trplClick', () => {
// 	console.log('triple click');
// });
