/* eslint-disable import/prefer-default-export */
import { all } from 'redux-saga/effects';
import {
  deleteTaskSagaWatcher, tasksSagaWatcher, addTaskSagaWatcher, updateTaskSagaWatcher, handleToggleSagaWatcher,
} from './tasksSaga';
import {
  checkUserSagaWatcher, loginUserSagaWatcher, signupUserSagaWatcher, logoutUserSagaWatcher,
} from './usersSaga';

export function* rootSaga() {
  yield all([
    checkUserSagaWatcher(),
    loginUserSagaWatcher(),
    signupUserSagaWatcher(),
    logoutUserSagaWatcher(),
    tasksSagaWatcher(),
    deleteTaskSagaWatcher(),
    addTaskSagaWatcher(),
    updateTaskSagaWatcher(),
    handleToggleSagaWatcher(),
  ]);
}
