import { Outlet, NavLink } from 'react-router-dom';

const menu = [
	{
		link: '/',
		label: 'Home',
	},
	{
		link: '/about',
		label: 'About',
	},
	{
		link: '/product',
		label: 'Product',
	},
];

export const MainLayout = () => {
	return (
		<>
			<header>
				<h1>this is main layout</h1>
				<nav>
					<ul>
						{menu.map(({ link, label }) => (
							<li key={link}>
								<NavLink
									style={({ isActive, isPending }) => ({
										background: isActive ? 'green' : isPending ? 'orange' : 'red',
									})}
									to={link}
									onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
										e.preventDefault();
										console.log(e);
										e.stopPropagation();
										// e.stopImmediatePropagation();
									}}
								>
									{label}
								</NavLink>
							</li>
						))}
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
