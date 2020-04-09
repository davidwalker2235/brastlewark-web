import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_GLOBAL_DATA} from '../constants/constants';
import { getGlobalData } from '../services/axios';
import { hideLoading, showLoading } from '../actions/loadingActions';
import { setPersonData } from '../actions/personActions';
import { getPersonListData } from '../actions/listActions';

function* fetchGetGlobalData() {
  try {
    yield put(showLoading());
    const userData = yield call(getGlobalData);
    yield put(getPersonListData(userData));
    yield put(setPersonData(userData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* watchGetGlobalData() {
  yield takeLatest(GET_GLOBAL_DATA, fetchGetGlobalData)
}

function* loginSagas() {
  yield all([
    watchGetGlobalData()
  ])
}

export default loginSagas;

