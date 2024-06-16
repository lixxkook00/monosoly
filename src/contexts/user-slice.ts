import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  balance: number;
  energy: number;
}

const initialState: UserState = {
  balance: 0,
  energy: 6,
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
    useEnergy: (state) => {
      state.energy -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount, useEnergy } = userSlice.actions;

export default userSlice.reducer;
