import Realm from 'realm';
import {Note, User} from './schemas';

export class RealmDB {
  static realmInstance: Realm;
  static initRealm = () => {
    try {
      this.realmInstance = new Realm({
        path: 'myrealm',
        schema: [User, Note],
      });
    } catch (err: any) {
      console.error('Failed to open the realm', err?.message);
    }
  };

  static writeToRealm = (schema: string, data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.realmInstance.write(() => {
        const object = this.realmInstance.create(schema, {...data});
        return resolve(object);
      });
      return reject('Error');
    });
  };

  // Use this to read any object or collection without conditions

  static readFromRealm = (
    schema: string,
  ): Promise<Realm.Results<Realm.Object>> => {
    return new Promise(resolve => {
      const collection = this.realmInstance.objects(schema);
      return resolve(collection);
    });
  };
}
