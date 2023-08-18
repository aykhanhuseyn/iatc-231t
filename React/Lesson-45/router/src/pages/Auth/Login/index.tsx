import { useNavigate } from 'react-router-dom';
import { Role } from '../../../models';

interface LoginData {
	username: string;
	password: string;
}

async function login(data: LoginData): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (data.username === 'admin' && data.password === 'admin') {
				localStorage.setItem('token', JSON.stringify(data));
				localStorage.setItem('role', Role.ADMIN);
				resolve('/admin/dashboard');
			} else if (data.username === 'user' && data.password === 'user') {
				localStorage.setItem('token', JSON.stringify(data));
				localStorage.setItem('role', Role.USER);
				resolve('/');
			} else {
				localStorage.clear();
				reject();
			}
		}, 1000);
	});
}

export const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const data: LoginData = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
		};

		try {
			const route = await login(data);
			navigate(route);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input name='username' type='text' placeholder='Username' />
				<input name='password' type='password' placeholder='Password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};
