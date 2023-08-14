import { useEffect } from 'react';

export const Subscriber = () => {
	useEffect(() => {
		const handler = (event: any) => {
			console.log(event.target?.tagName);
		};

		// mount => subscribe
		document.addEventListener('click', handler);

		// unmount => unsubscribe
		return () => {
			document.removeEventListener('click', handler);
		};
	}, []);

	return <div>Subscriber</div>;
};
