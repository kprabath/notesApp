import {SET_USER_EMAIL, SET_USER_NAME} from '../../constants';

export const setUserEmail = (userEmail: string) => ({
  type: SET_USER_EMAIL,
  payload: {userEmail},
});

export const setUserName = (userName: string) => ({
  type: SET_USER_NAME,
  payload: {userName},
});
