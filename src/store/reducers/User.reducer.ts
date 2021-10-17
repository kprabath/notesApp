import {SET_USER_EMAIL_SUCESS, SET_USER_NAME_SUCCESS} from '../../constants';
import {UserReducerType} from '../../types';

const initialState: UserReducerType = {
  userEmail: '',
  userName: '',
};

export default (state = initialState, {payload, type}: {type: string}) => {
  switch (type) {
    case SET_USER_EMAIL_SUCESS:
      return {...state, userEmail: payload.userEmail};
    case SET_USER_NAME_SUCCESS:
      return {...state, userName: payload.userName};
    default:
      return state;
  }
};
