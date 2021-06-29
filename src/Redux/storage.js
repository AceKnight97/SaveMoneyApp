import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const MyDataDefault = {
  KEY:'@MyData',
};
const { KEY } = MyDataDefault;

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 10,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  }
});

export default storage;

export async function setMyData(data) {
  storage.save({
    key: KEY, // Note: Do not use underscore("_") in key!
    data: JSON.stringify(data),
    // if expires not specified, the defaultExpires will be applied instead.
    // if set to null, then it will never expire.
    expires: null,
  })
  .then(res => {
    console.log('setMyData Success: ');
  })
  .catch(e => {
    console.log('Fail e: ', e);
  });
}
export async function getMyData() {
  return storage.load({ key: KEY })
  .then(ret => {
    // found data goes to then()
    // console.log('ret: ', ret);
    console.log('getMyData ret: ',ret)
    return ret ? JSON.parse(ret) : {};
  })
  .catch(e => {
    // any exception including data not found
    // goes to catch()
    console.log('e: ',e);
    switch (e.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });

}

// @MyData                          => {date1, date2,..., profile}
// date1                            => [date]: {MORNING, AFTERNOON, NIGHT, money}
// MORNING === AFTERNOON === NIGHT  => [spendingObj1, spendingObj2, ...]
// spendingObj1                     => {title: STRING, money: NUMBER, details: STRING } 

// date                             => moment().startOf('days').iosString

// money                            => number

// profile                          => {user, dob, sex, email, reason} // all are strings