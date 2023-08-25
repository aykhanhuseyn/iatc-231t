import { Link, useLoaderData } from 'react-router-dom';
import type { Product } from '../../../models';

export const Component = () => {
	const products = useLoaderData() as Product[];

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
								loading='lazy'
							/>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
