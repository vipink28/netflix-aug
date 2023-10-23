import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tvReducer from '../features/tv/tvSlice';
import commonReducer from '../features/common/commonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tv: tvReducer,
    common: commonReducer
  },
});
