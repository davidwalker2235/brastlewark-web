import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_PERSONS_BY_NAME_DATA} from '../constants/constants';
import { hideLoading, showLoading } from '../actions/loadingActions';
import { setPersonListData } from '../actions/listActions';
import { getPersonsListByName } from '../shared/utils';
import { Actions, ListInfoData, ListData } from '../interfaces/appInterfaces';

const getPersonsByNameData = ({value}: Actions): ListInfoData => {
  return getPersonsListByName(value) 
}

function* fetchPersonsByNameData(data: Actions) {
  try {
    yield put(showLoading());
    const listData: ListData[] = yield call(getPersonsByNameData, data);
    yield put(setPersonListData({listData}));
    yield put(hideLoading());
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* watchGetPersonsByNameData() {
  yield takeLatest(GET_PERSONS_BY_NAME_DATA, fetchPersonsByNameData)
}

function* filterSagas() {
  yield all([
    watchGetPersonsByNameData()
  ])
}

export default filterSagas;

