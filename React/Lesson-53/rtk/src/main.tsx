import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
