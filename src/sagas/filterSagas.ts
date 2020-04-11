import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_PERSONS_BY_NAME_DATA, GET_FILTER_DATA} from '../constants/constants';
import { hideLoading, showLoading } from '../actions/loadingActions';
import { setPersonListData } from '../actions/listActions';
import { getPersonsListByName, getFilterData } from '../shared/utils';
import { Actions, ListData, FilterData } from '../interfaces/appInterfaces';
import { setFilterData } from '../actions/filterActions';

function* fetchPersonsByNameData(data: Actions) {
  try {
    yield put(showLoading());
    const listData: ListData[] = yield call(getPersonsListByName, data.value);
    yield put(setPersonListData({listData}));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* fetchGetFilterData(data: Actions) {
  try {
    yield put(showLoading());
    const filterData: FilterData = yield call(getFilterData, data.value);
    yield put(setFilterData(filterData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* watchGetPersonsByNameData() {
  yield takeLatest(GET_PERSONS_BY_NAME_DATA, fetchPersonsByNameData)
}

function* watchGetFilterData() {
  yield takeLatest(GET_FILTER_DATA, fetchGetFilterData)
}

function* filterSagas() {
  yield all([
    watchGetPersonsByNameData(),
    watchGetFilterData()
  ])
}

export default filterSagas;

