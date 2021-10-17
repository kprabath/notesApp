import {RealmDB} from '../../library/Realm';
import Realm from 'realm';
const {ObjectID} = Realm.BSON;

export const createNotes = async ({subject, content, createdTime, userD}) => {
  const note = await RealmDB.writeToRealm('Note', {
    subject,
    createdBy: userD._id,
    content,
    createdTime,
    _id: new ObjectID(),
  });
  return note;
};

export const getAllNotesForUser = async ({id}) => {
  const notes = await RealmDB.readFromRealm('Note');
  return notes.filtered('createdBy == $0 ', id);
};
