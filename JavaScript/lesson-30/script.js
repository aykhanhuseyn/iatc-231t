const button = document.getElementById('button');

form.style.display = 'none';

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/10000');

// xhr.addEventListener('load', () => {
// 	if (xhr.readyState === xhr.DONE) {
// 		if (xhr.status !== 200) {
// 			console.log('Error');
// 			return;
// 		}

// 		const response = JSON.parse(xhr.responseText);
// 		console.log(response);
// 	}
// });

// xhr.addEventListener('error', () => {
// 	console.log('Error', xhr.status);
// });

// xhr.send();

// console.log(xhr);

// AJAX

// fetch API

// fetch('https://jsonplaceholder.typicode.com/users/10000')
// 	.then((response) => {
// 		if (response.status === 404) {
// 			throw new Error('User not found');
// 		}
// 		return response.json();
// 	})
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(error));

// abort controller

const controller = new AbortController();

let sendOrAbort = true;

button.addEventListener('click', () => {
	if (sendOrAbort) {
		fetch('https://jsonplaceholder.typicode.com/users', {
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.warn(error));

		sendOrAbort = false;
	} else {
		controller.abort();
		sendOrAbort = true;
	}
});

// const xhr = new XMLHttpRequest();
// button.addEventListener('click', () => {
// 	if (sendOrAbort) {
// 		xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// 		xhr.addEventListener('load', () => {
// 			if (xhr.readyState === xhr.DONE) {
// 				if (xhr.status !== 200) {
// 					console.log('Error');
// 					return;
// 				}

// 				const response = JSON.parse(xhr.responseText);
// 				console.log(response);
// 			}
// 		});
// 		xhr.send();

// 		sendOrAbort = false;
// 	} else {
// 		xhr.abort();
// 		sendOrAbort = true;
// 	}
// });
