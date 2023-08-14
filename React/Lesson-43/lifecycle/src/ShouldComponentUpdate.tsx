import { Component, PureComponent } from 'react';

interface Props {
	array: unknown[];
}

export class ShouldComponentUpdate extends Component<Props> {
	// shouldComponentUpdate(nextProps: Props) {
	// 	console.log(nextProps, this.props);
	// 	if (JSON.stringify(nextProps.array) === JSON.stringify(this.props.array)) {
	// 		return false;
	// 	}
	// 	return true;
	// }

	componentDidMount(): void {
		console.log('mount');
	}

	componentWillUnmount(): void {
		console.log('unmount');
	}

	render() {
		return (
			<div>
				<span>{Math.random()}</span>
			</div>
		);
	}
}
