// interface Author {
//   username: string;
//   firsName: string;
// }

function createMessage(message) {
	return `
  <div data-username="${message.author.username}" class="message">
    <div class="message__author">${message.author.firstName}</div>
    <div class="message__text">${message.message}</div>
  </div>
  `;
}

const addMessageToDOM = (message) => {
	const messageElement = createMessage(message);

	document
		.getElementById('messages')
		.insertAdjacentHTML('beforeend', messageElement);
};
