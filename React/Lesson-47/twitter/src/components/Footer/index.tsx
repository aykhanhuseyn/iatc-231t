import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
	className: string;
}

interface FooterRoute {
	label: string;
	url: string;
	id: string;
}

const footerRoutes: FooterRoute[] = [
	{
		label: 'About',
		url: '/about',
		id: 'about',
	},
	{
		label: 'Help Center',
		url: '/help',
		id: 'help',
	},
	{
		label: 'Terms of Service',
		url: '/terms',
		id: 'terms',
	},
	{
		label: 'Privacy Policy',
		url: '/privacy',
		id: 'privacy',
	},
	{
		label: 'Cookie Policy',
		url: '/cookie',
		id: 'cookie',
	},
];

export const Footer: FC<FooterProps> = ({ className }) => {
	return (
		<nav className={className}>
			{footerRoutes.map((route) => (
				<Link key={route.id} to={route.url}>
					{route.label}
				</Link>
			))}
		</nav>
	);
};
