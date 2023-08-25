import { Role } from '../models';

export const getUserRole = (): Role | null => {
	const role = localStorage.getItem('role');

	if (role) {
		return role as Role;
	}

	return null;
};
