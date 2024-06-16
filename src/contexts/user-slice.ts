import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  balance: number;
}

const initialState: UserState = {
  balance: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.balance += 1;
    },
    decrement: (state) => {
      state.balance -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
