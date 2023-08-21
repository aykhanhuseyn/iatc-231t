import {
	// state
	useState,

	// side effects
	useEffect,
	useLayoutEffect,

	// dom refs
	useRef,
	useId,

	// memoization
	useCallback,
	useMemo,
	// memo function is not hook
} from 'react';
import { StateView, MemoizedStateView } from './components';

function App() {
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(0);

	// const func = useCallback(() => {}, []);

	const id = useId();
	console.log('id', id);

	const ref = useRef<HTMLHeadingElement>(null);

	console.log('render');

	useEffect(() => {
		console.log('useEffect mount');

		return () => {
			console.log('cleanup mount');
		};
	}, []);

	useEffect(() => {
		console.log('useEffect update');
	});

	useEffect(() => {
		console.log('useEffect', count);

		// document.getElementById('hello')!.innerText = `Hello ${count}`;

		// if (ref.current) {
		// 	ref.current.innerText = `Hello ${count}`;
		// }

		return () => {
			console.log('cleanup', count);
		};
	}, [count]);

	useLayoutEffect(() => {
		console.log('useLayoutEffect mount');
	}, []);

	useLayoutEffect(() => {
		console.log('useLayoutEffect update', count);

		if (ref.current) {
			ref.current.innerText = `Hello ${count}`;
		}
	}, [count]);

	// #region useCallback
	const handleIncrementCount = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	const handleDecrementCount = useCallback(() => {
		setCount(count - 1);
	}, [count]);

	const handleIncrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);
	const handleDecrementAge = useCallback(() => {
		setAge(age - 1);
	}, [age]);
	// #endregion

	const nonMemoizedValue = count * Math.random();

	const memoizedValue = useMemo(() => {
		console.log('memoizedValue');
		return count * Math.random();
	}, [count]);

	return (
		<>
			<h1 id={id} ref={ref}>
				hello
			</h1>
			<h2>
				count + age = {nonMemoizedValue} - {memoizedValue}
			</h2>
			<MemoizedStateView
				name='Count'
				value={count}
				incrementer={handleIncrementCount}
				decrementer={handleDecrementCount}
			/>
			<MemoizedStateView
				name='Age'
				value={age}
				incrementer={handleIncrementAge}
				decrementer={handleDecrementAge}
			/>
		</>
	);
}

export default App;
