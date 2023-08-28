import { TodoProvider } from './context';
import { CreateTodo, TodoList } from './components';

function App() {
	return (
		<TodoProvider>
			<div>
				<h1>This is my app</h1>
				<CreateTodo />
				<TodoList />
			</div>
		</TodoProvider>
	);
}

export default App;
