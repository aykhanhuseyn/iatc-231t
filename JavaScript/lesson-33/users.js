const tbody = document.getElementById('tbody');
const limitSelect = document.getElementById('limit-select');
const paginationList = document.getElementById('pagination-list');
const searchInput = document.getElementById('search-input');

let skip = 0;
let limit = 10;
let q = '';
let total = 0;

fetchUsers();

searchInput.addEventListener('keyup', function (event) {
	q = event.target.value;
	fetchUsers();
});

limitSelect.addEventListener('change', function (event) {
	limit = Number(event.target.value);
	fetchUsers();
});

paginationList.addEventListener('click', function(event) {
	event.preventDefault();
	if (event.target.tagName === 'A') {
		const action = event.target.id;
		switch (action) {
			case 'prev':
				skip -= limit;
				break;
			case 'next':
				skip += limit;
				break;
			default:
				const page = Number(action);
				skip = (page - 1) * limit;
		}

		fetchUsers();
	}
});

function fetchUsers() {
	fetch(`https://dummyjson.com/users/search?skip=${skip}&limit=${limit}&q=${q}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			total = data.total;
			generateTableRows(data.users);
			generatePaginationButtons();
		});
}

function generatePaginationButtons() {
	let paginationHTML = '';
	const pageCount = Math.ceil(total / limit);

	if (pageCount === 1) {
		paginationList.innerHTML = '';
		return;
	}

	paginationHTML += `
		<li class="page-item">
			<a id="prev" class="page-link ${skip === 0 ? 'disabled' : ''}" href="#">
				Previous
			</a>
		</li>`;

	const currentPage = Math.floor(skip / limit) + 1;
	for (let page = 1; page <= pageCount; page++) {
		paginationHTML += `
			<li class="page-item">
				<a id="${page}" class="page-link ${page === currentPage ? 'active' : ''}" href="#">
					${page}
				</a>
			</li>`;
	}

	paginationHTML += `
		<li class="page-item">
			<a id="next" class="page-link ${skip + limit >= total ? 'disabled' : ''}" href="#">
				Next
			</a>
		</li>`;

	paginationList.innerHTML = paginationHTML;
}

function generateTableRows(users) {
	let generatedHtml = '';
	for (let user of users) {
		generatedHtml += generateTableRow(user);
	}
	tbody.innerHTML = generatedHtml;
}

function generateTableRow(user) {
	return `
		<tr>
			<th scope="row">${user.id}</th>
			<td>${user.username}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.gender}</td>
			<td>${user.email}</td>
			<td>${user.age}</td>
			<td>${user.birthDate}</td>
			<td>${user.ip}</td>
			<td>${user.macAddress}</td>
		</tr>
	`;
}