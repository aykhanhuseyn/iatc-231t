// import path from 'path';
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

// export default {}
// CommonJS
module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js'),
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	devServer: {
		port: 3000,
		https: true,
		hot: true, // hot module replacement
	},
	devtool: 'eval-cheap-source-map',
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(?:(m|c)?js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							[
								'@babel/plugin-proposal-record-and-tuple',
								{
									importPolyfill: true,
								},
							],
						],
						presets: [
							[
								'@babel/preset-env',
								{
									targets: 'defaults',
								},
							],
						],
					},
				},
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Hello, Webpack!',
			template: './src/index.html',
		}),
		new HTMLWebpackPlugin({
			title: 'Bye, Webpack!',
			filename: 'bye.html',
		}),
		// new ESLintPlugin({
		// 	extensions: ['js', 'mjs', 'cjs'],
		// 	exclude: 'node_modules',
		// 	fix: true,
		// 	emitWarning: true,
		// 	cwd: path.resolve(__dirname, './src'),
		// }),
	],
};
