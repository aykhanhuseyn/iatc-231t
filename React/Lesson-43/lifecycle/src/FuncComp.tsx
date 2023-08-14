import { useEffect } from 'react';

export function FuncComp(props: { count: number }) {
	useEffect(() => {
		console.log('FuncComp mount or update', props.count);

		return () => {
			console.log('FuncComp unmount');
		};
	}, [props.count]);

	return (
		<>
			<h1>FuncComp</h1>
		</>
	);
}
