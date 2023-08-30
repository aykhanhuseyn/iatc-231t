import { FC } from 'react';

interface DividerProps {
	mode?: 'horizontal' | 'vertical';
}

export const Divider: FC<DividerProps> = ({ mode }) => {
	if (mode === 'vertical') {
		return (
			<span
				style={{
					display: 'inline-block',
					margin: '0 10px',
					marginBottom: '-3px',
					height: '20px',
					width: '1px',
					backgroundColor: 'black',
				}}
			/>
		);
	}

	return <hr />;
};
