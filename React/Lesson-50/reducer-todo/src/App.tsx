import { Card } from 'antd';
import { TodoProvider } from './context';
import { CreateTodo, TodoList, MyClass } from './components';

function App() {
	return (
		<TodoProvider>
			<MyClass />
			<h1>This is my app</h1>
			<Card type='inner' style={{ marginBlockEnd: '1rem' }}>
				<CreateTodo />
			</Card>
			<TodoList />
		</TodoProvider>
	);
}

export default App;