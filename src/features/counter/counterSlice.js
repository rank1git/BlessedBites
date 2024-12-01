import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count--;
    },
    multiply: state => {
      state.count *= state.count;
    },
    divide: state => {
      state.count /= state.count;
    },
    reset: state => {
      state.count = 0;
    }
  }
})

export const { increment, decrement, multiply, divide, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;