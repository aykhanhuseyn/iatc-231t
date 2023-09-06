import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState, useAppSelector } from '.';

interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 0,
};

const slice = createSlice({
	name: '@counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
		reset: (state) => {
			state.count = 0;
		},
	},
});

export const { increment, decrement, incrementByAmount, reset } = slice.actions;

export const useCountSelector = () =>
	useAppSelector((root: RootState) => root.counter.count) as number;

export default slice.reducer;
