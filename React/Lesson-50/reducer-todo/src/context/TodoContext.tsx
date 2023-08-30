/* eslint-disable no-mixed-spaces-and-tabs */
import {
	createContext,
	useContext,
	useReducer,
	type Dispatch,
	type FC,
	type PropsWithChildren,
} from 'react';
import { nanoid } from 'nanoid';
import type { Todo } from '../models';

// type CreateTodoFn = (data: Omit<Todo, 'id'>) => void;
// type EditTodoFn = (data: Todo) => void;

interface TodoContextProps {
	todos: Todo[];
	dispatch: Dispatch<Action>;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

type Action = {
	type: ActionType.CREATE;
	payload: Omit<Todo, 'id'>;
} | {
	type: ActionType.EDIT;
	payload: Todo;
} | {
	type: ActionType.DELETE;
	payload: Todo['id'];
} | {
	type: ActionType.VIEW,
	payload: Todo['id'];
} | {
	type: ActionType.VIEW_ALL,
}

export enum ActionType {
	CREATE,
	EDIT,
	DELETE,
	VIEW,
	VIEW_ALL,
}

function reducer(state: Todo[], action: Action) {
	let editingIndex = 0;
	switch (action.type) {
		case ActionType.CREATE:
			return [
				...state,
				{
					id: nanoid(),
					...action.payload,
				},
			];
		case ActionType.EDIT:
			editingIndex = state.findIndex(({ id }) => id === action.payload.id);
			return [...state.slice(0, editingIndex), action.payload, ...state.slice(editingIndex + 1)]
		case ActionType.DELETE:
			return state.filter(({ id }) => id !== action.payload);
		case ActionType.VIEW:
			return state;
		case ActionType.VIEW_ALL:
			return state;
		default:
			return state;
	}
}

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
	const [todos, dispatch] = useReducer(reducer, []);

	// const createTodo: CreateTodoFn = useCallback((data) => {
	// 	setTodos((previousTodos) => [...previousTodos, { ...data, id: nanoid() }]);
	// }, []);

	// const editTodo: EditTodoFn = useCallback((data) => {
	// 	setTodos((previousTodos) => {
	// 		const index = previousTodos.findIndex((todo) => todo.id === data.id);
	// 		const newTodos = [...previousTodos];
	// 		newTodos[index] = data;
	// 		return newTodos;
	// 	});
	// }, []);

	return (
		<TodoContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoContext = () => useContext<TodoContextProps>(TodoContext);
