self.addEventListener('message', function ({ data }) {
	data.name = 'Jane';
	data.age = 25;

	self.postMessage(data);
});
