import {
	createElement,
	type HTMLAttributes,
	type FC,
	type ReactNode,
} from 'react';
import cls from './typography.module.css';

type TitleLevels = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends HTMLAttributes<HTMLTitleElement> {
	level?: TitleLevels;
	children?: ReactNode | ReactNode[];
}

export const Title: FC<TitleProps> = ({
	level = 2,
	children,
	className,
	...rest
}) => {
	return createElement(
		`h${level}`,
		{
			className: [cls.title, cls[`title_level_${level}`], className]
				.filter(Boolean)
				.join(' '),
			...rest,
		},
		children,
	);
};
