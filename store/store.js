import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const middlewares = [process.env.NODE_ENV === 'development' && logger, thunk];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
