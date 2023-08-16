import type { FC, ReactNode, HTMLAttributes } from 'react';
import buttonModule from './button.module.css';
import { cls } from '../../util';

type ButtonVersion = 'primary' | 'secondary';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	version?: ButtonVersion;
}

const classNameMap: Record<ButtonVersion, string> = {
	primary: buttonModule.button__primary,
	secondary: buttonModule.button__secondary,
};

export const Button: FC<ButtonProps> = ({
	children,
	className,
	version,
	...rest
}) => {
	return (
		<button
			className={cls(buttonModule.button, classNameMap[version!], className)}
			{...rest}
		>
			{children}
		</button>
	);
};
