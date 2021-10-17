import {
  CREATE_NOTES,
  CREATE_USER,
  GET_USER_NOTES,
  LOGOUT_USER,
  USER_DATA_FOUND,
} from '../../constants';

export const setUserState = () => ({
  type: USER_DATA_FOUND,
});

export const logoutUser = () => ({type: LOGOUT_USER});

export const createNoteObj = (
  payload: {
    subject: string | null;
    content: string | null;
    createdTime: string | null;
    userD: any;
  },
  success?: Function,
) => ({
  type: CREATE_NOTES,
  payload,
  success,
});

export const createUser = (payload: {userName: string; userEmail: string}) => ({
  type: CREATE_USER,
  payload,
});

export const fetchUserNotes = () => ({
  type: GET_USER_NOTES,
});
