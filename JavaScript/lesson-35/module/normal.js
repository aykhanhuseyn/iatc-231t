const input = document.getElementById('input');

// input.addEventListener('input', (event) => {
// 	console.log('normal js', event.target.value);
// });

const script = document.createElement('script');
script.src = 'extra.js';

document.body.appendChild(script);
