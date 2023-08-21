export enum Route {
	HOME = '/',
	ABOUT = '/about',
	CONTACT = '/contact',
	PRODUCT = '/product',
	NOT_FOUND = '*',
}

interface MenuRouteItem {
	title: string;
	path: Route;
}

export const menuRoutes: MenuRouteItem[] = [
	{
		title: 'Home',
		path: Route.HOME,
	},
	{
		title: 'About',
		path: Route.ABOUT,
	},
	{
		title: 'Contact',
		path: Route.CONTACT,
	},
	{
		title: 'Product',
		path: Route.PRODUCT,
	},
];
