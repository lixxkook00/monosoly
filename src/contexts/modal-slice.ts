import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from '../types';

const initialState: ModalState = {
  teleTaskModal: false,
  dailyTaskModal: true,
};

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = true
    },
    close: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = false
    }
  },
});

export const { show, close } = modalReducer.actions;

export default modalReducer.reducer;
