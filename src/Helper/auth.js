// const { localStorage } = global.window;
import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = '@token';

const login = async (data) => {
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(data));
};

const getLoginData = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

const getToken = async () => {
  return (await AsyncStorage.getItem(TOKEN_KEY)?.token) || '';
};

const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export default {login, getToken, logout, getLoginData};
