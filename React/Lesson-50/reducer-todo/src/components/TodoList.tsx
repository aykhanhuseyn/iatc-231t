import { useMemo, type FC } from 'react';
import { List } from 'antd';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../context';

export const TodoList: FC = () => {
	const { todos } = useTodoContext();

	const memo = useMemo(() => {
		const count = todos.reduce(
			(prev, curr) => {
				if (curr.completed) {
					prev.completed++;
				} else {
					prev.notCompleted++;
				}
				return prev;
			},
			{ completed: 0, notCompleted: 0 },
		);

		return { ...count, all: todos.length };
	}, [todos]);

	return (
		<List
			header={<div>Todo List</div>}
			footer={
				<div>
					<p>there are {memo.all} items in the list</p>
					<p>
						{memo.completed} is completed, {memo.notCompleted} is not
					</p>
				</div>
			}
			bordered
			dataSource={todos}
			renderItem={(item) => (
				<List.Item>
					<TodoItem key={item.id} {...item} />
				</List.Item>
			)}
		/>
	);
};
