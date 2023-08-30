import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);

root.render(<App />);
