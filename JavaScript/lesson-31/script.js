// const product = {
// 	id: 1,
// 	title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
// 	price: 109.95,
// 	description:
// 		'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
// 	category: "men's clothing",
// 	image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
// 	rating: {
// 		rate: 3.9,
// 		count: 120,
// 	},
// };

const products = document.getElementById('products');

async function getProducts() {
	try {
		const response = await fetch('https://fakestoreapi.com/products');

		if (response.status !== 200) {
			throw new Error('No data');
		}

		const products = await response.json();

		return {
			error: null,
			data: products,
		};
	} catch (error) {
		return {
			error: error.message,
			data: [],
		};
	}
}

function renderProducts() {
	const result = getProducts();

	result.then(({ data, error }) => {
		if (error) {
			products.innerHTML = `<h2>${error}</h2>`;
		}

		const fragment = document.createDocumentFragment();

		data.forEach((product) => {
			const productItem = document.createElement('div');
			productItem.classList.add('product__item');
			productItem.dataset.id = product.id;
			productItem.innerHTML = `
        <div class="product__image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product__body">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p class="product__price">
            <span>Price:</span>
            <span>${product.price}</span>
            <span>₼</span>
          </p>
          <p class="product__category">
            <span>Category:</span>
            <span>${product.category}</span>
          </p>
          <p class="product__rating">
            <span>Rating:</span>
            <span>${product.rating.rate}</span>
            <span>(${product.rating.count})</span>
          </p>
        </div>
      `;
			fragment.appendChild(productItem);
		});

		products.appendChild(fragment);
	});
}

renderProducts();

products.addEventListener('click', findClickedProduct);

function findClickedProduct(event) {
	const target = event.target;
	const productItem = target.closest('.product__item');

	if (productItem) {
		const productId = productItem.dataset.id;

		const data = getData('cartData');

		if (data) {
			if (data[productId]) {
				data[productId] += 1;
			} else {
				data[productId] = 1;
			}

			saveData('cartData', data);
		} else {
			saveData('cartData', { [productId]: 1 });
		}
	}
}

function saveData(key, value) {
	const JSONstring = JSON.stringify(value);
	localStorage.setItem(key, JSONstring);
}
function getData(key) {
	const JSONstring = localStorage.getItem(key);
	const data = JSON.parse(JSONstring);
	return data;
}
