import { getProducts, useAppDispatch, useProductsSelector } from './redux';

export const Products = () => {
	const dispatch = useAppDispatch();
	const { loading, error, products } = useProductsSelector();

	return (
		<div>
			<h2>Prodicts</h2>
			<button onClick={() => dispatch(getProducts())}>Get Products</button>
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
};
