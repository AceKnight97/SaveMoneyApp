import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../../Views/Profile';
import ProfileChangeInfo from '../../Views/ProfileChangeInfo';

const StackProfile = createStackNavigator(
  {
    Profile: {screen: Profile},
    ProfileChangeInfo: {screen: ProfileChangeInfo},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default StackProfile;
