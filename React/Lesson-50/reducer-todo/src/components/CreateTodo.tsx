import { type FC } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import type { Todo } from '../models';
import { useTodoContext, ActionType } from '../context';

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
	const [form] = Form.useForm<TodoFormData>();
	const { dispatch } = useTodoContext();

	const formSubmitHandler = (formData: TodoFormData) => {
		if (editId) {
			dispatch({ type: ActionType.EDIT, payload: { id: editId, ...formData } })
			onEdit?.();
		} else {
			dispatch({ type: ActionType.CREATE, payload: formData });
		}

		form.resetFields();
	};

	return (
		<Form
			form={form}
			name={editId ?? 'create-todo'}
			onFinish={formSubmitHandler}
			onFinishFailed={console.warn}
			initialValues={defaultValues}
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
		>
			<Form.Item<TodoFormData>
				name='title'
				label='Title'
				rules={[
					{
						required: true,
						message: 'Please input a title',
					},
					{
						min: 3,
					},
					{
						max: 20,
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item<TodoFormData>
				name='description'
				label='Description'
				rules={[
					{
						required: true,
						message: 'Please input a description',
					},
					{
						min: 10,
					},
					{
						max: 100,
					},
				]}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item<TodoFormData>
				name='completed'
				label='Completed'
				valuePropName='checked'
			>
				<Checkbox />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 26 }}>
				<Button type='primary' htmlType='submit'>
					{editId ? 'Edit' : 'Create'} Todo
				</Button>
			</Form.Item>
		</Form>
	);
};
