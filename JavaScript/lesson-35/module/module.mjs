const input = document.getElementById('input');

input.addEventListener('input', (event) => {
	console.log('module mjs', event.target.value);
});
