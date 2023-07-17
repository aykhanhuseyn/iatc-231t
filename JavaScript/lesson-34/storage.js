// { [id]: count }

// { 23: 3, 1: 4, 4: 2, 5: 1 }

class Storage {
	#key = 'products';

	addProductToCart(id) {
		// get products from localStorage
		const products = this.getProducts();

		// if id exists in products, increase count by 1
		if (products[id]) {
			products[id]++;
		} else {
			// if id does not exist in products, set count to 1
			products[id] = 1;
		}

		// save products to localStorage
		this.#save(products);
	}

	#save(products) {
		localStorage.setItem(this.#key, JSON.stringify(products));
	}

	getProducts() {
		const data = localStorage.getItem(this.#key);

		if (data) {
			return JSON.parse(data);
		} else {
			return {};
		}
	}

	getTotalCount() {
		const products = this.getProducts();

		// return Object.values(products).reduce((acc, count) => acc + count, 0);
		return Object.keys(products).length;
	}
}

const storage = new Storage();
