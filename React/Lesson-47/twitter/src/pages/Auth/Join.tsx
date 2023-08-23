import { Link } from 'react-router-dom';
import { Button, Typography } from 'components';
import logo from '../../assets/logo.png';

export const Join = () => {
	return (
		<div>
			<img
				src={logo}
				style={{
					width: '50px',
					height: '50px',
				}}
				alt='twitter logo'
			/>
			<Typography.Title level={1}>Happening now</Typography.Title>
			<Typography.Title level={2}>Join Twitter today</Typography.Title>
			<Button block>hello</Button>
			<Button block>bye</Button>
			<Button block>bye bye</Button>
			<Typography.Text block>
				By singing up you agree to the Terms of Service and Privacy Policy,
				including Cookie Use.
			</Typography.Text>
			<Typography.Text>
				Already have an account? <Link to='/login'>Login</Link>
			</Typography.Text>
		</div>
	);
};
