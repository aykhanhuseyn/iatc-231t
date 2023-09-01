import { Component } from 'react';
import { TodoContext, type TodoContextProps, ActionType } from '../context';

export class MyClass extends Component<unknown, unknown, TodoContextProps> {
	static contextType = TodoContext;
	declare context: React.ContextType<typeof TodoContext>;

	constructor() {
		super({});

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.context.dispatch({
			type: ActionType.CREATE,
			payload: {
				description: 'rdtfgybhuijngf',
				title: 'tfgyhjknlmjhugyf',
				completed: false,
			},
		});
	}

	render() {
		console.log(this.context);

		return (
			<>
				<h1>I am class component</h1>
				<button onClick={this.handleClick}>click me</button>
			</>
		);
	}
}
