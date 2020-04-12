import { GET_PERSONS_BY_NAME_DATA, GET_FILTER_DATA, SET_FILTER_DATA, GET_LIST_DATA_FROM_FILTER, SET_LIST_DATA_FROM_FILTER } from '../constants/constants';
import { Actions, FilterState, FilterData } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonByNameListData = (name: string, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSONS_BY_NAME_DATA, value: {name, globalData}});

export const getFilterData = (globalData: Brastlewark[]): Actions => (
  {type: GET_FILTER_DATA, value: globalData});

export const setFilterData = ({professions, hair_color, ranges}: FilterData): Actions => (
  {type: SET_FILTER_DATA, value: {professions, hair_color, ranges}});

export const getListDataFromFilter = (filterData: any, globalData: Brastlewark[]): Actions => (
  {type: GET_LIST_DATA_FROM_FILTER, value: {filterData, globalData}});

export const setListDataFromFilter = ({professions, hair_color, ranges}: FilterData): Actions => (
  {type: SET_LIST_DATA_FROM_FILTER, value: {professions, hair_color, ranges}});