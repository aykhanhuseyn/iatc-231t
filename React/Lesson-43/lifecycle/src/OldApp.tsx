// import { useState, useEffect } from 'react';

// function App() {
// 	const [count, setCount] = useState(0);
// 	const [age, setAge] = useState(0);

// 	// useMount
// 	useEffect(() => {
// 		console.log('useEffect no Deps');
// 	}, []);

// 	// useEffect(callback, dependencyArray);

// 	// useUpdateCount
// 	useEffect(() => {
// 		// console.log('componentDidMount');
// 		console.log('useEffect deps [count]', count);
// 	}, [count]);

// 	// useUpdateAge
// 	useEffect(() => {
// 		console.log('useEffect deps [age]', age);
// 	}, [age]);

// 	// useUpdate
// 	// useEffect(() => {
// 	// 	console.log('useEffect deps undefined');
// 	// });

// 	return (
// 		<>
// 			<h1>Hello Functional Component</h1>
// 			<h2>State is {count}</h2>
// 			<button onClick={() => setCount(count + 1)}>increase count</button>
// 			<button onClick={() => setCount(count - 1)}>decrease count</button>
// 			<hr />
// 			<button onClick={() => setAge(age + 1)}>increase age</button>
// 			<button onClick={() => setAge(age - 1)}>decrease age</button>
// 		</>
// 	);
// }

import { Component } from 'react';
// import { ShouldComponentUpdate } from './ShouldComponentUpdate';
import { FuncComp } from './FuncComp';

class App extends Component {
	state = {
		count: 0,
		age: 0,
	};

	componentDidMount(): void {
		console.log('componentDidMount');
	}

	componentDidUpdate(): void {
		console.log('componentDidUpdate', this.state);
	}

	render() {
		return (
			<>
				<h1>Hello Class Component</h1>
				<h2>State is {this.state.count}</h2>
				<button
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}
				>
					increase
				</button>
				<button
					onClick={() => {
						this.setState({ count: this.state.count - 1 });
					}}
				>
					decrease
				</button>

				<hr />

				{/* {this.state.count % 2 === 0 && <ShouldComponentUpdate array={[]} />} */}
				{this.state.count % 3 !== 0 && <FuncComp count={this.state.count} />}
			</>
		);
	}
}

export default App;
