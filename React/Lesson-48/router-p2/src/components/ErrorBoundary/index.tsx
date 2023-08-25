import { useRouteError, useAsyncError } from 'react-router-dom';

export function ErrorBoundary() {
	const routeError = useRouteError();
	const asyncError = useAsyncError();

	console.error({ routeError, asyncError });

	return <div>Dang!</div>;
}
