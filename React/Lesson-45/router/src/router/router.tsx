import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
	Home,
	About,
	ProductLayout,
	ProductList,
	ProductItem,
	AdminAbout,
	Dashboard,
	Login,
} from '../pages';
import {
	MainLayout,
	AdminLayout,
	AuthLayout,
	ErrorBoundary,
	ProtectedRoute,
} from '../components';
import { Role } from '../models';

export const router = createBrowserRouter([
	{
		path: 'auth',
		element: (
			<ProtectedRoute expectedRole={null} redirectPath='/'>
				<AuthLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: 'login',
				element: <Login />,
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
	},
	{
		path: 'admin',
		element: (
			<ProtectedRoute expectedRole={Role.ADMIN} redirectPath='/'>
				<AdminLayout />
			</ProtectedRoute>
		),
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'about',
				element: <AdminAbout />,
			},
		],
	},
	{
		path: '/',
		element: (
			<ProtectedRoute expectedRole={Role.USER} redirectPath='/auth/login'>
				<MainLayout />
			</ProtectedRoute>
		),
		errorElement: <h1>User Not Found</h1>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'product',
				element: <ProductLayout />,
				children: [
					{
						index: true,
						element: <ProductList />,
					},
					{
						path: ':id',
						element: <ProductItem />,
					},
				],
			},
		],
	},
]);
