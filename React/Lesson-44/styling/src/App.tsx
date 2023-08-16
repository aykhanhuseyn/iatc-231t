import { type CSSProperties } from 'react';
import { Button, Input, Typography } from './components';

const rnStyles: Record<string, CSSProperties> = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
	},
	title: {
		color: 'red',
		fontSize: 20,
	},
	button: {
		backgroundColor: 'red',
	},
};

function App() {
	return (
		<div style={rnStyles.container}>
			<Typography.Title as='h3'>Styling</Typography.Title>

			<Typography.StyledTitle as='h1'>Styling</Typography.StyledTitle>
			<Typography.StyledTitle as='h2'>Styling</Typography.StyledTitle>
			<Typography.StyledTitle as='h3'>Styling</Typography.StyledTitle>

			<Button
				style={rnStyles.button}
				version='secondary'
				className='btn btn-primary'
			>
				Click me
			</Button>
			<Input type='number' backgroundColor='green' color='black' />
		</div>
	);
}

export default App;
