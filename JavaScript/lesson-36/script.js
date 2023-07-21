// import Swal from 'sweetalert2';
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
// import { createMessage } from './utils.js';

const form = document.getElementById('message-form');

const id = Math.random().toString(36).substring(2, 9);

// const ws = new WebSocket('wss://ws.postman-echo.com/raw');
const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', () => {
	Swal.fire({
		title: 'Connected',
		text: 'Congrats, you are connected',
		icon: 'success',
		confirmButtonText: 'Cool',
	});
});

ws.addEventListener('close', () => {
	Swal.fire({
		title: 'Error!',
		text: 'Do you want to continue',
		icon: 'error',
	});
});

ws.addEventListener('message', (event) => {
	const message = JSON.parse(event.data);

	Swal.fire({
		title: 'New Message received',
		text: message.message,
		icon: 'info',
	});

	const el = document.getElementById('messages');
	el.scrollTo(0, el.scrollHeight);

	addMessageToDOM(message);
});

const handleSubmit = (event) => {
	event.preventDefault();

	const formData = new FormData(event.target);

	const message = {
		id,
		author: {
			username: 'admin',
			firstName: 'Admin',
		},
		message: formData.get('message'),
	};

	document.getElementById('message').value = '';

	addMessageToDOM(message);

	ws.send(JSON.stringify(message));
};

form.addEventListener('submit', handleSubmit);
document.getElementById('message').addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		form.dispatchEvent(new Event('submit'));
	}
});
