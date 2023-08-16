import {
	useState,
	type FC,
	type InputHTMLAttributes,
	ChangeEventHandler,
} from 'react';
import { useStyles } from '../../react-jss';
import { cls } from '../../util';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	type?: 'text' | 'number' | 'password' | 'email' | 'tel';
	backgroundColor?: string;
	color?: string;
}

const numberRegExp = /^\d*$/g;

export const Input: FC<InputProps> = ({
	className,
	type = 'text',
	backgroundColor = 'white',
	color = 'black',
	...rest
}) => {
	const [value, setValue] = useState('');
	const classes = useStyles({ backgroundColor, color });

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		if (type === 'number') {
			const matchedValue = e.target.value.match(numberRegExp)?.[0] ?? '';
			setValue(matchedValue);
		} else {
			setValue(e.target.value);
		}
	};

	return (
		<input
			onChange={handleChange}
			value={value}
			className={cls(classes.input, className)}
			{...rest}
		/>
	);
};
