import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignInStack from './SignInStack';
import StackBottomApp from './StackBottomApp';

const AppNavigatior = createSwitchNavigator(
  {
    SignInStack: {screen: SignInStack},
    StackBottomApp: {screen: StackBottomApp},
  },
  {
    initialRouteName: 'SignInStack',
  },
);
export default createAppContainer(AppNavigatior);
