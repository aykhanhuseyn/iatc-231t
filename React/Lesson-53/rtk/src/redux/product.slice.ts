import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ProductsResponse } from '../models';
import { useAppSelector } from '.';

interface PropductState extends ProductsResponse {
	loading: boolean;
	error: string | null;
}

const initialState: PropductState = {
	limit: 0,
	skip: 0,
	total: 0,
	products: [],
	loading: false,
	error: null,
};

export const getProducts = createAsyncThunk(
	'@product/getProducts',
	async () => {
		const data = await (await fetch('https://dummyjson.com/products')).json();
		return data as ProductsResponse;
	},
);

const slice = createSlice({
	name: '@product',
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProducts.rejected, (state) => {
				state.loading = false;
				state.error = 'some error occured';
			})
			.addCase(getProducts.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.error = null;
				state.limit = payload.limit;
				state.products = payload.products;
				state.skip = payload.skip;
				state.total = payload.total;
			}),
});

export const useProductsSelector = () =>
	useAppSelector((root) => root.product) as PropductState;

export default slice.reducer;
