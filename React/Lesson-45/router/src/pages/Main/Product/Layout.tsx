import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<h1>Products</h1>
			<Outlet />
		</>
	);
};
