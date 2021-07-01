import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Journal from '../../Views/Journal';
import JournalDetails from '../../Views/JournalDetails';
import JournalAddIncome from '../../Views/JournalAddIncome';

const StackJournal = createStackNavigator(
  {
    Journal: { screen: Journal },
    JournalDetails: { screen: JournalDetails },
    JournalAddIncome: { screen: JournalAddIncome },
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