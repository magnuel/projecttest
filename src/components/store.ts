import { Action, combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { thunk , ThunkAction } from 'redux-thunk';
import authReducer from './redux/authSlice';

// Define RootState y AppThunk
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Middleware logger
const logger: Middleware = store => next => action => {
  console.group((action as any)?.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

// Middleware crashReporter
const crashReporter: Middleware = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer
});

// Custom middleware
const middleware: Middleware[] = [logger, crashReporter];

middleware.unshift(thunk);

// Store Settings
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middleware)
});

export default store;
