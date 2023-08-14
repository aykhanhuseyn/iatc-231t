import { FC, useEffect } from 'react';
import { Count } from './Count';

interface CountWrapperProps {
	count: number;
	name: string;
}

export const CountWrapper: FC<CountWrapperProps> = ({ name, count }) => {
	useEffect(() => {
		console.log(`CountWrapper ${name} rendered`);

		return () => {
			console.log(`CountWrapper ${name} unmounted`);
		};
	}, [name]);

	return (
		<div>
			<h2>{name}</h2>
			<Count count={count} />
		</div>
	);
};
