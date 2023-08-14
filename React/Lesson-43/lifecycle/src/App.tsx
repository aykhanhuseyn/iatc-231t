import React from 'react';
import { Increment, Decrement, CountWrapper, Subscriber } from './components';

const App = () => {
	const [count, setCount] = React.useState(0);
	const [key, setkey] = React.useState(0);

	const increment = () => setCount((c) => c + 1);

	const decrement = () => setCount((c) => c - 1);

	return (
		<div>
			<h1>React</h1>
			{React.createElement(
				CountWrapper,
				{
					name: 'Count: ',
					key,
					count,
				},
				'Hello World',
			)}
			{/* <CountWrapper key={key} name='Count: ' count={count} /> */}
			<Increment increment={increment} />
			<Decrement decrement={decrement} />
			<button onClick={() => setkey((k) => k + 1)}>Change Key</button>
			{count > 5 && <Subscriber />}
		</div>
	);
};

export default App;
