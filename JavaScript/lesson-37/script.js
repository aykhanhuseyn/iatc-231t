const ageContainer = document.getElementById('age');

// register a worker
const worker = new Worker('worker.js');

worker.addEventListener('message', ({ data }) => {
	console.log(data.message);
	console.log(data.type);

	if (data.type === 'countUsers') {
		ageContainer.textContent = data.message;
	}
});

worker.addEventListener('error', (error) => {
	console.log(error);
});

// ageContainer.textContent = avaregeAge;

document.getElementById('calculate').addEventListener('click', () => {
	worker.postMessage('countUsers');
});

clickMe.addEventListener('click', () => {
	console.log('click');
});
