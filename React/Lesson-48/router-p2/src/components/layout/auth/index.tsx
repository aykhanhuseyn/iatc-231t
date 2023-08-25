import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<>
			<header>
				<h1>this is auth layout</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};
