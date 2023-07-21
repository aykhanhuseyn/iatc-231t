import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { faker } from '@faker-js/faker';

const createMessage = () => ({
	author: {
		username: faker.internet.userName(),
		firstName: faker.person.firstName(),
	},
	message: faker.lorem.sentence(),
});

const server = createServer();
const wss = new WebSocketServer({ server });

wss.on('connection', (client) => {
	console.log('client connected');

	// client.on('message', (message) => {
	// 	console.log('received', message.toString());

	// 	const msg = createMessage();

	// 	client.send(JSON.stringify(msg));
	// });

	setInterval(() => {
		const msg = createMessage();

		client.send(JSON.stringify(msg));
	}, 1000);

	// client.on('message', (message) => {
	// 	console.log('received', message.toString());

	// 	// broadcast
	// 	wss.clients.forEach((user) => {
	// 		if (user !== client) {
	// 			user.send(message.toString());
	// 		}
	// 	});
	// });
});

wss.on('close', () => {
	console.log('closed');
});

// setTimeout(() => {
// 	wss.clients.forEach((client) => {
// 		client.send(JSON.stringify(createMessage()));
// 	});
// }, 10000);

server.listen(8080, () => {
	console.log('Listening on http://localhost:8080');
});
