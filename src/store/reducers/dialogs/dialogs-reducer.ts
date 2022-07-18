import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormValuesType } from '../../../components/Dialogs/AddMessageForm/AddMessageForm';

import { DialogsStateType } from './types';

const THOUSAND = 1000;

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
    users: [
      { id: 1, name: 'Алеша' },
      { id: 2, name: 'Володя' },
      { id: 3, name: 'Анюта' },
    ],
    messages: [
      { id: 1, message: 'hello there' },
      { id: 2, message: 'How r u doing?' },
    ],
    message: '',
  } as DialogsStateType,
  reducers: {
    updateMessage(state, { payload }: PayloadAction<{ message: string }>) {
      const { message } = payload;

      state.message = message;
    },
    sendMessage(state, { payload }: PayloadAction<FormValuesType>) {
      const { message } = payload;

      state.messages.push({
        id: Math.floor(Math.random() * THOUSAND),
        message,
      });
    },
  },
});

export const dialogsReducer = dialogsSlice.reducer;
export const { sendMessage, updateMessage } = dialogsSlice.actions;
