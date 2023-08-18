import { useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);

	return <div>Dang!</div>;
}
