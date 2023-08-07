const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('click', function (event) {
	event.stopPropagation();
	if (this.querySelector('[data-options]').classList.contains('open')) {
		this.querySelector('[data-options]').classList.remove('open');
		document.removeEventListener('click', clickOutside);
	} else {
		this.querySelector('[data-options]').classList.add('open');
		document.addEventListener('click', clickOutside);
	}
});

function clickOutside() {
	document.querySelector('[data-options].open').classList.remove('open');
	document.removeEventListener('click', clickOutside);
}

const options = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
	{ value: '4', label: 'Option 4', selected: true },
	{ value: '5', label: 'Option 5', disabled: true },
];

const fr = new DocumentFragment();

options.forEach((option) => {
	const li = document.createElement('li');
	li.dataset.value = option.value;
	option.selected && li.classList.add('selected');
	option.disabled && li.classList.add('disabled');
	li.innerHTML = option.label;

	fr.appendChild(li);
});

dropdown.querySelector('[data-options]').innerHTML = '';
dropdown.querySelector('[data-options]').append(fr);

dropdown
	.querySelector('[data-options]')
	.addEventListener('click', function (event) {
		// event.stopPropagation();

		const selectedItems = this.querySelectorAll('.selected');
		selectedItems.forEach((item) => {
			item.classList.remove('selected');
		});

		const listItem = event.target.closest('[data-value]');
		listItem.classList.toggle('selected');

		dropdown.querySelector('[data-value]').innerHTML = listItem.innerHTML;
		dropdown.querySelector('[data-value]').dataset.value = listItem.dataset.value;
	});
