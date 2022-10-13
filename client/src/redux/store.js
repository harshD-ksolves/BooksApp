import {configureStore,combineReducers} from '@reduxjs/toolkit';
import userReducer from './Slices/User';
import booksReducer from './Slices/Books';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const rootReducer=combineReducers({user:userReducer,books:booksReducer});
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

  sagaMiddleware.run(watcherSaga);

  export const persistor=persistStore(store);