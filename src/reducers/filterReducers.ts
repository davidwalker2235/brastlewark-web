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
        hair_color: action.value.hair_color,
        ranges: action.value.ranges };

      return { ...state, filterData: data };
    default:
      return state;
  }
}