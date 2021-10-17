import {
  ADD_NOTES_SCREEN,
  LOGIN_SCREEN,
  USER_NAME_SCREEN,
  VIEW_NOTES_SCREEN,
} from '../constants';
import {User} from '../library/schemas';

export interface ApplicationReducerType {
  user: typeof User | null;
  isLoading: boolean;
  hasLoggedIn: boolean;
  notes: [];
}

export interface UserReducerType {
  userEmail: string;
  userName: string;
}

export type HomeStackParamList = {
  [VIEW_NOTES_SCREEN]: undefined;
  [ADD_NOTES_SCREEN]: undefined;
};

export type AuthStackParamList = {
  [LOGIN_SCREEN]: undefined;
  [USER_NAME_SCREEN]: undefined;
};

export type Reducers = {
  userReducer: UserReducerType;
  application: ApplicationReducerType;
};
