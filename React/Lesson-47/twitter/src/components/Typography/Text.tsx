import { createElement, FC, HTMLAttributes, ReactNode } from 'react';

interface TextProps
	extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
	children: ReactNode | ReactNode[];
	block?: boolean;
}

export const Text: FC<TextProps> = ({
	children,
	block,
	className,
	...rest
}) => {
	return createElement(
		block ? 'p' : 'span',
		{
			className,
			...rest,
		},
		children,
	);
};
