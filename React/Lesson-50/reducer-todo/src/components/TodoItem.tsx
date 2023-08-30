import { useState, type FC } from 'react';
import { Button, Card, Typography } from 'antd';
import { CreateTodo } from './CreateTodo';
import type { Todo } from '../models';

interface TodoItemProps extends Todo {}

export const TodoItem: FC<TodoItemProps> = ({
	id,
	title,
	completed,
	description,
}) => {
	const [isEditMode, setEditMode] = useState(false);

	return (
		<Card type='inner'>
			{isEditMode ? (
				<CreateTodo
					onEdit={() => {
						setEditMode(false);
					}}
					editId={id}
					defaultValues={{ title, completed, description }}
				/>
			) : (
				<>
					<Typography.Title level={3} style={{ display: 'inline' }}>
						{title ?? '-'}
					</Typography.Title>
					<Typography.Paragraph style={{ display: 'inline' }}>
						{description ?? '-'}
					</Typography.Paragraph>
					<Typography.Paragraph style={{ display: 'inline' }}>
						is {!completed && 'not'} completed
					</Typography.Paragraph>
				</>
			)}

			<Button
				onClick={() => {
					setEditMode((prev) => !prev);
				}}
				type='text'
				danger
			>
				{isEditMode ? 'cancel editing' : 'edit'}
			</Button>

			{/* <input
				type='checkbox'
				defaultChecked={completed}
				name='id'
				onChange={({ target: { value } }) => {
					console.log(id, value);
				}}
			/> */}
		</Card>
	);
};
