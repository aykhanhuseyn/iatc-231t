import type { FC } from 'react';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../context';

export const TodoList: FC = () => {
	const { todos } = useTodoContext();

	return (
		<div>
			<h2>Todo List</h2>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</ul>
		</div>
	);
};
