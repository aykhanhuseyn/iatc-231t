import { useState, type FC } from 'react';
import { Divider } from './Divider';
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
		<li>
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
					<h3 style={{ display: 'inline' }}>{title}</h3>
					<Divider mode='vertical' />
					<p style={{ display: 'inline' }}>{description}</p>
					<Divider mode='vertical' />
					<p style={{ display: 'inline' }}>is {!completed && 'not'} completed</p>
				</>
			)}

			<Divider mode='vertical' />
			<button
				onClick={() => {
					setEditMode((prev) => !prev);
				}}
			>
				{isEditMode ? 'cancel editing' : 'edit'}
			</button>

			{/* <input
				type='checkbox'
				defaultChecked={completed}
				name='id'
				onChange={({ target: { value } }) => {
					console.log(id, value);
				}}
			/> */}
		</li>
	);
};
