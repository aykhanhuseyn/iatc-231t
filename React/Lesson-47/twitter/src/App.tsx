import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from './components';
import { Join } from './pages/Auth';

const isLoggedIn = false;

function App() {
	if (!isLoggedIn) {
		return (
			<Routes>
				<Route path='/*' element={<AuthLayout />}>
					<Route path='join' element={<Join />} />
					<Route path='login' element={<div>login</div>} />
					<Route path='register' element={<div>register</div>} />
					<Route path='*' element={<Navigate to='/join' />} />
				</Route>
			</Routes>
		);
	}

	return <Routes>{/* <Route path='/*' element={<Layout />} /> */}</Routes>;
}

export default App;
