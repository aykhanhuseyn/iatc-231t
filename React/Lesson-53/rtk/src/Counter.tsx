import {
	decrement,
	increment,
	incrementByAmount,
	reset,
	useAppDispatch,
	useCountSelector,
} from './redux';

export const Counter = () => {
	const dispatch = useAppDispatch();
	const count = useCountSelector();

	return (
		<div>
			<h2>count: {count}</h2>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				increment
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				decrement
			</button>
			<button
				onClick={() => {
					dispatch(reset());
				}}
			>
				reset
			</button>

			<input
				type='number'
				onBlur={({ target: { value } }) => {
					dispatch(incrementByAmount(Number(value)));
				}}
			/>
		</div>
	);
};
