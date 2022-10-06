import { configureStore } from "@reduxjs/toolkit";
import notesListReducer from './reducers/notesListSlice';

export const store = configureStore({
  reducer: {
    notesList: notesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;