export const User = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    email: 'string',
    userName: 'string',
    isLoggedIn: 'bool',
    notes: 'Note[]',
  },
};

export const Note = {
  name: 'Note',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    subject: 'string',
    content: 'string',
    createdTime: 'string',
    createdBy: 'objectId',
  },
};
