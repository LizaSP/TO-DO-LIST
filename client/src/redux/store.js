import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import selectedReducer from './reducers/selectedReducer';
import tasksReducer from './reducers/tasksReducer';
import userReducer from './reducers/userReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    selected: selectedReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
