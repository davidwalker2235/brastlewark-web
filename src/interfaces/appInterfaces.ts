import { RouterState } from 'connected-react-router'
import { ListTypeEnum } from "../shared/enums";

// Commons
export interface Brastlewark {
  id: number;
  name: string;
  thumbnail: string;
  age: number;
  weight: number;
  height: number;
  hair_color: string;
  professions: Array<string>;
  friends: Array<string>;
};

export interface GlobalData {
  Brastlewark: Brastlewark[]
}

export interface ListData {
  id?: number;
  name?: string;
  thumbnail?: string;
}

export interface ListInfoData {
  listType?: ListTypeEnum;
  listData?: ListData[];
}

// State
export interface State {
  loading: LoadingState;
  home: HomeProps;
  list: ListProps;
  person: PersonProps;
  router: RouterState;
}

// Actions
export interface Actions {type: string, value?: any};

// Loading screen
export interface LoadingState {
  isLoading: boolean
}

// Home
export interface HomeProps {
  globalData: Object;
}

// Cover
export interface CoverProps {
  history: any;
}

// List
export interface ListProps {
  route?: any;
  personListData?: ListData[];
  professionListData?: ListData[];
  listType?: ListTypeEnum;
  personsFromProfession?: ListData[]
  listData?: ListData[];
  onClickRow?: (name?: string, id?: number) => void;
};

export interface ListRows {
  route?: any;
  itemData: Brastlewark;
  listType: ListTypeEnum; 
  onClickRow: (name?: string, id?: number) => void;
}

// Person
export interface PersonProps {
  route?: any;
  personData?: Brastlewark;
}