// const { localStorage } = global.window;
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

const TOKEN_KEY = '@token';

const login = async (data) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(data.user || {}));
  } catch (e) {
    console.log('store token err', e);
    throw e;
  }
};

const getLoginData = async () => {
  const data = await AsyncStorage.getItem(TOKEN_KEY);
  const temp = JSON.parse(data);
  console.log({temp});
  return temp;
};

const getToken = async () => {
  try {
    const data = await AsyncStorage.getItem(TOKEN_KEY);
    const token = JSON.parse(data)?.token || '';
    return token;
  } catch (e) {
    console.log('store token err', e);
  }
};

export const updateGenderName = async (gender, username) => {
  const data = await AsyncStorage.getItem(TOKEN_KEY);
  const temp = JSON.parse(data);
  _.assign(temp, {gender, username});
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(temp));
};

export const updateVerify = async () => {
  const data = await AsyncStorage.getItem(TOKEN_KEY);
  const temp = JSON.parse(data);
  _.assign(temp, {isVerified: true});
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(temp));
};

const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export default {login, getToken, logout, getLoginData, updateGenderName, updateVerify};
