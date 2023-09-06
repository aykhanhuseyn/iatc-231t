import { configureStore } from '@reduxjs/toolkit';
import counter from './counter.slice';
import product from './product.slice';
import api from './users.api';

const store = configureStore({
	reducer: {
		counter,
		product,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(api.middleware);
	},

	// preloadedState
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
