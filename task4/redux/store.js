import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Use AsyncStorage for React Native

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,  // Use the persisted reducer
  },
});

export const persistor = persistStore(store);  // Create a persistor
export default store;