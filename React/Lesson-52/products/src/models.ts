export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

export interface Paginatagle {
	total: number;
	skip: number;
	limit: number;
}

export interface ProductsResponse extends Paginatagle {
	products: Product[];
}
