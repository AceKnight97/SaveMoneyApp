import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

// import TheFirstPage from '../Login/TheFirstPage/theFirstPage';

import SignIn from '../../Login/signIn';
import SignUp from '../../Login/signUp';
import VerifyCode from '../../Login/verifyCode';
import DoneLogin from '../../Login/doneLogin';
import ForgotPassword from '../../Login/forgotPassword';

const SignInStack = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    // TheFirstPage: { screen: TheFirstPage },
    SignUp: { screen: SignUp },
    VerifyCode: { screen: VerifyCode },
    ForgotPassword: { screen: ForgotPassword },
    DoneLogin: { screen: DoneLogin },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default SignInStack;