import type { FC, ReactNode } from 'react';
import { Breadcrumb, Layout as AntLayout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { menuRoutes, Route } from '../routes';

const { Header, Content, Footer } = AntLayout;

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AntLayout className='layout'>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<div className='demo-logo' />
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={[Route.HOME]}
					items={menuRoutes.map(({ path, title }) => {
						return {
							key: path,
							label: <Link to={path}>{title}</Link>,
						};
					})}
				/>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb
					style={{ margin: '16px 0' }}
					items={[
						{
							key: 'home',
							breadcrumbName: 'Home',
							href: '/',
						},
						{
							key: 'about',
							breadcrumbName: 'About',
							href: '/about',
						},
						{
							key: 'contact',
							breadcrumbName: 'Contact',
							href: '/contact',
						},
					]}
					itemRender={(route, _params, routes) => {
						const last = routes.indexOf(route) === routes.length - 1;
						return last ? (
							<span>{route.breadcrumbName}</span>
						) : (
							<Link to={route.href!}>{route.breadcrumbName}</Link>
						);
					}}
				/>
				<div
					className='site-layout-content'
					style={{ background: colorBgContainer }}
				>
					{children}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2023 Created by Ant UED
			</Footer>
		</AntLayout>
	);
};
