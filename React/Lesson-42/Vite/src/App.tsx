import { useState, Component } from 'react';
import type { FC } from 'react';
import './App.css';

interface ButtonProps {
	onClick: () => void;
	children: string;
}

function Button({ onClick, children }: ButtonProps) {
	// console.log('Button', children, 'rendered');
	return (
		<button
			style={
				children === 'increment'
					? { backgroundColor: 'green' }
					: { backgroundColor: 'red' }
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

const Title = <h1>Vite + React</h1>;

interface AgeCalculatorProps {
	name: string;
	birthYear: number;
}
const AgeCalculator: FC<AgeCalculatorProps> = ({ name, birthYear }) => {
	const date = new Date();
	const age = date.getFullYear() - birthYear;

	return (
		<div>
			<h1>{name}</h1>
			<h2>{age}</h2>
			<h3>You are {age > 30 ? 'old' : 'young'}.</h3>
		</div>
	);
};

const people = [
	{ name: 'John', year: 1988 },
	{ name: 'Jack', year: 1990 },
	{ name: 'James', year: 1994 },
];

function App() {
	const [count, setCount] = useState(0);
	const [value, setValue] = useState('');

	const increment = () => {
		setCount((count) => count + 1);
	};

	const decrement = () => {
		setCount((count) => count - 1);
	};

	return (
		<>
			{Title}
			<div className='card'>
				<Button onClick={increment}>increment</Button>
				<br />
				<Button onClick={decrement}>decrement</Button>
			</div>
			<h1>count is {count}</h1>
			<br />
			<h1>count is {count > 0 ? 'greater' : 'less'} than 0</h1>
			<br />

			{/* text area starts here */}
			<textarea
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<p>{value}</p>
			<br />

			{people.map((person, index) => (
				<AgeCalculator key={index} name={person.name} birthYear={person.year} />
			))}
		</>
	);
}

export default App;

export class ClassApp extends Component<{ name: string }, { count: number }> {
	constructor(props: { name: string }) {
		super(props);
		this.state = {
			count: 0,
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState({ count: this.state.count + 1 });
	}

	decrement() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<>
				<h1>Vite + React</h1>
				<div className='card'>
					<button onClick={this.increment}>increment</button>
					<br />
					<button onClick={this.decrement}>decrement</button>
				</div>
				<h1>count is {this.state.count}</h1>
			</>
		);
	}
}

// export default ClassApp;
