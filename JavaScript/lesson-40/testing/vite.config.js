import { defineConfig } from 'vite';

export default defineConfig({
	root: './src',
	base: './',
	test: {
		name: 'my-test',
		root: './src',
		files: '**/*.test.js',
		watch: './src/**/*.test.js',
	},
});
