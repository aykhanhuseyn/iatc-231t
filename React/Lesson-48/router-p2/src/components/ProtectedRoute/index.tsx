import type { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../../util';
import { Role } from '../../models';

interface ProtectedRouteProps {
	expectedRole: Role | null;
	redirectPath?: string;
	children?: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
	expectedRole,
	redirectPath = '/auth/login',
	children,
}) => {
	const currentRole = getUserRole();

	if (currentRole === expectedRole) {
		return children;
	}

	switch (currentRole) {
		case Role.ADMIN:
			return <Navigate to='/admin/dashboard' />;
		case Role.USER:
			return <Navigate to='/' />;
		case null:
			return <Navigate to='/auth/login' />;
		default:
			return <Navigate to={redirectPath} />;
	}
};
