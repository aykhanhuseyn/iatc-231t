function getUsers() {
	const users = Array.from({ length: 100_000_000 }, () => {
		return {
			name: 'John',
			age: Math.floor(Math.random() * 60) + 18,
		};
	});

	return users;
}

function getAvarageAge(users) {
	let sum = 0;
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
	}
	return Math.floor(sum / users.length);
}

// console.log(self);

// MessageEvent {isTrusted: true, data: "countUsers", origin: "", lastEventId: "", source: null, …}
self.addEventListener('message', (event) => {
	switch (event.data) {
		case 'countUsers':
			const users = getUsers();
			const avaregeAge = getAvarageAge(users);
			self.postMessage({
				type: 'countUsers',
				message: avaregeAge,
			});
			break;
		default:
			break;
	}
});
