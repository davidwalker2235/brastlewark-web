import {SET_FILTER_DATA} from '../constants/constants';
import { Actions, FilterState } from '../interfaces/appInterfaces';

const initialState: FilterState = {
  filterData: undefined
}

export default function filterReducer(state: FilterState = initialState, action: Actions) {
  switch (action.type) {
    case SET_FILTER_DATA:
      const data = {
        professions: action.value.professions,
        hairColors: action.value.hairColors };

      return { ...state, filterData: data };
    default:
      return state;
  }
}