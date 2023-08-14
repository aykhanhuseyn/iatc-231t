import { FC } from 'react';

interface DecrementProps {
	decrement: () => void;
}

export const Decrement: FC<DecrementProps> = ({ decrement }) => {
	return (
		<div>
			<h2>Decrement</h2>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};
