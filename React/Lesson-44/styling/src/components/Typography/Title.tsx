import {
	type FC,
	type ReactNode,
	createElement,
	type HtmlHTMLAttributes,
	CSSProperties,
} from 'react';
import { styled } from 'styled-components';

interface HStyles {
	fontSize: CSSProperties['fontSize'];
	fontWeight: CSSProperties['fontWeight'];
	lineHeight: CSSProperties['lineHeight'];
}

const styleMap: Record<TitleVersions, HStyles> = {
	h1: {
		fontSize: '2.5rem',
		fontWeight: 600,
		lineHeight: '3rem',
	},
	h2: {
		fontSize: '2rem',
		fontWeight: 600,
		lineHeight: '2.5rem',
	},
	h3: {
		fontSize: '1.75rem',
		fontWeight: 600,
		lineHeight: '2.25rem',
	},
	h4: {
		fontSize: '1.5rem',
		fontWeight: 600,
		lineHeight: '2rem',
	},
	h5: {
		fontSize: '1.25rem',
		fontWeight: 600,
		lineHeight: '1.75rem',
	},
	h6: {
		fontSize: '1rem',
		fontWeight: 600,
		lineHeight: '1.5rem',
	},
};

export const StyledTitle = styled.h2<TitleProps>`
	font-size: ${(props) => styleMap[props.as as TitleVersions]?.fontSize};
	font-weight: ${(props) => styleMap[props.as as TitleVersions]?.fontWeight};
	line-height: ${(props) => styleMap[props.as as TitleVersions]?.lineHeight};
	margin: 0;
	padding: 0;
	color: #2063ff;
`;

type TitleVersions = `h${1 | 2 | 3 | 4 | 5 | 6}`;

interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
	as?: TitleVersions;
	children: ReactNode;
}

export const Title: FC<TitleProps> = ({ as = 'h2', children, ...props }) => {
	return createElement(as, props, children);
};
