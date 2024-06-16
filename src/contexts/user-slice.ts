import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  balance: number;
  energy: number;
  position: number;
  level: number;
  levelProcess: number;
}

const initialState: UserState = {
  balance: 0,
  energy: 6,
  position: 0,
  level: 2,
  levelProcess: 20,
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
      state.balance = Math.max(0, state.balance + action.payload);
    },
    useEnergy: (state) => {
      state.energy -= 1;
    },
    setPosition: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },
    claimExp: (state) => {
      state.levelProcess += 5;
    }
  },
});

export const { increment, decrement, incrementByAmount, useEnergy, setPosition, claimExp } = userSlice.actions;

export default userSlice.reducer;
