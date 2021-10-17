import {RealmDB} from '../../library/Realm';
import Realm from 'realm';
const {ObjectID} = Realm.BSON;

export enum StatusCodes {
  CREATE_USER_ERROR = 'CREATE_USER_ERROR',
  READ_USER_ERROR = 'READ_USER_ERROR',
  NO_SIGNED_IN_USERS = 'NO_SIGNED_IN_USERS',
}

export const lookForSessions = async () => {
  try {
    const loggedInUsers = await RealmDB.readFromRealm('User');
    const user = loggedInUsers.filtered('isLoggedIn == true');
    if (user.length > 0) {
      return user[0];
    }
    return StatusCodes.NO_SIGNED_IN_USERS;
  } catch (er: any) {
    return StatusCodes.READ_USER_ERROR;
  }
};

export const createUser = async ({
  userEmail,
  userName,
}: {
  userEmail: string;
  userName: string;
}) => {
  try {
    const createdUser = await RealmDB.writeToRealm('User', {
      _id: new ObjectID(),
      email: userEmail,
      userName,
      isLoggedIn: true,
    });
    return createdUser;
  } catch (er: any) {
    return StatusCodes.CREATE_USER_ERROR;
  }
};
