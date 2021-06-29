import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignInStack from './SignInStack';
import StackBottomApp from './StackBottomApp';

const AppNavigatior = createSwitchNavigator(
  {
    Login: {screen: SignInStack},
    StackBottomApp: {screen: StackBottomApp},
  },
  {
    initialRouteName: 'StackBottomApp',
  },
);
export default createAppContainer(AppNavigatior);
