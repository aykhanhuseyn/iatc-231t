import { Link } from 'react-router-dom';

const productIds = ['1', '2', '3', 'salam'];

export const ProductList = () => {
	return (
		<div>
			<h3>List</h3>
			{productIds.map((id) => (
				<Link key={id} to={id}>
					{id}
				</Link>
			))}
		</div>
	);
};
