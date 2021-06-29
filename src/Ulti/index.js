import moment from 'moment';
import _ from 'lodash';
import {EventRegister} from 'react-native-event-listeners';
import {Dimensions} from 'react-native';
import {getMyData, setMyData} from '../Redux/storage';
import {
  Today,
  LISTENER_DISCONNECT,
  LISTENER_LOADING,
  CardListData,
} from '../Constant';
import {My365Quotes} from '../Data';

const NoDataObj = {money: 0, MORNING: [], AFTERNOON: [], NIGHT: []};
const NoProfileObj = {user: '', dob: '', sex: '', email: '', reason: ''};

export function randomColor() {
  const co = Math.floor(Math.random() * 256);
  return 'rgb(' + co + ',' + co + ',' + co + ')';
}

export function getRandom(n, min = 0) {
  return Math.floor(Math.random() * n + 1 + min);
}

export function calcMoney(mor = [], aft = [], nig = []) {
  console.log('mor, aft, nig: ', mor, aft, nig);
  let total = 0;
  const arr = [...mor, ...aft, ...nig];
  if (arr.length === 0) return total;
  _.forEach(arr, (x) => {
    console.log('object x: ', x);
    total += parseInt(x.money, 10);
  });
  console.log('total: ', total);
  return total;
}

export function isTheSameObj(objA, objB) {
  if (JSON.stringify(objA) !== JSON.stringify(objB)) return false;
  return true;
}

export function filterObject(data = {}) {
  if (_.isEmpty(data)) return {};
  const keyArr = Object.keys(data);
  const tempObj = {};
  _.forEach(keyArr, (key, i) => {
    if (data[key].money !== 0) {
      const title = data[key].title;
      _.assign(tempObj, {[title]: data[key]});
    }
  });
  return tempObj;
}

export function filterArrObject(data = []) {
  if (data.length === 0) return [];
  const tempArr = [];
  _.forEach(data, (x, i) => {
    if (x.money !== 0) tempArr.push(x);
  });
  return tempArr;
}

// SESSIONS
export function getSessionData(data = []) {
  if (data.length === 0) return [...CardListData];
  const tempArr = [];
  _.forEach(CardListData, (x) => {
    const item = _.find(data, (y) => y.title === x.title);
    if (item) tempArr.push({...x, ...item});
    else tempArr.push({...x});
  });
  return [...tempArr];
}

// STORAGE
export async function getMoneyAndSess(date = Today) {
  const LocalData = await getMyData();
  if (_.isEmpty(LocalData)) return {...NoDataObj};
  const item = LocalData[date];
  console.log('getMoneyAndSess: ', item);
  if (item&&!_.isEmpty(item)) {
    const {MORNING, AFTERNOON, NIGHT} = item;
    const money = calcMoney(MORNING, AFTERNOON, NIGHT) || item.money || 0;
    console.log('getMoneyAndSess 2: ', money);
    return {money, MORNING, AFTERNOON, NIGHT};
  }
  return {...NoDataObj};
}

export async function saveTodayNote(
  MORNING = [],
  AFTERNOON = [],
  NIGHT = [],
  date = Today,
) {
  const LocalData = await getMyData();
  if (!LocalData[date]) _.assign(LocalData, {[date]: {}});
  _.assign(LocalData[date], {MORNING, AFTERNOON, NIGHT});
  await setMyData({...LocalData});
}

export async function saveTodayMoney(money = 0, date = Today) {
  const LocalData = await getMyData();
  if (!LocalData[date]) _.assign(LocalData, {[date]: {}});
  _.assign(LocalData[date], {money});
  console.log('LocalData: ', LocalData);
  await setMyData({...LocalData});
}

// MODAL
export function openLoading(flag) {
  EventRegister.emit(LISTENER_LOADING, flag);
}

export function openPopupDisconnect() {
  EventRegister.emit(LISTENER_DISCONNECT);
}

// MESSAGE 365 QUOTES
export function getQuotes() {
  const index = moment().dayOfYear() - 1;
  if (index === 0) return [My365Quotes[0], My365Quotes[364], My365Quotes[363]];
  if (index === 1) return [My365Quotes[1], My365Quotes[0], My365Quotes[364]];
  if (My365Quotes[index])
    return [My365Quotes[index], My365Quotes[index - 1], My365Quotes[index - 2]];
  return ['error', 'error', 'error'];
}

// PROFILE
export async function getProfile() {
  const LocalData = await getMyData();
  if (!LocalData.profile) {
    // have not generated "profile" object
    _.assign(LocalData, {profile: {...NoProfileObj}});
    await setMyData({...LocalData});
    return {...NoProfileObj};
  }
  return {...LocalData.profile};
}

export function isNoProfile(arr = []) {
  if (arr.length === 0) return true;
  const isItem = _.find(arr, (x) => x);
  if (isItem) return false;
  return true;
}

export async function setProfile(profile = {...NoProfileObj}) {
  const LocalData = await getMyData();
  _.assign(LocalData, {profile});
  await setMyData({...LocalData});
}
