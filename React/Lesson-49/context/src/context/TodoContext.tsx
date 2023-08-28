import {
	createContext,
	useContext,
	useState,
	type FC,
	type PropsWithChildren,
	useCallback,
} from 'react';
import { nanoid } from 'nanoid';
import type { Todo } from '../models';

type CreateTodoFn = (data: Omit<Todo, 'id'>) => void;
type EditTodoFn = (data: Todo) => void;

interface TodoContextProps {
	todos: Todo[];
	createTodo: CreateTodoFn;
	editTodo: EditTodoFn;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const createTodo: CreateTodoFn = useCallback((data) => {
		setTodos((previousTodos) => [...previousTodos, { ...data, id: nanoid() }]);
	}, []);

	const editTodo: EditTodoFn = useCallback((data) => {
		setTodos((previousTodos) => {
			const index = previousTodos.findIndex((todo) => todo.id === data.id);
			const newTodos = [...previousTodos];
			newTodos[index] = data;
			return newTodos;
		});
	}, []);

	return (
		<TodoContext.Provider value={{ todos, createTodo, editTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => useContext<TodoContextProps>(TodoContext);
