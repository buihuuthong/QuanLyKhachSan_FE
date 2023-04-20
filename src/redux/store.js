import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import roleSlice from './roleSlice';
import userSlice from './userSlice';

const persistConfig = {
  key: 'rootReducerConfig',
  storage,
  whitelist: ['role', 'user'],
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
    role: roleSlice,
    user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);

export default store;
