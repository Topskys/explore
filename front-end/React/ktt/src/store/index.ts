import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; // npm i --save-dev @types/redux-logger
import auth from './auth/reducer';

const store = createStore(
    combineReducers({ auth }),
    applyMiddleware(thunk, logger)
);

export default store
// 返回一个RootState类型，类型的为 执行store.getState的数据类型
// ReturnType获取函数返回值的类型
export type RootState = ReturnType<typeof store.getState>