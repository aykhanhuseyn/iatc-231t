import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Rating {
	rate: number;
	count: number;
}

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

const getProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const data = await response.json();

	return data as Product[];
};

export const List = () => {
	const [products, setProducts] = useState([] as Product[]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const data = await getProducts();
			setProducts(data);
			setLoading(false);
		})();
	}, []);

	if (loading) {
		return <h2>Loading ...</h2>;
	}

	return (
		<>
			<h2>List</h2>
			<ul>
				{products.map((item) => (
					<li key={item.id}>
						<Link to={`/product/${item.id}`}>
							<h3>{item.title}</h3>
							<h4>{item.description}</h4>
							<img
								style={{
									width: '100px',
								}}
								alt={item.title}
								src={item.image}
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
