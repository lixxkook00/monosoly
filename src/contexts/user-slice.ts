import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userName: string;
  balance: number;
  energy: number;
  position: number;
  level: number;
  levelProcess: number;
  language: string;
}

// Read initial language from localStorage
const savedLanguage = localStorage.getItem('language') || 'en';

const initialState: UserState = {
  userName: 'Admin',
  balance: 0,
  energy: 6,
  position: 0,
  level: 2,
  levelProcess: 20,
  language: savedLanguage,
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
    },
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload); // Save language to localStorage
    },
  },
});

export const { increment, decrement, incrementByAmount, useEnergy, setPosition, claimExp, changeLanguage } = userSlice.actions;

export default userSlice.reducer;
