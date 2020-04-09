import {SET_PERSON_DATA} from '../constants/constants';
import { Actions, PersonProps } from '../interfaces/appInterfaces';

const initialState: PersonProps = {
  personData: undefined
}

export default function listReducer(state: PersonProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_PERSON_DATA:
      return { ...state, personData: action.value };
    default:
      return state;
  }
}