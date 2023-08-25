import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '../components';
import { Role } from '../models';
import {
	productsLoader,
	productByIdLoader,
	editProductByIdAction,
} from '../pages/Main/Product/loaders';

export const router = createBrowserRouter([
	{
		path: 'auth',
		async lazy() {
			const { AuthLayout } = await import('../components/layout/auth');
			const { ProtectedRoute } = await import('../components/ProtectedRoute');

			return {
				Component: () => (
					<ProtectedRoute expectedRole={null} redirectPath='/'>
						<AuthLayout />
					</ProtectedRoute>
				),
			};
		},
		children: [
			{
				path: 'login',
				lazy: () => import('../pages/Auth/Login'),
			},
			{
				path: 'register',
				element: <h1>Register</h1>,
			},
			{
				path: '*',
				element: <Navigate to='/auth/login' />,
			},
		],
		errorElement: <ErrorBoundary />,
	},
	{
		path: 'admin',
		async lazy() {
			const { AdminLayout } = await import('../components/layout/admin');
			const { ProtectedRoute } = await import('../components/ProtectedRoute');

			return {
				Component: () => (
					<ProtectedRoute expectedRole={Role.ADMIN} redirectPath='/'>
						<AdminLayout />
					</ProtectedRoute>
				),
			};
		},
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: 'dashboard',
				lazy: () => import('../pages/Admin/Dashboard'),
			},
			{
				path: 'about',
				lazy: () => import('../pages/Admin/About'),
			},
		],
	},
	{
		path: '/',
		async lazy() {
			const { MainLayout } = await import('../components/layout/main');
			const { ProtectedRoute } = await import('../components/ProtectedRoute');

			return {
				Component: () => (
					<ProtectedRoute expectedRole={Role.USER} redirectPath='/auth/login'>
						<MainLayout />
					</ProtectedRoute>
				),
			};
		},
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				lazy: () => import('../pages/Main/Home'),
			},
			{
				path: 'about',
				lazy: () => import('../pages/Main/About'),
			},
			{
				path: 'product',
				lazy: () => import('../pages/Main/Product/Layout'),
				children: [
					{
						index: true,
						loader: productsLoader,
						lazy: () => import('../pages/Main/Product/List'),
					},
					{
						path: ':id',
						loader({ params: { id } }) {
							return productByIdLoader(id as string);
						},
						async action({ params, request }) {
							console.log(params);
							const formData = await request.formData();
							const hello = formData.get('hello');
							console.log(hello);
							const data = await editProductByIdAction(params.id as string);

							throw new Error('Error');

							return data;
						},
						errorElement: <h2>error</h2>,
						lazy: () => import('../pages/Main/Product/Item'),
					},
				],
			},
		],
	},
]);
