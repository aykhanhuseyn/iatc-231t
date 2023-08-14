import { FC } from 'react';

interface IncrementProps {
	increment: () => void;
}

export const Increment: FC<IncrementProps> = ({ increment }) => {
	return (
		<div>
			<h2>Increment</h2>
			<button
				onClick={() => {
					console.log('click');
					increment();
				}}
			>
				Increment
			</button>
		</div>
	);
};
