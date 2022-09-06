import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../components/login/profileSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: loginReducer,
  },
});
