import { useLoaderData, Form } from 'react-router-dom';
import type { Product } from '../../../models';

export const Component = () => {
	const product = useLoaderData() as Product;

	return (
		<>
			<h2>{product?.title}</h2>

			<Form action={`/product/${product.id}`} method='POST'>
				<input name='hello' defaultValue='hello' />
				<button type='submit'>Submit</button>
			</Form>
		</>
	);
};
