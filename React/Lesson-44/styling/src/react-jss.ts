import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
	input: {
		border: '1px solid #ccc',
		borderRadius: 4,
		padding: 10,
		width: 300,
		backgroundColor: (props: Record<string, string>) =>
			props?.backgroundColor ?? '#fff',
		color: (props: Record<string, string>) => props?.color ?? '#000',
		transition: 'border 0.3s ease-in-out',
		'&:focus': {
			outline: 'none',
			border: '1px solid #000',
		},
		'&:hover': {
			border: '1px solid #000',
		},
	},
});
