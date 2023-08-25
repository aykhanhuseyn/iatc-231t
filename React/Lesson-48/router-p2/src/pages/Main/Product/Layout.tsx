import { Outlet } from 'react-router-dom';

export const Component = () => {
	return (
		<>
			<h1>Products</h1>
			<Outlet />
		</>
	);
};
