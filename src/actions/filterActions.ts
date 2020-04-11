import { GET_PERSONS_BY_NAME_DATA, GET_FILTER_DATA, SET_FILTER_DATA } from '../constants/constants';
import { Actions, FilterState, FilterData } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonByNameListData = (name: string, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSONS_BY_NAME_DATA, value: {name, globalData}});

export const getFilterData = (globalData: Brastlewark[]): Actions => (
  {type: GET_FILTER_DATA, value: globalData});

export const setFilterData = ({professions, hairColors}: FilterData): Actions => (
  {type: SET_FILTER_DATA, value: {professions, hairColors}});