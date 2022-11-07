import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  setTasks, deleteTask, addTask, updateTask, checked,
} from '../reducers/tasksReducer';

// get all tasks
const getTasksWithAxios = (id) => axios(`http://localhost:3002/api/tasks/${id}`);

function* TasksSagaWorker(action) {
  try {
    const res = yield call(getTasksWithAxios, action.payload);
    yield put(setTasks(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* tasksSagaWatcher() {
  yield takeEvery('FETCH_TASKS', TasksSagaWorker);
}

// delete one task
const deleteTasksWithAxios = (id) => axios.delete(`http://localhost:3002/api/tasks/${id}`);
function* deleteTasksSagaWorker(action) {
  try {
    yield call(deleteTasksWithAxios, action.payload);
    yield put(deleteTask(action.payload));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* deleteTaskSagaWatcher() {
  yield takeEvery('FETCH_DELETE_TASK', deleteTasksSagaWorker);
}

// add one task
const addTaskWithAxios = (input) => axios.post('http://localhost:3002/api/tasks', input);
function* addTaskSagaWorker(action) {
  try {
    console.log(action.payload);
    const res = yield call(addTaskWithAxios, action.payload);
    console.log(res.data);
    yield put(addTask(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* addTaskSagaWatcher() {
  yield takeEvery('FETCH_ADD_TASK', addTaskSagaWorker);
}

// update one task
const updateTaskWithAxios = (input) => axios.patch(`http://localhost:3002/api/tasks/${input.id}/edit`, input.task);
function* updateTaskSagaWorker(action) {
  try {
    // console.log(action.payload);
    const res = yield call(updateTaskWithAxios, action.payload);
    // console.log(res.data);
    yield put(updateTask(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* updateTaskSagaWatcher() {
  yield takeEvery('FETCH_UPDATE_TASK', updateTaskSagaWorker);
}

// update one task
const handleToggleWithAxios = (input) => axios.patch(`http://localhost:3002/api/tasks/${input}`, {});
function* handleToggleSagaWorker(action) {
  try {
    // console.log(action.payload);
    const res = yield call(handleToggleWithAxios, action.payload);
    // console.log(res.data);
    yield put(checked(action.payload));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* handleToggleSagaWatcher() {
  yield takeEvery('FETCH_UPDATE_CHECKED', handleToggleSagaWorker);
}

export {
  tasksSagaWatcher, deleteTaskSagaWatcher, addTaskSagaWatcher, updateTaskSagaWatcher, handleToggleSagaWatcher,
};
