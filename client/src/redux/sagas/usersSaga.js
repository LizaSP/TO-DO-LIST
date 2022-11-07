import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { setAuthUser, logoutUser } from '../reducers/userReducer';

// check user
const checkAuth = () => axios.post('http://localhost:3002/api/user/check');

function* checkUserSagaWorker() {
  try {
    const res = yield checkAuth();
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* checkUserSagaWatcher() {
  yield takeEvery('CHECK_USER', checkUserSagaWorker);
}

// login user
const loginUser = (input) => axios.post('http://localhost:3002/api/user/login', input);

function* loginUserSagaWorker(action) {
  try {
    const res = yield call(loginUser, action.payload);
    // yield put(setAuthUser(res.data));
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* loginUserSagaWatcher() {
  yield takeEvery('LOGIN_USER', loginUserSagaWorker);
}

// signup user
const signupUser = (input) => axios.post('http://localhost:3002/api/user/signup', input);

function* signupUserSagaWorker(action) {
  try {
    const res = yield call(signupUser, action.payload);
    // yield put(setAuthUser(res.data));
    yield put(setAuthUser({ ...res.data, loading: false }));
  } catch (e) {
    yield put(setAuthUser({ loading: false }));
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* signupUserSagaWatcher() {
  yield takeEvery('SIGNUP_USER', signupUserSagaWorker);
}

// logout user
const logoutUserAsync = () => axios('http://localhost:3002/api/user/logout');

function* logoutUserSagaWorker() {
  try {
    yield logoutUserAsync();
    yield put(logoutUser());
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* logoutUserSagaWatcher() {
  yield takeEvery('LOGOUT_USER', logoutUserSagaWorker);
}

export {
  checkUserSagaWatcher, loginUserSagaWatcher, signupUserSagaWatcher, logoutUserSagaWatcher,
};
