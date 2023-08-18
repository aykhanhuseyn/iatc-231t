import { Outlet, Link } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<>
			<header>
				<h1>this is main layout</h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/product'>Product</Link>
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
