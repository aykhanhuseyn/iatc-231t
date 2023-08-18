import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

const getProducts = async (id: string) => {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	const data = await response.json();

	return data as Product;
};

export const Item = () => {
	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			(async () => {
				setLoading(true);
				const data = await getProducts(id);
				setProduct(data);
				setLoading(false);
			})();
		}
	}, [id]);

	if (loading) {
		return <h2>Loading ...</h2>;
	}

	return (
		<>
			<h2>{product?.title}</h2>
		</>
	);
};
