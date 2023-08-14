import { FC, useEffect } from 'react';

interface CountProps {
	count: number;
}

export const Count: FC<CountProps> = ({ count }) => {
	useEffect(() => {
		console.log('Count component rendered');

		return () => {
			console.log('Count component unmounted');
		};
	}, [count]);

	return (
		<div>
			<h2>{count}</h2>
		</div>
	);
};
