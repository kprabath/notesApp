import {combineReducers} from 'redux';
import applicationReducer from './reducers/Application.reducer';
import userReducer from './reducers/User.reducer';

export default combineReducers({
  application: applicationReducer,
  userReducer: userReducer,
});
