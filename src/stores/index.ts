import { combineReducers } from 'redux';
import plan from '@stores/plan/plan';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  plan: plan,
});

export const store = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export const wrapper = createWrapper(store);
