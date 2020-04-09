import {GET_PERSON_LIST_DATA, SET_PERSON_LIST_DATA} from '../constants/constants';
import { Actions, ListInfoData } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonListData = (personListData: Brastlewark[]): Actions => (
  {type: GET_PERSON_LIST_DATA, value: personListData});

export const setPersonListData = (personListData: ListInfoData): Actions => (
  {type: SET_PERSON_LIST_DATA, value: personListData});