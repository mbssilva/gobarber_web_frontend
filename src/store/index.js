import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = Reactotron.createEnhancer();
// process.env.NODE_ENV === 'development'
// ? console.tron.createSagaMiddleware()
// : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
