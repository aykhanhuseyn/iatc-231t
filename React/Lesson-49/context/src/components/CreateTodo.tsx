import { useState, type FC, type FormEvent } from 'react';
import { Divider } from './Divider';
import type { Todo } from '../models';
import { useTodoContext } from '../context';

interface CreateTodoProps {
	onEdit?: () => void;
	defaultValues?: TodoFormData;
	editId?: string;
}

type TodoFormData = Omit<Todo, 'id'>;

const initialFormData: TodoFormData = {
	title: '',
	description: '',
	completed: false,
};

export const CreateTodo: FC<CreateTodoProps> = ({
	onEdit,
	editId,
	defaultValues = initialFormData,
}) => {
	const [formData, setFormData] = useState(defaultValues);
	const { editTodo, createTodo } = useTodoContext();

	const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (editId) {
			editTodo({ id: editId, ...formData });
			onEdit?.();
		} else {
			createTodo(formData);
		}

		setFormData(initialFormData);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<input
				type='text'
				value={formData.title}
				onChange={({ target: { value } }) => {
					setFormData((prev) => ({ ...prev, title: value }));
				}}
			/>
			<Divider />
			<textarea
				value={formData.description}
				onChange={({ target: { value } }) => {
					setFormData((prev) => ({ ...prev, description: value }));
				}}
			/>
			<Divider />
			<input
				type='checkbox'
				checked={formData.completed}
				onChange={({ target: { checked } }) => {
					setFormData((prev) => ({ ...prev, completed: checked }));
				}}
			/>
			<Divider />
			<button type='submit'> {editId ? 'Edit' : 'Create'} Todo</button>
		</form>
	);
};
