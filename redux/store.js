import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import burgerSlice from './burgerSlice'
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import userSlice from './userSlice'
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false , serializableCheck : false}), sagaMiddleware];

export const store = configureStore({
    reducer: {
        burger : burgerSlice,
        user : userSlice,
    },
    middleware
  })
  sagaMiddleware.run(mySaga);
