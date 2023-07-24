const input = document.getElementById('input');

input.addEventListener('input', (event) => {
	console.log('defer js', event.target.value);
});
