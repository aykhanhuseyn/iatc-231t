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

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: Hair;
	domain: string;
	ip: string;
	address: Address;
	macAddress: string;
	university: string;
	bank: Bank;
	company: Company;
	ein: string;
	ssn: string;
	userAgent: string;
}

export interface UsersResponse extends Paginatagle {
	users: User[];
}

export interface Hair {
	color: string;
	type: string;
}

export interface Address {
	address: string;
	city: string;
	coordinates: Coordinates;
	postalCode: string;
	state: string;
}

export interface Coordinates {
	lat: number;
	lng: number;
}

export interface Bank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}

export interface Company {
	address: Address;
	department: string;
	name: string;
	title: string;
}
