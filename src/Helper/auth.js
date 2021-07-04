// const { localStorage } = global.window;
import AsyncStorage from '@react-native-community/async-storage';

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
  return await AsyncStorage.getItem(TOKEN_KEY);
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

const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export default {login, getToken, logout, getLoginData};
