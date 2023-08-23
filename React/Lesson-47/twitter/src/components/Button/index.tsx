import type { FC, HTMLAttributes, ReactNode } from 'react';
import cls from './button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	version?: 'primary' | 'secondary';
	children: ReactNode | ReactNode[];
	block?: boolean;
}

export const Button: FC<ButtonProps> = ({ version = 'secondary', block }) => {
	return (
		<button
			className={[
				cls.btn,
				cls[`btn__${version}`],
				cls[`btn__${block ? 'block' : 'inline'}`],
			].join(' ')}
		>
			Button
		</button>
	);
};
