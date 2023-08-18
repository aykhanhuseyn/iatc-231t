import { Outlet, Link } from 'react-router-dom';

export const AdminLayout = () => {
	return (
		<>
			<header>
				<h1>this is admin layout</h1>
				<nav>
					<ul>
						<li>
							<Link to='/admin'>Home</Link>
						</li>
						<li>
							<Link to='/admin/about'>About</Link>
						</li>
						<li>
							<Link to='/admin/product'>Product</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};
