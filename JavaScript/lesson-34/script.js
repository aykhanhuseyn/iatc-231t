const productsContainer = document.getElementById('productsContainer');
const loadMoreButton = document.getElementById('loadMoreButton');
const openCard = document.getElementById('openCard');
const cardContainer = document.getElementById('cardContainer');
const backdrop = document.getElementById('backdrop');

function toggleCart() {
	cardContainer.classList.toggle('translate-x-0');
	cardContainer.classList.toggle('translate-x-full');

	backdrop.classList.toggle('hidden');

	document.body.classList.toggle('overflow-hidden');
}

openCard.addEventListener('click', toggleCart);
backdrop.addEventListener('click', toggleCart);
cardContainer.querySelector('button').addEventListener('click', toggleCart);

// to add product to cart
productsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('add-to-card')) {
		const product = e.target.closest('.card');
		const id = product.dataset.id;
		storage.addProductToCart(id);

		const totalCount = storage.getTotalCount();

		openCard.querySelector('span').textContent = totalCount;
	}
});

const baseURL = 'https://dummyjson.com/products';
const urlParams = {
	limit: 12,
	skip: 0,
};

// to get products from server
function getProducts() {
	const url = new URL(baseURL);
	url.searchParams.set('limit', urlParams.limit);
	url.searchParams.set('skip', urlParams.skip);

	fetch(url)
		.then((res) => res.json())
		.then(({ products, skip, limit, total }) => {
			// if there is no more products to load, remove load more button
			if (skip + limit == total) {
				loadMoreButton.remove();
			}

			// create html for each product and add it to productsContainer
			products.forEach(({ id, title, price, thumbnail }) => {
				productsContainer.innerHTML += createProduct(id, title, price, thumbnail);
			});
		});
}

function init() {
	// to load first 12 products
	getProducts();
	// to show total count of products in cart
	openCard.querySelector('span').textContent = storage.getTotalCount();
}

init();

// to load more products
loadMoreButton.addEventListener('click', () => {
	urlParams.skip += urlParams.limit;
	getProducts();
});

// to make html for single product
function createProduct(id, title, price, image) {
	return `
<div data-id="${id}" class="card w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
  <div class="flex items-end justify-end h-56 w-full bg-cover"
    style="background-image: url('${image}');">
    <button
      class="add-to-card p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
      <svg class="h-5 w-5 pointer-events-none" fill="none" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
        </path>
      </svg>
    </button>
  </div>
  <div class="px-5 py-3">
    <h3 class="text-gray-700 uppercase">${title}</h3>
    <span class="text-gray-500 mt-2">$${price}</span>
  </div>
</div>
  `;
}
