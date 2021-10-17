import {
  ADD_USER_NOTES,
  GET_USER_NOTES_SUCESS,
  LOGOUT_USER,
  USER_DATA_FOUND_FAIL,
  USER_DATA_FOUND_SCUCESS,
} from '../../constants';
import {ApplicationReducerType} from '../../types';

const initialState: ApplicationReducerType = {
  user: null,
  isLoading: true,
  hasLoggedIn: false,
  notes: [],
};

export default (state = initialState, {type, payload}: {type: string}) => {
  switch (type) {
    case USER_DATA_FOUND_SCUCESS:
      return {
        ...state,
        user: payload?.user,
        isLoading: false,
        hasLoggedIn: true,
      };
    case USER_DATA_FOUND_FAIL:
      return {...state, user: null, hasLoggedIn: false, isLoading: false};
    case LOGOUT_USER:
      return {...state, hasLoggedIn: false};
    case GET_USER_NOTES_SUCESS:
      return {...state, notes: payload.notes};
    case ADD_USER_NOTES:
      return {...state, notes: [...state.notes, payload.note]};
    default:
      return state;
  }
};
