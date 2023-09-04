import axios, { AxiosError } from 'axios';
import { message } from 'antd';

const api = axios.create({
	baseURL: 'https://dummyjson.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

// api.interceptors.request.use(
// 	(config) => {
// 		console.log('request', config);
// 		config.headers.set('auth', 'my token');
// 		return config;
// 	},
// 	(error) => {
// 		console.log('request', error);
// 		return Promise.reject(error);
// 	},
// );

api.interceptors.response.use(
	(config) => {
		console.log('response', config);
		// config.data.products = config.data.products.filter(
		// 	(x) => x.title.length > 20,
		// );
		return config;
	},
	(error) => {
		console.log(error);
		if (error instanceof AxiosError) {
			message.error('this is axios error' + error.cause?.name);
		}
		return Promise.reject('response' + error.response);
	},
);

export default api;
