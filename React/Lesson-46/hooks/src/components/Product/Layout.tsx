import { Link, Outlet } from 'react-router-dom';

export const ProductLayout = () => {
	return (
		<div>
			<h1>Product Layout</h1>
			<nav>
				<Link to='new'>New Product</Link>
				<Link to='edit/1'>Edit Product 1</Link>
				<Link to='edit/2'>Edit Product 2</Link>
				<Link to='3'>Product 3</Link>
				<Link to='salam'>Product salam</Link>
			</nav>
			<Outlet />
		</div>
	);
};
