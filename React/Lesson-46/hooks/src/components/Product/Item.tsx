import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function getProducts(id: string) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id,
				name: 'Product 1',
				price: 100,
			});
		}, 1000);
	});
}

export const ProductItem = () => {
	const { id } = useParams();
	const { pathname, search } = useLocation();

	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState([]);

	console.log({ id, pathname, search });

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
		return <div>Loading...</div>;
	}

	console.log({ product });

	return <div>ProductItem</div>;
};
