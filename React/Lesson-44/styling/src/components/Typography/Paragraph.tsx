import type { HtmlHTMLAttributes, ReactNode, FC } from 'react';

interface ParagraphProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
	children: ReactNode;
}

export const Paragraph: FC<ParagraphProps> = ({ children, ...props }) => {
	return <p {...props}>{children}</p>;
};
