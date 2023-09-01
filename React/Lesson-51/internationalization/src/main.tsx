import { createRoot } from 'react-dom/client';
import App from './App';
import './i18next';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(<App />);
