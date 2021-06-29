import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Journal from '../../Views/Journal';
import JournalDetails from '../../Views/JournalDetails';

const StackJournal = createStackNavigator(
  {
    Journal: { screen: Journal },
    JournalDetails: { screen: JournalDetails },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
  {
    initialRouteName: 'Journal',
  },
);

export default StackJournal;