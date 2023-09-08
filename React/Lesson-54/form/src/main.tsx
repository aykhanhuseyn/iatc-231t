import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
);
