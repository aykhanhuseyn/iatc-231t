const input = document.getElementById('input');

input.addEventListener('input', (event) => {
	console.log('normal js', event.target.value);
});
