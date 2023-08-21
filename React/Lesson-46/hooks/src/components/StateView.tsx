import {
	useId,
	type FC,
	type MouseEventHandler,
	type ReactNode,
	memo,
	// Component,
	// PureComponent,
} from 'react';

interface StateViewProps {
	name: string;
	value: ReactNode;
	incrementer: MouseEventHandler<HTMLButtonElement>;
	decrementer: MouseEventHandler<HTMLButtonElement>;
}

export const StateView: FC<StateViewProps> = ({
	name,
	value,
	incrementer,
	decrementer,
}) => {
	const id = useId();
	console.log('StateView rendering', name, id);

	return (
		<div id={id}>
			<h2>
				{name}: {value}
			</h2>
			<button onClick={incrementer}>Increment</button>
			<button onClick={decrementer}>Decrement</button>
		</div>
	);
};

export const MemoizedStateView = memo(StateView);
