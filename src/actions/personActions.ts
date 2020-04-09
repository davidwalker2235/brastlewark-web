import {GET_PERSON_DATA, SET_PERSON_DATA} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonData = (id: number, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSON_DATA, value: {id, globalData}});

export const setPersonData = (personData: any): Actions => (
  {type: SET_PERSON_DATA, value: personData});